 // splide slider Scripts
 const splide = new Splide('.splide', {
    type: 'loop',
    focus: 'center',
    perPage: 7,
    autoplay: true,
    breakpoints: {
1024: {
    perPage: 4,
},
800: {
    perPage: 3,
},
600: {
    perPage: 2,
},
},
});
splide.mount();

// bill payment tab section script 

function billPayment(evt, billpay) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(billpay).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();


 // Get the button
 let mybutton = document.getElementById("myBtn");
        
 // When the user scrolls down 20px from the top of the document, show the button
 window.onscroll = function() {scrollFunction()};
 
 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     mybutton.style.display = "block";
   } else {
     mybutton.style.display = "none";
   }
 }
 
 // When the user clicks on the button, scroll to the top of the document
 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }