img=[
    "http://www.jiawin.com/demos/swipe-mobile-touch-slider/images/explorations1.jpg",
    "http://www.jiawin.com/demos/swipe-mobile-touch-slider/images/explorations2.jpg",
    "http://www.jiawin.com/demos/swipe-mobile-touch-slider/images/fiftyandtwothirds3.jpg"
]
var i=0;
function carreg_slide(){
    document.getElementById("img").src=img[i]
    i++
    if(i>2){
        i=0
    }
    
}
function slider(){
    carreg_slide()
    
    setInterval(carreg_slide,7000)
}



