/*-------------------------------------------------------------------------------
  owlling
-------------------------------------------------------------------------------*/

$(window).load(function() {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

//toggle scroll menu
$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    //adjust menu background
    if (window.innerWidth < 768) {
        $('.sticky-navigation').removeClass('sticky-top').addClass('fixed-top');
    } else {
        $('.sticky-navigation').removeClass('fixed-top').addClass('sticky-top');
    }

    // adjust scroll to top
    if (scroll >= 600) {
        $('.scroll-top').addClass('active');
    } else {
        $('.scroll-top').removeClass('active');
    }
    return false;
});

// scroll top top
$('.scroll-top').click(function() {
    $('html, body').stop().animate({
        scrollTop: 0
    }, 1000);
});


//like

function incrBy(key) {
    localStorage.setItem(key, localStorage.getItem(key) ? localStorage.getItem(key) : 215);

    localStorage.setItem(key, parseInt(localStorage.getItem(key)) + 1)
    return localStorage.getItem(key);

}

function getKey(key) {
    return localStorage.getItem(key) ? localStorage.getItem(key) : 215;
}

function holdOn(key) {
    var value = 1;
    return function() {
        this.value = "✌Like" + " ' " + incrBy(key)
    }
}
var buttons = document.getElementsByClassName('like-btn')

buttons[0].onclick = holdOn(buttons[0].dataset.key)

buttons[0].value = "✌Like" + " ' " + getKey(buttons[0].dataset.key)


function opt() {
    document.getElementById("a2").innerHTML = document.getElementById("a1").innerHTML;
}