const form = document.getElementById("data");
const tbody = document.querySelector("#table tbody");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;
  const address = document.getElementById("Address").value;
  const zip = document.getElementById("Zip").value;
  const gender = document.querySelector('input[name="Gender"]:checked').value;
  const State = document.getElementById("state").value;
  const Country = document.getElementById("country").value;

  const foodItems = document.querySelectorAll('input[name="foodItems"]:checked');
  const foodArray = Array.from(foodItems).map(item => item.value);

  if (foodArray.length < 2) {
    alert("You must choose at least 2 out of 5 food options!");
    return;
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
  cell6.textContent = foodArray.join(', ');
  cell7.textContent = State;
  cell8.textContent = Country;

  form.reset();
});