$(document).ready(function() {

    var speed = 301;
    
    var setup = function(data) {
        var words = data.split(' ');
        nextWord(words, 0);
    };
    
    var nextWord = function(words, i) {
        $('[id^="c"]').text('');
        var wordLength = words[i].length;
        var middle = parseInt(wordLength / 2) - 1;
        var ui = 13;
        $('#c' + ui).text(words[i][middle]);
        for(var j = middle - 1; j >= 0; j--) {
            $('#c' + --ui).text(words[i][j]);
        }
        ui = 13
        for(var k = middle + 1; k < wordLength; k++) {
            $('#c' + ++ui).text(words[i][k]);
        }
        
        
        console.log(words[i++]);
        if(i < words.length) {
            setTimeout(function() {
                nextWord(words, i);
            }, speed);
        }
    };
    
    
    
    $.get('CS1.txt', function(data) {
        setup(data);
    });

});