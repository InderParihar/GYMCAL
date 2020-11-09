const hamburgerMenu = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburgerMenu.addEventListener('click', () => {
  navUL.classList.toggle('show');
})



var fatcalform = document.getElementById('fatcalculator');

fatcalform.addEventListener('submit', (entered) => {
  entered.preventDefault();
  console.log("form has been submitted");
  var totalweight = (fatcalform.elements["weight"].value) * 2.202;
  var waistfat = fatcalform.elements["waist"].value;
  var factorOne = (totalweight * 1.082) + 94.42;
  var factorTwo = waistfat * 4.15;
  var leanBodyMass = factorOne - factorTwo;
  var bodyFatWeight = totalweight - leanBodyMass;
  var bodyFatPercentage = (bodyFatWeight * 100)/totalweight;
  console.log(bodyFatPercentage);

  var fatpercentageheading = document.createElement("h1");
  var fatpercentagetext = document.createTextNode("Your body fat percentage is " + bodyFatPercentage + " %.");
  fatpercentageheading.setAttribute("id", "fatpercentagecss");
  fatpercentageheading.appendChild(fatpercentagetext);
  document.getElementById('fatpercentageindi').appendChild(fatpercentageheading);
})
