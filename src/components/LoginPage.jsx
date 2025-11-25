import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Paper, Title, Text, Button, Stack, Center } from '@mantine/core';
import { useDispatch } from 'react-redux';
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Ism kamida 2 harf' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Noto'g'ri email"),
      password: (value) => (value.length < 6 ? 'Parol kamida 6 belgi' : null),
    },
  });

  const handleSubmit = (values) => {
    dispatch(
      login({
        isAuth: true,
        user: {
          id: crypto.randomUUID(),
          name: values.name,
          email: values.email,
        },
      })
    );
    navigate('/profile');
  };

  return (
    <div
      style={{ minHeight: '80vh', background: '#f8f9fa', display: 'grid', placeItems: 'center' }}
    >
      <Paper radius="md" p="xl" withBorder shadow="md" w={400}>
        <Title order={2} ta="center" c="#5044e2" mb="md">
          Ro'yxatdan o'tish
        </Title>
        <Center>
          <form style={{ margin: '0 auto' }} onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="md">
              <TextInput
                required
                label="Ism"
                placeholder="John Doe"
                {...form.getInputProps('name')}
              />

              <TextInput
                required
                label="Email"
                placeholder="email@example.com"
                {...form.getInputProps('email')}
              />

              <PasswordInput
                required
                label="Parol"
                placeholder="••••••••"
                {...form.getInputProps('password')}
              />

              <Button type="submit" fullWidth color="#5044e2" size="md">
                Yaratish
              </Button>
            </Stack>
          </form>
        </Center>
      </Paper>
    </div>
  );
}

export default LoginPage;
