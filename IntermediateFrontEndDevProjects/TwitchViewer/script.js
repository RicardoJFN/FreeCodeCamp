var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];
var div;
var idDivName;
var br;

for (var item in channels) {
    $.getJSON('https://api.twitch.tv/kraken/streams/'+channels[item]+'?callback=?', function(data){

        br = document.createElement('br');
        var a = document.createElement('a');
        

        if(data.error){
            document.body.appendChild(br);
            a.innerHTML = data.message;
            document.body.appendChild(a);
        }else if(data.stream == null){
            document.body.appendChild(br);
            a.href = data._links.channel;
            a.setAttribute('target', '_blank');
            a.innerHTML = "Offline: " + data._links.channel;
            document.body.appendChild(a);
        }else {
            document.body.appendChild(br);
            var link = a.href = data.stream.channel.url;
            a.innerHTML = data.stream.channel.display_name + " is online and streaming: " + data.stream.channel.game;
            a.setAttribute('link', '_blank');
            document.body.appendChild(a);
        }
    })
}
