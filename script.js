const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var container =document.querySelector("#elem-container")
// var img = document.querySelector("#fixedimg")


// container.addEventListener("mouseenter",function(){
//     img.style.display="block";
// })
// container.addEventListener("mouseleave",function(){
//     img.style.display="none";
// })
// var elems = document.querySelectorAll(".elem")
// elems.forEach(function(e){
//     e.addEventListener("mouseenter",function(){
//         var elemimg = e.getAttribute("data-img")
//         img.style.backgroundImage = `url(${image})`
//     })
// })


// var elem1= document.querySelector


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixedimg")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}
page4Animation();
function swiperjs(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "3",
        centeredSlides: true,
        spaceBetween: 60,
      });
}
swiperjs()