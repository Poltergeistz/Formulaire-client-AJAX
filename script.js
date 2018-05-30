var clientContainer = document.getElementById('clients-info');

function clickclack(i) { // Looking for user click -> i = indexOf array 
  var request = new XMLHttpRequest(); // instance 

  request.open('GET', 'https://api.myjson.com/bins/11rupi'); // get url and open it
  request.onload = function () { // anonnimous function
     if (request.status >= 200 && request.status < 400) { // >= 200 & < 400 = OK
      console.log(request.responseText);
      var data = JSON.parse(request.responseText); // Parse JSON file into a var called data
      console.log(data[i]);
     } else {
      console.log("connected but error")
    }
    clientContainer.insertAdjacentHTML('beforeend', data[i].nom + "</p>" + "<p>" + data[i].prenom + "</p>" + "<p>" + data[i].âge + "</p>" + "<p>" + data[i].profession + "</p>" + "<p>" + data[i].email + "</p>" + "<p>" + data[i].téléphone + "</p>" + "<hr>")
  };
  request.send();
};
