$(document).ready(function() {

    var speed = 301;
    var pause = false;
    var words = [];
    var i = 0; // current word index
    
    var setup = function(data) {
        words = data.split(' ');
        console.log('setting up: there are ' + words.length + ' words');
        draw();
    };
    
    var draw = function() {
        console.log('drawing');
        if(!pause) {
            displayWord(words[i++]);
        }
        setTimeout(draw, speed);
    };
    
    var displayWord = function(word) {
        if(i > -1 && i < words.length) {
            // first, clear the last word, or initialize the first one :)
            $('[id^="c"]').text('');

            // second, calculate some positional data
            var wordLength = word.length;
            var middle = parseInt(wordLength / 2);
            var ui = 13; // the middle ui element in print

            // print the middle element
            $('#c' + ui).text(word[middle]);

            // from middle to beginning, print
            for(var j = middle - 1; j >= 0; j--) {
                $('#c' + --ui).text(word[j]);
            }

            // from middle to end, print
            ui = 13
            for(var k = middle + 1; k < wordLength; k++) {
                $('#c' + ++ui).text(word[k]);
            }
        } else {
            if(i < 0) {
                i = 0;
            } else if (i >= words.length) {
                i = words.length - 1;
            }
            displayWord(words[i]);
        }
    };
    
    $(document).on('keypress', function(e) {
        var key = String.fromCharCode(e.which);
        switch(key.toLowerCase()) {
            case 'p':
                if(pause) {
                    pause = false;
                } else {
                    pause = true;
                }
                break;
        }
    });
    
    $(document).on('keydown', function(e) {
        switch(e.keyCode) {
            case 37: // left arrow
                pause = true;
                i--;
                displayWord(words[i]);
                break;
            case 39: // right arrow
                pause = true;
                i++;
                displayWord(words[i]);
                break;
            case 38: // up arrow
                speed -= 25;
                break;
            case 40: // down arrow
                speed += 25;
                break;
        }
    });
    
    $.get('CS1.txt', function(data) {
        setup(data);
    });

});