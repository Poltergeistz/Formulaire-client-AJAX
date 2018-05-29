/* requette = new XMLHttpRequest();
requette.onreadystatechange = function(){
    if (requette.readyState == 4 && requette.status == 200)
    document.getElementById('reponse').innerHTML = requette.responseText;
    requette.open('GET', 'clients.json', true)
    requette.send()
}; */

$.getJSON("clients.json", function(data){
    var items = [];
    $.each(data )
}

$.getJSON( "ajax/test.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
      items.push( "<li id='" + key + "'>" + val + "</li>" );
    });
   
    $( "<ul/>", {
      "class": "my-new-list",
      html: items.join( "" )
    }).appendTo( "body" );
  });

