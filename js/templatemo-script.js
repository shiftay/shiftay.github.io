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


const params = ['about', 'starquest', 'hexatown', 'spaceslots', 'extras' ];
const temp = [ aboutBG, starquestBG,  hexatownBG, spaceslotsBG, extraBG ];


function ShowAndHide(id) {


    var x = -1;
    
    console.log("Hello!");

    for(let i = 0; i < params.length; i++) {
        if(id == params[i]) {
            document.getElementById(params[i]).style.display = 'block';
            x = i;
        }
        else document.getElementById(params[i]).style.display = 'none';
    }

    BGSetup(temp[x]);
}


