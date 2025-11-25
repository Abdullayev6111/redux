import AddTodo from './AddTodo';

function Profile() {
  return (
    <section className="container">
      <div style={{ padding: '30px 140px' }}>
        <h1 style={{ textAlign: 'center', fontWeight: 900, letterSpacing: 2, color: '#5044e2' }}>
          Add new Todos
        </h1>
        <AddTodo />
      </div>
    </section>
  );
}

export default Profile;
