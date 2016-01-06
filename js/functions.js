

function imgToSvg(){
    $('img.svg').each(function(){
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = $(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');
            $svg = $svg.removeAttr('width');
            $svg = $svg.removeAttr('height');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
} //imgToSvg


/*------------------------------------*\
    #TOGGLE FUNCTIONS
\*------------------------------------*/

function toggleClass(element, classToToggle){
    element.toggleClass(classToToggle);
}

/**
 * Toggle header height
 */
 function toggleHeaderScrolled(){

    //Get the header height so we can now when
    //to change the heade state
    var headerHeight = getHeaderHeight();
    //Scrolled pixels in Y axis
    var sy = getScrollY();
    //Compare the two numbers, when they are the same or less
    //add fixed class to the header.
    if ( sy >= headerHeight ) {
        $('header, #main').addClass('scrolled');
    } else {
        $('header, #main').removeClass('scrolled');
    }
}// toggleHeaderScrolled

/**
 * Toggle action buttons
 */
 function toggleActionButtons(){
    //Get the action button offset
    var buttonActionOffset = $('.button--action').not('.button--action--bottom').offset().top - $(window).scrollTop();

    //Scrolled pixels in Y axis
    var sy = getScrollY();
    //Compare the two numbers, when they are the same or less
    //add fixed class to the header.
    if ( buttonActionOffset <= 0 ) {
        $('.button--action--bottom').addClass('scrolled');
    } else {
        $('.button--action--bottom').removeClass('scrolled');
    }
}// toggleActionButtons



/*------------------------------------*\
    #GET/SET FUNCTIONS
\*------------------------------------*/

/**
 * Get header's height
 */
function getHeaderHeight(){
    return $('.js-header').height();
}// getHeaderHeight

/**
 * Get footer's height
 */
function getFooterHeight(){
    return $('footer').height();
}// getFooterHeight

/**
 * Get the scrolled pixels in Y axis
 */
function getScrollY() {
    return $(window).scrollTop();
}// getScrollY