// for scrolling the page and keeping the WebStore is test banner on the top of the screen: 
// This function will be executed when the user scrolls the page.
$(window).scroll(function (e) {
    if ($(".nonScrollingDiv_anchor").offset() != null) {    // If null, then the div is not visible, so no anchor.
        // Get the position of the location where the nonScrollingDiv starts.    
        var nonScrollingDiv_anchor = $(".nonScrollingDiv_anchor").offset().top;
        // Check if the user has scrolled and the current position is after the nonScrollingDiv start location and if its not already fixed at the top     
        if ($(this).scrollTop() >= nonScrollingDiv_anchor && $('.nonScrollingDiv').css('position') != 'fixed') {    // Change the CSS of the nonScrollingDiv to hilight it and fix it at the top of the screen.        
            $('.nonScrollingDiv').css({
                'position': 'fixed',
                'top': '0px'
            });
            // Changing the height of the nonScrollingDiv anchor to that of nonScrollingDiv so that there is no change in the overall height of the page.        
            $('.nonScrollingDiv_anchor').css('height', '25px');
        }
        else if ($(this).scrollTop() < nonScrollingDiv_anchor && $('.nonScrollingDiv').css('position') != 'relative') {
            // If the user has scrolled back to the location above the nonScrollingDiv anchor place it back into the content.                 
            // Change the height of the nonScrollingDiv anchor to 0 and now we will be adding the nonScrollingDiv back to the content.        
            $('.nonScrollingDiv_anchor').css('height', '0px');
            // Change the CSS and put it back to its original position.        
            $('.nonScrollingDiv').css({
                'position': 'relative'
            });
        }
    }
                
});

function clearSearchBox(ctrl) 
{
    ctrl.value = "";
}

