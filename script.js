$(document).ready(function(){
    $.getJSON("projects.json", function(category){
        // Games Project html
        projects = category['games'];
        $.each(projects,function(ix,value){
            $(`#game-projects`).append(`<li><a class= "text-decoration-none" href="${value['link']}">
            <figure>
                <img src= ${value['img']}>
                <figcaption>
                    <h6>${value['title']}</h6>
                    <p><small>${value['description']}</small></p>
                </figcaption>
            </figure> </a>
            </li>`);
        });
        // Literature Project html
        projects = category['literature'];
        $.each(projects,function(ix,value){
            $(`#literature-projects`).append(`<li><a class= "text-decoration-none" href="${value['link']}">
            <figure>
                <img src= ${value['img']}>
                <figcaption>
                    <h6>${value['title']}</h6>
                    <p><small>${value['description']}</small></p>
                </figcaption>
            </figure> </a>
            </li>`);
        });
    }).fail(function(){
        console.log("An error has occurred.");
    });
});