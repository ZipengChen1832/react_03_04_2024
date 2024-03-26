function Todo({ title }) {
  function handleEdit() {
    console.log("Edit");
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleEdit}>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export function foo() {}

export default Todo;
