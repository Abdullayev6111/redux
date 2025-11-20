import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, deleteProduct, updateProduct } from '../store/productSlice';

import { Button, Modal, TextInput, Table, Group, Title, Container } from '@mantine/core';

function Product() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  const [opened, setOpened] = useState(false);
  const [editId, setEditId] = useState(null);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = () => {
    if (!title.trim() || !price.trim()) return;

    if (editId) {
      dispatch(updateProduct({ id: editId, title, price }));
    } else {
      dispatch(
        addProduct({
          id: Date.now(),
          title,
          price,
        })
      );
    }

    setOpened(false);
    setEditId(null);
    setTitle('');
    setPrice('');
  };

  const openEdit = (p) => {
    setEditId(p.id);
    setTitle(p.title);
    setPrice(p.price);
    setOpened(true);
  };

  return (
    <Container size="md" py={40}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Product List</Title>
        <Button onClick={() => setOpened(true)}>Add Product</Button>
      </Group>

      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Price</Table.Th>
            <Table.Th>Actions</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {products.map((p) => (
            <Table.Tr key={p.id}>
              <Table.Td>{p.title}</Table.Td>
              <Table.Td>${p.price}</Table.Td>
              <Table.Td>
                <Group>
                  <Button size="xs" onClick={() => openEdit(p)}>
                    Edit
                  </Button>

                  <Button size="xs" color="red" onClick={() => dispatch(deleteProduct(p.id))}>
                    Delete
                  </Button>
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={editId ? 'Edit Product' : 'Add Product'}
        centered
      >
        <TextInput
          label="Product Name"
          placeholder="Apple"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          mb="md"
        />

        <TextInput
          label="Price"
          placeholder="1.5"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Button fullWidth mt="md" onClick={handleSave}>
          Save
        </Button>
      </Modal>
    </Container>
  );
}

export default Product;
