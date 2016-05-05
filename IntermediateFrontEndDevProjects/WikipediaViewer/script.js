/**
 * Created by ricardon on 15-03-2016.
 */
function getSearchedItem(){

    var searchedItem = document.getElementById("text_area").value;
    var newDiv;
    var divIdName;
    var br;

    $.getJSON('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&generator=search&gsrsearch='+searchedItem+'&callback=?', function(data){
        
        var page = data.query.pages
            for(var i in page){
                newDiv = document.createElement('a');
                newDiv.setAttribute('id',divIdName);
                newDiv.innerHTML = page[i].title;
                br = document.createElement("br");
                document.body.appendChild(newDiv);
                document.body.appendChild(br);
                //"\n" + page[i].extract
            }
        
      
    })
    
   
}

function getRandomItem(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");
}





