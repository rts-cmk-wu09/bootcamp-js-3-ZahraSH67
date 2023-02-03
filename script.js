(function etNavn(){
    const aTags = document.querySelectorAll("nav ul a")

aTags.forEach(function(atag){
    //  console.log(tag)
     atag.addEventListener("click", clickHandler)
    
})
function clickHandler(event){

    const articles = document.querySelectorAll("main article")
    articles.forEach(function(article) {
        article.style.display = "none"
        
    });
    // console.log(event.target.hash.replace("#", ""))
    document.querySelector("." + event.target.hash.replace("#", "")).style.display = "block"
    // på den måde kan vi refrere til class
  
    
    }
})()
