// TO-DO LIST COMPLETA COM DARK MODE, LOCALSTORAGE E FILTRO

// Elementos principais
const body = document.body;
const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const themeToggle = document.getElementById("theme-toggle");
const filter = document.getElementById("filter");

let todos = [];

// Carrega dados salvos do localStorage
function loadTodos() {
  const saved = localStorage.getItem("todos");
  todos = saved ? JSON.parse(saved) : [];
  renderTodos();
}

// Salva dados no localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Adiciona nova tarefa
function addTodo() {
  const text = input.value.trim();
  if (text === "") return;

  const newTodo = {
    id: Date.now(),
    text,
    completed: false
  };

  todos.push(newTodo);
  input.value = "";
  saveTodos();
  renderTodos();
}

// Remove uma tarefa
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  saveTodos();
  renderTodos();
}

// Alterna o status da tarefa (feito/não feito)
function toggleTodo(id) {
  todos = todos.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos();
  renderTodos();
}

// Filtro de tarefas
function getFilteredTodos() {
  const value = filter.value;
  if (value === "all") return todos;
  if (value === "active") return todos.filter(todo => !todo.completed);
  if (value === "completed") return todos.filter(todo => todo.completed);
}

// Renderiza na tela
function renderTodos() {
  list.innerHTML = "";
  const filtered = getFilteredTodos();
  if (filtered.length === 0) {
    list.innerHTML = "<p style='text-align:center;'>Nada aqui ainda 🤷‍♂️</p>";
    return;
  }

  filtered.forEach(todo => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
      <input type="checkbox" ${todo.completed ? "checked" : ""} />
      <span class="${todo.completed ? "done" : ""}">${todo.text}</span>
      <button class="delete-btn">✖</button>
    `;

    li.querySelector("input").addEventListener("click", () => toggleTodo(todo.id));
    li.querySelector("button").addEventListener("click", () => deleteTodo(todo.id));
    list.appendChild(li);
  });
}

// Alterna o tema
function toggleTheme() {
  const dark = body.classList.toggle("dark");
  localStorage.setItem("theme", dark ? "dark" : "light");
}

// Carrega tema salvo
function loadTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") body.classList.add("dark");
}

// Eventos
addBtn.addEventListener("click", addTodo);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTodo();
});
themeToggle.addEventListener("click", toggleTheme);
filter.addEventListener("change", renderTodos);

// Inicialização
loadTheme();
loadTodos();
