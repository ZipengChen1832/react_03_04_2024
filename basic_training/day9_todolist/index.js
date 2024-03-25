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

  async function deleteTodo(id) {
    return fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }

  return {
    getTodos,
    addTodo,
    deleteTodo,
  };
})();

class TodosView {
  constructor() {
    this.newTodoForm = document.querySelector(".new-todo-form");
    this.todoInput = document.querySelector("#new-todo");
    this.todoList = document.querySelector(".todo-list");
  }

  clearInput() {
    this.todoInput.value = "";
  }

  renderTodos(todos) {
    this.todoList.innerHTML = "";
    todos.forEach((todo) => {
      this.renderNewTodo(todo);
    });
  }

  removeTodoElem(id) {
    document.getElementById(id).remove();
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

class TodosModel {
  #todos;
  constructor(todos = []) {
    this.#todos = todos;
  }

  getTodos() {
    return this.#todos;
  }

  setTodos(newTodos) {
    this.#todos = newTodos;
  }

  addTodo(newTodo) {
    this.#todos.push(newTodo);
  }

  deleteTodo(id) {
    this.#todos = this.#todos.filter((todo) => todo.id !== id);
  }
}

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
    this.setUpDeleteEvent();
  }

  async fetchTodos() {
    const todos = await todosAPIs.getTodos();
    this.model.setTodos(todos);
    this.view.renderTodos(todos);
  }

  setUpDeleteEvent() {
    //event delegation
    this.view.todoList.addEventListener("click", async (e) => {
      const elem = e.target;
      if (elem.classList.contains("todo__del-btn")) {
        const todoElem = elem.parentElement.parentElement;
        const deleteId = todoElem.id;
        await todosAPIs.deleteTodo(deleteId);
        this.model.deleteTodo(deleteId);
        this.view.removeTodoElem(deleteId);
      }
    });
  }

  setUpSubmitEvent() {
    this.view.newTodoForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const input = this.view.todoInput;
      const title = input.value;
      if (!title) {
        return;
      }

      const newTodo = await todosAPIs.addTodo({
        title,
      });
      this.model.addTodo(newTodo);
      //   console.log(this.model.getTodos());
      this.view.renderNewTodo(newTodo);
      this.view.clearInput();
    });
  }
}

const todosView = new TodosView();
const todosModel = new TodosModel();
const todosController = new TodosController(todosView, todosModel);



