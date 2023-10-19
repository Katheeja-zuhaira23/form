

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
th5.setAttribute("id", "th5");

const th6 = document.createElement("th");
th6.setAttribute("id", "th6");
th6.innerHTML = "Food";

const th7 = document.createElement("th");
th7.innerHTML = "State";
const th8 = document.createElement("th");

th8.innerHTML = "Country";
trow.append(th2, th3, th4, th5, th6, th7, th8);

const form = document.getElementById("data");

const tbody = document.getElementById("table");

form.addEventListener("submit", function (e) {
  e.preventDefault();


  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const address = document.getElementById("Address").value;
  const zip = document.getElementById("Zip").value;
  const gender = document.getElementById("Gender").value;
  const food = document.getElementById("foodform").value;
  const State = document.getElementById("state").value;
  const Country = document.getElementById("country").value;

  if (document.getElementById('male').checked) {
    var th5 = document.getElementById('th5')
    th5.innerHTML = male
  } else if (document.getElementById('female').checked) {
    var th5 = document.getElementById('th5')
    th5.innerHTML = female
  }

  var th6 = document.getElementById('th6')
  var checkboxes = document.getElementsByName('foodItems')//5 items
  var numberOfCheckedItems = 0;
  var listArray = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      numberOfCheckedItems++;
      console.log(checkboxes[i].value)
      listArray.push(checkboxes[i].value)
    }
  }
  th6.innerHTML = listArray
  console.log(listArray)
  console.log(listArray.length)

  if (listArray.length < 2) {
    alert("You must choose atleast 2 out of 5 Options!");
    th6.innerHTML = "";
  }

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
  cell2.textContent = lname;
  cell3.textContent = address;
  cell4.textContent = zip;
  cell5.textContent = gender;
  cell6.textContent = food;
  cell7.textContent = State;
  cell8.textContent = Country;

  form.reset();


});

























