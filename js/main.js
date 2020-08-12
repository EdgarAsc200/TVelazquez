const images = document.querySelectorAll('.img');
const ligthbox = document.querySelector('.ligthbox');

const img = document.querySelector('.img-show');

ScrollReveal().reveal('.container', {delay:300});
images.forEach(image => {
    image.addEventListener('click', () => {
        ligthbox.classList.add('move');
        var src = image.getAttribute('src');
        img.src = src;
    })
})

$(document).ready(function(){
    //alert(".,dsfnngbn");   
   
    $("#btn-responsive").click(function(){
        if($("#btn-responsive").hasClass("btn")){
            $("#menu").slideDown();  
         $("#btn-responsive").removeClass("btn");
        }
        else{
            $("#menu").slideUp();
            $("#btn-responsive").addClass("btn");
            
            
            
        }
     });
    
});





