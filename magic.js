function buttonPushed() {
  console.log("Magic started");
  var dice = [
   "AAEEGN",
   "ABBJOO",
   "ACHOPS",
   "AFFKPS",
   "AOOTTW",
   "CIMOTU",
   "DEILRX",
   "DELRVY",
   "DISTTY",
   "EEGHNW",
   "EEINSU",
   "EHRTVW",
   "EIOSST",
   "ELRTTY",
   "HIMNQU",
   "HLNNRZ"
  ];
  deleteExisting();
  for (var i = 0; i < 16; i++) {
    var el = document.getElementById('letter_' + i);
    var random_char_index = Math.floor(Math.random() * 6);
    var random_arr_index = randomIntFromInterval(0, dice.length - 1);
    var picked_die = dice.splice(random_arr_index, 1);
    var heading = document.createElement("H3");
    var text = document.createTextNode(picked_die[0].substring(random_char_index, random_char_index + 1));
      heading.name = "letter_el";
    heading.appendChild(text);
    el.appendChild(heading);
  }
};

function randomIntFromInterval(min, max) { // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function deleteExisting() {
  var existing = document.getElementsByTagName("H3");
  for (var i = 0; i < existing.length; i++) {
    existing[i].parentNode.removeChild(existing[i]);
    i--;
  }
}
