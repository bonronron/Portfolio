$(document).ready(function(){
    $.getJSON("projects.json", function(category){
        // Games Project html
        projects = category['games'];
        
        $.each(projects,function(ix,value){
            badges = "";
            $.each(value['badges'],(i,val)=>{
                badges = badges +`<span class="badge badge-dark badge-pill" style="font-size:0.6em; font-weight:bold;">${val}</span> `
            });
            console.log(badges)
            $(`#game-projects`).append(`<li><a class= "text-decoration-none" href="${value['link']}">
            <figure>
                <img src= ${value['img']}>
                <figcaption class="game-project-caption">
                    <h6>${value['title']}</h6>
                    <p><small>${value['description']}</small></p>
                </figcaption>
                <hr class="bg-secondary m-0">${badges}
            </figure> </a>
            </li>`);
        });
        // Literature Project html
        projects = category['literature'];
        $.each(projects,function(ix,value){
            $(`#literature-projects`).append(`<li class=col-5><a class= "text-decoration-none" target="_blank" href="${value['pdf']}">
                <div class="card p-2 literature-card" >
                    <img style="width:2em" class='card-img-top' src="https://upload.wikimedia.org/wikipedia/commons/d/df/Icon-pdf.svg">
                    <div class=card-body>
                        <h6 class=card-title>${value['title']}</h6>
                        <small class="card-text text-wrap">${value['description']}</small>
                    </div>
                </div>
            </a>
            </li>`);
        });
    }).fail(function(){
        console.log("An error has occurred.");
    });
});