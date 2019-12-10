var y;
var yearNumber;
var yearName;
var myMapText = document.getElementById("mapText");
var myEraText = document.getElementById("eraText");
var myInfoText = document.getElementById("infoText");

window.onscroll = function(){
  y = window.pageYOffset;
  //console.log(y);

  var yearNumber = Math.ceil(y * 0.1250219336725741);

  if (y > 0)
  {
    yearName = "" + yearNumber + " УЖ";
  }
  else {
    yearName = "1 AK";
  }

  myMapText.innerHTML = "Current year: " + yearName;
  console.log(yearName);

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

  // This section is for changing the map.
  if (y <= 0) map.src="images/1 AK.png"; else
  if (yearNumber <= 30) map.src="images/30.png"; else
  if (yearNumber <= 90) map.src="images/90.png"; else
  if (yearNumber <= 151) map.src="images/151.png"; else
  if (yearNumber <= 262) map.src="images/262.png"; else
  if (yearNumber <= 335) map.src="images/335.png"; else
  if (yearNumber <= 391) map.src="images/391.png"; else
  if (yearNumber <= 476) map.src="images/476.png"; else
  if (yearNumber <= 522) map.src="images/522.png"; else
  if (yearNumber <= 545) map.src="images/545.png"; else
  if (yearNumber <= 606) map.src="images/606.png"; else
  if (yearNumber <= 683) map.src="images/683.png"; else
  if (yearNumber <= 906) map.src="images/906.png"; else
  if (yearNumber <= 958) map.src="images/958.png"; else
  if (yearNumber <= 997) map.src="images/997.png"; else
  if (yearNumber <= 1075) map.src="images/1075.png"; else
  if (yearNumber <= 1102) map.src="images/1102.png"; else
  if (yearNumber <= 1127) map.src="images/1127.png"; else
  if (yearNumber <= 1155) map.src="images/1155.png"; else
  if (yearNumber <= 1187) map.src="images/1187.png"; else
  if (yearNumber <= 1231) map.src="images/1231.png"; else
  if (yearNumber <= 1272) map.src="images/1272.png"; else
  if (yearNumber <= 1320) map.src="images/1320.png"; else
  if (yearNumber <= 1366) map.src="images/1366.png"; else
  if (yearNumber <= 1425) map.src="images/1425.png";

  // This section is for changing the flavortext.
  // Yes I could've just added squigly brackets to the previous block but
  // that would mess up the simplicity and i don't have time for that crap
  if (y <= 0) myInfoText.innerHTML = "Kanas surrenders to the Alvian Empire.  Dezhak, refusing to surrender, is exiled to Heon, Astus's moon.  The Alvian Empire conquers the remainder of Astus, and the Great Era begins.  The calendar is reset."; else
  if (yearNumber <= 30) myInfoText.innerHTML = "Odovek falls to the Alvian Empire as it pushes the remaining nations to the easternmost quarter of Astus.  Dezhak refuses to ally with Kanas as they both suffer from the onslaught of Alvia."; else
  if (yearNumber <= 90) myInfoText.innerHTML = "As Alvia sweeps across the entire western half of Astus, Odovek (dull purple) and Dezhak (navy) refuse to ally with Kanas, and Dezhak manages to take some territory from Kanas."; else
  if (yearNumber <= 151) myInfoText.innerHTML = "Alvia launches an all-out war on Astus.  Amidst infighting in the north and Ekoros territory loss in the south, many remaining nations ally with Kanas to stand against Alvia."; else
  if (yearNumber <= 262) myInfoText.innerHTML = "The Third Synthetic Revolution takes place.  Alvia pools the knowledge and resources of its newly-conquered nations to discover deeper secrets of technology, enabling it to spread across the entire west."; else
  if (yearNumber <= 335) myInfoText.innerHTML = "Alvia conquers its weaker neighbors in the west, as Kanas is weakened by a surprise attack from the east after overextending into the south."; else
  if (yearNumber <= 391) myInfoText.innerHTML = "Alvia launches a full-scale assault on the western territories, wiping out a nation as it prepares to take on its other neighbors.  Kanas continues to grow stronger."; else
  if (yearNumber <= 476) myInfoText.innerHTML = "The Second Synthetic Revolution begins.  Marked by a discovery of technology of the past, coupled with new knowledge from the Second Enlightenment, new advances in technology begin to occur."; else
  if (yearNumber <= 522) myInfoText.innerHTML = "Alvia slowly begins to spread as more territory is claimed.  Nations continue to grow stronger."; else
  if (yearNumber <= 545) myInfoText.innerHTML = "The Alvian Empire is established once more, reclaiming its homeland as an official nation.  Existing nations continue to spread across the largely unclaimed landscape of Astus."; else
  if (yearNumber <= 606) myInfoText.innerHTML = "The Second Enlightenment begins, bringing with it a new understanding of Astus and its secrets.  More nations rise from the rubble, and Kanas begins to grow."; else
  if (yearNumber <= 683) myInfoText.innerHTML = "In the ruin of the Lost Era, the lack of centralized power allows the growth of nations which had previously been conquered."; else
  if (yearNumber <= 906) myInfoText.innerHTML = "Distrust causes alliances to fracture, leading to a continental free-for-all.  Nations are reduced to rubble, and Alvia as a nation is wiped from Astus.  The Lost Era begins."; else
  if (yearNumber <= 958) myInfoText.innerHTML = "Amidst the tension, border skirmishes far from Alvia sow distrust amongst the rival nations.  Suddenly, all hell breaks loose."; else
  if (yearNumber <= 997) myInfoText.innerHTML = "Alvia continues its assault on Astus, as more kingdoms fall.  Tension builds in the continent as rival kingdoms seek an alliance against Alvia."; else
  if (yearNumber <= 1075) myInfoText.innerHTML = "Sure enough, Alvia begins its second conquest of Astus, blotting out the Kuos (purple) as other kingdoms fall as well."; else
  if (yearNumber <= 1102) myInfoText.innerHTML = "Ekoros (gray) and Kanas both expand while Alvia lies dormant, as though it is preparing for something."; else
  if (yearNumber <= 1127) myInfoText.innerHTML = "As Astus breathes a sigh of relief from the menace of the Alvs, other empires like the Elshu (sky blue) and Odask (NW green) are becoming strong."; else
  if (yearNumber <= 1155) myInfoText.innerHTML = "The First Alvian Conquest concludes in 1155 УЖ.  By this time, other territories like the Kanas Empire in orange are also strong."; else
  if (yearNumber <= 1187) myInfoText.innerHTML = "As the Alvian Conquest continued, groundbreaking innovations in technology were made, leading to the first Synthetic Revolution."; else
  if (yearNumber <= 1231) myInfoText.innerHTML = "At first it seemed no different from the conquest of other nations.  However, Alvia spread quickly."; else
  if (yearNumber <= 1272) myInfoText.innerHTML = "Then, like a distant rumble, the first Alvian Conquest began."; else
  if (yearNumber <= 1320) myInfoText.innerHTML = "More kingdoms fell, and there could no longer be found any unclaimed territory on the face of Astus."; else
  if (yearNumber <= 1366) myInfoText.innerHTML = "With the advent of the first Enlightenment, territories began to spread.  A few minor kingdoms fell."; else
  if (yearNumber <= 1425) myInfoText.innerHTML = "In the beginning, the Alvs were just another people.  Alvia was one territory among many.";

}
