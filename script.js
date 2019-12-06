var y;
var year;
var myMapText = document.getElementById("mapText");
var myEraText = document.getElementById("eraText");

window.onscroll = function(){
  y = window.pageYOffset;
  //console.log(y);

  if (y > 0)
  {
    year = "" + Math.ceil(y * 0.1250219336725741) + " УЖ";
  }
  else {
    year = "1 AK";
  }

  myMapText.innerHTML = "Current year: " + year;
  console.log(year);

  if (y < 5)
  {
    myEraText.innerHTML = "Great Era";
  }
  else if (y < 4359)
  {
    myEraText.innerHTML = "Unification Era";
  }
  else if (y < 7247)
  {
    myEraText.innerHTML = "Lost Era";
  }
  else if (y < 11396)
  {
    myEraText.innerHTML = "Conquest Era";
  }
  /*else {
    myEraText.innerHTML = "Pre-Alvian Era";
  }*/
}
