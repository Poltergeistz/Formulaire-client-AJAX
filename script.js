/* requette = new XMLHttpRequest();
requette.onreadystatechange = function(){
    if (requette.readyState == 4 && requette.status == 200)
    document.getElementById('reponse').innerHTML = requette.responseText;
    requette.open('POST', 'clients.json', true)
}; */

$.getJSON({
    url: "client.json"
})

