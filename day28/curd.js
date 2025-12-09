let data = [];
let editIndex = -1;

function Createdata() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (editIndex === -1) {
        data.push({ name, email });
    } else {
        data[editIndex].name = name;
        data[editIndex].email = email;
        editIndex = -1;
    }

    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    displaydata();
}

function displaydata() {
    let table = "";
    data.forEach((item, index) => {
        table += `
            <tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>
                    <button onclick="editButton(${index})">Edit</button>
                    <button onclick="deleteButton(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
    document.getElementById('tbody').innerHTML = table;
}

function deleteButton(i) {
    data.splice(i, 1);
    displaydata();
}

function editButton(i) {
    document.getElementById('name').value = data[i].name;
    document.getElementById('email').value = data[i].email;
    editIndex = i;
}
