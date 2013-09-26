



        $('#toolbar').hide();
        $('#tileBrowser').hide();
        // show toolbar when mouse over
        $('#toolbarHandle').mouseover(function() {
            $('#toolbar').show();
            $('#toolbar').animate({'left' : 0 }, {duration: 200, queue: false, easing: 'linear'})
        });

        // hide toolbar on mouse out
        $('#toolbarHandle').mouseout(function() {
            $('#toolbar').animate({'left' :  -200}, {duration: 200, queue: false, easing: 'linear'})
            $('#toolbar').hide();
        });


        // show toolbar when mouse over
        $('#tileBrowserHandle').mouseover(function() {
            $('#tileBrowser').show();
            $('#tileBrowser').animate({'right' : 0 }, {duration: 200, queue: false, easing: 'linear'})
        });

        // hide toolbar on mouse out
        $('#tileBrowserHandle').mouseout(function() {
            $('#tileBrowser').animate({'right' :  -500}, {duration: 200, queue: false, easing: 'linear'})
            $('#tileBrowser').hide();
        });

