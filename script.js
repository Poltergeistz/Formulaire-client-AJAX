// var counter = 1;
var clientContainer = document.getElementById('clients-info');
var btn = document.getElementById('btn');
btn.addEventListener("click", function () {
  var request = new XMLHttpRequest(); // instance 
  request.open('GET', 'https://api.myjson.com/bins/dcnh2'); // recherche le fichier json via url
  request.onload = function () { // fonction anonnyme
    if (request.status >= 200 && request.status < 400) {
      console.log(request.responseText);
      var data = JSON.parse(request.responseText); // parse le json pour récuperer uniquement l'objet de l'array
      console.log(data[0]);
    } else {
      console.log("connected but error")
    }
    addHtml(data)
  };
  request.send();
});

function addHtml(data) {
  var strHtml = "";
  for (i = 0; i < data.length; i++) {
    strHtml += "<p>" + "nom :"+ data[i].nom + " " + "prenom :" + data[i].prenom + " " + "âge :" + data[i].âge + " " + "profession :" + data[i].profession + " " + "email :" + data[i].email + " " + "téléphone :" + data[i].téléphone + " " + "</p>";
  };
  clientContainer.insertAdjacentHTML('beforeend', strHtml);
  // clientContainer.insertAdjacentHTML('beforeend', "testing " + "my " + "AJAX"); TEST SEQUENCE
};



