var request = new XMLHttpRequest(); // instance 
request.open('GET','https://api.myjson.com/bins/dcnh2'); // recherche le fichier json via url
request.onload = function(){ // fonction anonnyme
  console.log(request.responseText);
  var data = JSON.parse(request.responseText); // parse le json pour récuperer uniquement l'objet de l'array
  console.log(data[0]);
};
request.send();

