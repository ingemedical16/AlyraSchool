
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Defi1 Otile de analyse bitcoin</title>
    <script src="node_modules/jquery/dist/jquery.js"></script>
    <script src="node_modules/q/q.js"></script>
</head>

<body>
    <h1>  +++++test sur json</h1>
    <script>
      

       /** var successCallBack = function(reponse){
            console.log(reponse);
            return reponse;
        }
        
        var getOption = {

            method:'GET',
            async: true,
            cache: false,
            success:successCallBack
        }
       
        $.get(url,successCallBack)
        $.ajax(url,getOption)
        var test = $.ajax(url,getOption)
        console.log(test);**/
        $.getJSON( url, function( data ) {
        var items = [];
        console.log("next_block:" + data.next_block[0]);

        $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
         });
 
        $( "<ul/>", {
            "class": "my-new-list",
         html: items.join( "" )
        }).appendTo( "Blockchain" );

    

    </script>

    <script>
    /**var btcs = new WebSocket('wss://ws.blockchain.info/inv');
    btcs.onopen = function(){
        btcs.send(JSON.stringify({"op":"blocks_unsub"}));
    }
    btcs.onmessage = function(onmsg){
        var response = JSON.parse(onmsg.data);
        console.log(response);
    }**/
    </script>
</body>

</html>>