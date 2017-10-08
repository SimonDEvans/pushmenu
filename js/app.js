//Keyword var and create a function called main.


var main = function () {
    $('.icon-menu').click(function (){          //Select the class 'icon-menu' and respond to user action, clicking on the icon.
        $('.menu').animate({left:'0px'}, 300);  //The menu is 300px past the left edge of the screen, move it 0px to the left.
        $('body').animate({left:'300px'}, 300); //Push the rest of the page to the left 300px. 
    });
    
    $('.icon-close').click(function (){           //Select the class 'icon-close' and respond to user action, clicking on the icon.
        $('.menu').animate({left:'-300px'}, 300); //Change the left offset of the menu to -300px, 
        $('body').animate({left:'0px'}, 300);     //and the left offset of the body to 0px.
    });

    $('.dropdown-toggle').click(function(){                //Select the class 'dropdown-toggle' and respond to user action, clicking on it.
        var currMenu = $(this).siblings('.dropdown-menu'); //There are two dropdow-menus when you open any 'dropdown-menu', the other close.
        $('.dropdown-menu').not(currMenu).hide();          //When the sibling is not the current menu hide it 
        currMenu.toggle();                                //Toggle the current menu 
    });
};

$(document).ready(main);