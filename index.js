function resultatvoulu () {
  var age = document.getElementById("age").value;
  if (isNaN(age)) {
    alert("Ceci n'est pas un nombre")
  }
  else {
    age = parseFloat(age);
    if(age < 18){
      alert("mineur");
    }
    else {
      alert("majeur");
    }
  }
}
