$(document).ready(function(){

    let slideAtual = 1
    let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]
    
    setInterval(mudarSlide, 2000);

    function mudarSlide(){
        //REMOVER O SLIDE ANTERIOR
        if (slideAtual >0){
            $("#banner-carrossel").removeClass(listaSlides[slideAtual -1])
        }
        else{
            $("#banner-carrossel").removeClass(listaSlides[listaSlides.length -1])
        }

        //EXIBIR O SLIDE ATUAL
        $("#banner-carrossel").addClass(listaSlides[slideAtual])
        //INDICAR QUAL O SLIDE ATUAL
        console.log("var:", slideAtual)
        slideAtual ++
            
        if (slideAtual >2){
            slideAtual = 0
        }
      
    }



    $("#barras").click(function(){
        if ($("#menu").hasClass("menu-ativo")){
            $("#menu").removeClass("menu-ativo")
        }
        else{
            $("#menu").addClass("menu-ativo")
        }
    })
})





function cadastrarNewsletter() {
    let email = document.getElementById("campo-email").value
    alert(email)
}

function mostrarmenu($event){
    let menu = document.getElementById("menu")
   
    /*if(menu.style.display == "none")*/

    if(getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
    }
    else{
        menu.style.display = "none"
    }

    event.preventDefault();
}