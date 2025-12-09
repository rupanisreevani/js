let todos = JSON.parse(localStorage.getItem("todoData")) || [];
let editIndex = -1;

// Display todos
function showTodos(list = todos) {
    let todoList = document.getElementById("todoList");
    todoList.innerHTML = "";

    list.forEach((todo, index) => {
        todoList.innerHTML += `
            <li>
                ${todo}
                <div class="btns">
                    <button class="edit" onclick="editTodo(${index})">Edit</button>
                    <button class="delete" onclick="deleteTodo(${index})">Delete</button>
                </div>
            </li>
        `;
    });
}

// Add or Update Todo
function addTodo() {
    let input = document.getElementById("todoInput");
    let value = input.value.trim();

    if (value === "") {
        alert("Enter a task!");
        return;
    }

    if (editIndex === -1) {
        todos.push(value);
    } else {
        todos[editIndex] = value;
        editIndex = -1;
    }

    input.value = "";
    saveData();
    showTodos();
}

// Edit Todo
function editTodo(index) {
    let input = document.getElementById("todoInput");
    input.value = todos[index];
    editIndex = index;
}

// Delete Todo
function deleteTodo(index) {
    todos.splice(index, 1);
    saveData();
    showTodos();
}

// Search Todo
function searchTodo() {
    let query = document.getElementById("search").value.toLowerCase();

    let filtered = todos.filter(item =>
        item.toLowerCase().includes(query)
    );

    showTodos(filtered);
}

// Save to localStorage
function saveData() {
    localStorage.setItem("todoData", JSON.stringify(todos));
}

// First load
showTodos();
