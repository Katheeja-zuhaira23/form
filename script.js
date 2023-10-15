

const table = document.createElement("table");
table.setAttribute("id", "table");
document.body.append(table);
const thead = document.createElement("thead");
table.append(thead);
const trow = document.createElement("tr");
thead.append(trow);
const th = document.createElement("th");
th.innerHTML = "First Name";
trow.appendChild(th)
const th2 = document.createElement("th");

th2.innerHTML = "Last Name";
const th3 = document.createElement("th");

th3.innerHTML = "Address";
const th4 = document.createElement("th");

th4.innerHTML = "Pincode";
const th5 = document.createElement("th");

th5.innerHTML = "Gender";
const th6 = document.createElement("th");

th6.innerHTML = "Food";
const th7 = document.createElement("th");

th7.innerHTML = "State";
const th8 = document.createElement("th");

th8.innerHTML = "Country";
trow.append(th2, th3, th4, th5, th6, th7, th8);

const form = document.getElementById("data");

const tbody = document.getElementById("table");

form.addEventListener("submit",function(e){
    e.preventDefault();

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const address = document.getElementById("Address").value;
    const zip = document.getElementById("Zip").value;
    const gender = document.getElementById("Gender").value;
    const food = document.getElementById("foodform").value;
    const State = document.getElementById("state").value;
    const Country = document.getElementById("country").value;

    const newRow = tbody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);

cell1.textContent = fname;
cell1.textContent = lname;
cell1.textContent = address;
cell1.textContent = zip;
cell1.textContent = gender;
cell1.textContent = food;
cell1.textContent = State;
cell1.textContent = Country;

form.reset();


})

























