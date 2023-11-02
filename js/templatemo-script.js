const bgImgsNames = ['diagoona-bg-1.jpg', 'diagoona-bg-2.jpg', 'diagoona-bg-3.jpg'];

const initBg = (bgImgsNames, autoplay = true) => {
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    $.backstretch(bgImgs, {duration: 4000, fade: 500});

    if(!autoplay) {
      $.backstretch('pause');  
    }    
}

const setBg = id => {
    $.backstretch('show', id);
}

const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = $('body').height();
    const tmBgLeft = $('.tm-bg-left');

    $('.tm-bg').height(bgHeight);

    if(windowWidth > 768) {
        tmBgLeft.css('border-left', `0`)
                .css('border-top', `${bgHeight}px solid transparent`);                
    } else {
        tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
                .css('border-top', `0`);
    }
}

$(document).ready(function () {
    ShowAndHide('about');
});

function BGSetup(bgImgsNames) {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(bgImgsNames, autoplayBg);    
    setBgOverlay();

    const bgControl = $('.tm-bg-control');            
    bgControl.click(function() {
        bgControl.removeClass('active');
        $(this).addClass('active');
        const id = $(this).data('id');                
        setBg(id);
    });

    $(window).on("backstretch.after", function (e, instance, index) {        
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);        
        current.addClass('active');
    });

    $(window).resize(function() {
        setBgOverlay();
    });
}



const starquestBG = ['starquest-bg-1.jpg', 'starquest-bg-2.jpg', 'starquest-bg-3.jpg'];
const aboutBG = ['about-bg-1.jpg', 'about-bg-2.jpg', 'about-bg-3.jpg'];
const spaceslotsBG = ['spaceslots-bg-1.jpg', 'spaceslots-bg-2.jpg', 'spaceslots-bg-3.jpg'];
const hexatownBG = ['hexatown-bg-1.jpg', 'hexatown-bg-2.jpg', 'hexatown-bg-3.jpg'];
const extraBG = ['extra-bg-1.jpg', 'extra-bg-2.jpg', 'extra-bg-3.jpg'];


const divID = ['about', 'starquest', 'hexatown', 'spaceslots', 'extras' ];
const buttonID = ['about_btn', 'starquest_btn', 'hexatown_btn', 'spaceslots_btn', 'extras_btn' ];
const temp = [ aboutBG, starquestBG,  hexatownBG, spaceslotsBG, extraBG ];


function ShowAndHide(id) {

    var x = -1;
    for(let i = 0; i < divID.length; i++) {
        if(id == divID[i]) {
            document.getElementById(divID[i]).style.display = 'block';
            x = i;
        }
        else document.getElementById(divID[i]).style.display = 'none';
    }


    const bgControl = document.getElementsByClassName('nav-item active');
    if(bgControl.length > 0) bgControl.item(0).classList.remove('active');
    // bgControl.removeClass('active');
    const current =  document.getElementsByClassName('nav-item');
    console.log(current.length);

    for(let i = 0; i < current.length; i++) {
        if(current.item(i).id == buttonID[x]) current.item(i).classList.add('active');
    }


    // current.addClass('active'); 

    BGSetup(temp[x]);
}


