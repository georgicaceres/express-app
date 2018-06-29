$(document).ready(function () {
    $(document).on('click', '.heart', function () {
        // Save id of clicked heart
        let id = $(this).attr('id');

        // If elemenet is already clicked (has the class "fas"), then unlike. If not, like it.
        if ($(this).hasClass('fas fa-heart')) {
            $.ajax({
                method: 'POST',
                url: '/unlike',
                data: {id},
                success: function (data) {
                    console.log("Succes!")
                }
            });
        } else {
            $.ajax({
                method: 'POST',
                url: '/like',
                data: {id},
                success: function (data) {
                    console.log("Done!");
                }
            });
        };
        // Turn heart filled/unfilled
        $(this).toggleClass('far fa-heart');
        $(this).toggleClass('fas fa-heart');
    });
});
