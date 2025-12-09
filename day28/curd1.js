let data = [];
let editIndex = -1;

function Createdata() {
    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();

    // --------------------------
    //     FORM VALIDATION
    // --------------------------

    // Name empty check
    if (name === "") {
        alert("Please enter your name");
        return;
    }

    // Name should contain only letters/spaces
    let namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        alert("Name should contain only letters");
        return;
    }

    // Email empty check
    if (email === "") {
        alert("Please enter your email");
        return;
    }

    // Proper email format check
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email");
        return;
    }

    // --------------------------
    //     INSERT / UPDATE DATA
    // --------------------------

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
