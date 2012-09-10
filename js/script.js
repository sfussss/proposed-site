$(function () {
    var blur          = $('#blur');
    var image         = new Image();
    //var element       = blur[0];
    //var imageLocation = blur.attr('data-src');

    image.onload = function () {
        // Note: `this` refers to the image object.
        var canvasImage = new CanvasImage(blur[0], this);
        canvasImage.blur(4);
    };

    image.src = blur.attr('data-src');

    $.ajax({
        url: 'https://api.twitter.com/1/statuses/user_timeline.json?callback=?',
        data: {
            screen_name: 'shovon_rahman',
            count: '4'
        },
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            var twitterHolder = ('#twitter-holder');
            $.each(data, function (i, item) {
                $('<div></div>')
                    .addClass('span3')
                    .append(
                        '<p>' + item.text + '</p>' +
                        '<p><small>' + item.created_at + '</small></p>'
                    )
                    .appendTo(twitterHolder);
            });
        }
    });
});