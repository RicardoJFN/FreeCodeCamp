/**
 * Created by ricardon on 15-03-2016.
 */
function getSearchedItem(){

    var searchedItem = document.getElementById("text_area").value;
    //$("#teste").html(searchedItem);

    $.getJSON("http://en.wikipedia.org/w/api.php?callback=?&action=query&titles="+searchedItem+"&generator=links&prop=categories",function(json){
    //$.getJSON("https://en.wikipedia.org/w/api.php?callback=?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&titles="+searchedItem,function(json){
        $.ajaxSetup({dataType: json});
        for(var pageId in json.query.pages){
            if(json.query.pages.hasOwnProperty(pageId)){
                $("#main_info").html("<p>"+ JSON.stringify(json.query.pages[pageId]) +"</p>");
            }
        }

    });

//ver wikiTExt no json

}




