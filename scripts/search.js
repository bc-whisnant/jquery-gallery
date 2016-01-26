

 $('#search-bar').keyup(function() {
    var filterValue = $(this).val();

    //make sure we start with showing all
    $('#gallery-img > li').each(function(index, item) {
        $(this).show();
    });

    //search the things that doesn't contains the search value
    var itemsToHide = $('#gallery-img').find('li').not(function(index) {
        var currentLiCode = $(this).html();       
        //return the result of the pattern matching of our word from the search bar. The gi means global, case insensitive search
        return currentLiCode.match(new RegExp(filterValue, "gi"));
    });

    //hide the non-matching items
    itemsToHide.each(function(index) {
        $(this).hide();
        
    });
});