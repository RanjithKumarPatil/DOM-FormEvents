function validationForm() {
  let x = document.forms["myForm"]["fullName"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let y = document.forms["myForm"]["mail"].value;
  if (y == "") {
    alert("Email must be filled out");
    return false;
  }
  if (x == "" && y == "") {
    alert("Name and Email must be filled out");
    return false;
  }
  let z = document.forms["myForm"]["phNo"].value;
  if (z == "") {
    alert("Phone Number must be filled out");
    return false;
  }
}
