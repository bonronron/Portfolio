$(document).ready(function(){
    $.getJSON("projects.json", function(data){
        $.each(data,function (index,value){
            console.log(index,value);
            $("#projects").append(`<li><a href="${value['link']}">
            <figure>
                <img src= ${value['img']}>
                <figcaption>
                    <h3>${value['title']}</h3>
                    <p>${value['description']}</p>
                </figcaption>
            </figure> </a>
            </li>`);
        })}).fail(function(){
        console.log("An error has occurred.");
    });
});