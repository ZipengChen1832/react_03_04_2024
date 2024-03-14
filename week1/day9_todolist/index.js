// json server has to be in a different folder

const todosAPIs = (function () {
  const API_URL = "http://localhost:3000/todos";

  async function getTodos() {
    return fetch(API_URL).then((res) => res.json());
  }

  //{title: "string"}
  async function addTodo(newTodo) {
    return fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    }).then((res) => res.json());
  }

  return {
    getTodos,
    addTodo,
  };
})();

class TodosView {
  constructor() {
    this.newTodoForm = document.querySelector(".new-todo-form");
    this.todoInput = document.querySelector("#new-todo");
    this.todoList = document.querySelector(".todo-list");
  }

  renderTodos(todos) {
    this.todoList.innerHTML = "";
    todos.forEach((todo) => {
      this.renderNewTodo(todo);
    });
  }

  renderNewTodo(newTodo) {
    this.todoList.appendChild(this.createTodoElement(newTodo));
  }

  createTodoElement(todo) {
    const todoElement = document.createElement("div");
    todoElement.classList.add("todo");
    todoElement.setAttribute("id", todo.id);
    todoElement.innerHTML = `<div class="todo__title">${todo.title}</div>
    <div class="todo__actions">
      <button class="todo__del-btn">Delete</button>
      <button class="todo__edit-btn">Edit</button>
    </div>`;
    return todoElement;
  }
}

class TodosModel {}

class TodosController {
  constructor(view, model) {
    this.view = view;
    this.model = model;
    this.init();
  }

  init() {
    this.setUpEvents();
    this.fetchTodos();
  }

  setUpEvents() {
    this.setUpSubmitEvent();
  }

  async fetchTodos() {
    const todos = await todosAPIs.getTodos();
    this.view.renderTodos(todos);
  }

  setUpSubmitEvent() {
    this.view.newTodoForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const title = this.view.todoInput.value;
      const newTodo = await todosAPIs.addTodo({
        title,
      });
      console.log(newTodo);

      this.view.renderNewTodo(newTodo);
    });
  }
}

const todosView = new TodosView();
const todosModel = new TodosModel();
const todosController = new TodosController(todosView, todosModel);
