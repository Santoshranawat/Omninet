
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
