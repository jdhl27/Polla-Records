function darkMode(){
    var bombillo = document.getElementById("bombilla");

    if(bombillo.getAttribute("src") == "images/lampara-encendida.png"){
        bombillo.setAttribute("src" , "images/lampara-apagada.png")
        bombillo.setAttribute("title" , "Apagada")
    }else{
        bombillo.setAttribute("src" , "images/lampara-encendida.png" )
        bombillo.setAttribute("title" , "Encendida")
    }

    var element = document.body;
    var articles = document.getElementsByClassName("article");
    var articles_date = document.getElementsByClassName("article-date")

    element.classList.toggle("dark-mode-body");

    for(var i = 0; i < articles.length; i++){
        articles[i].classList.toggle("dark-mode-article");
        articles_date[i].classList.toggle("dark-mode-article-date");
    }
    
}