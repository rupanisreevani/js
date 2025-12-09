let data = [];
let editIndex = -1;

function Createdata() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let dob = document.getElementById('dob').value;
    let phone = document.getElementById('phone').value;
    let location = document.getElementById('location').value;

    if (editIndex === -1) {
        data.push({ name, email, dob, phone, location });
    } else {
        data[editIndex] = { name, email, dob, phone, location };
        editIndex = -1;
    }

    clearFields();
    displaydata();
}

function displaydata() {
    let table = "";

    data.forEach((item, index) => {
        table += `
            <tr>
                <td>${item.name}</td>
                <td>${item.email}</td>
                <td>${item.dob}</td>
                <td>${item.phone}</td>
                <td>${item.location}</td>
                <td>
                    <button onclick="editButton(${index})" class="btn-edit">Edit</button>
                    <button onclick="deleteButton(${index})" class="btn-delete">Delete</button>
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
    let item = data[i];

    document.getElementById('name').value = item.name;
    document.getElementById('email').value = item.email;
    document.getElementById('dob').value = item.dob;
    document.getElementById('phone').value = item.phone;
    document.getElementById('location').value = item.location;

    editIndex = i;
}

function clearFields() {
    document.getElementById('name').value = "";
    document.getElementById('email').value = "";
    document.getElementById('dob').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('location').value = "";
}
