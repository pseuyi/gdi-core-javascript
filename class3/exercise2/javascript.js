$(document).ready(function(){
    $('.box').bind({
        click: function() {
          $(this).css('background-color', 'green')
          $(this).html('Clicked!')
        },
        mouseenter: function() {
          $(this).css('background-color', 'purple')
          $(this).html('Hi!')
        },
        mouseleave: function(){
          $(this).css('background-color', 'orange')
          $(this).html('Bye!')
        }
    });
    $('#calculate').click(calculate);
    $('#averages').click(studentAverages);
    $('#friends').click(myFriends);
})

function calculate(){
    var age = 26;
    var oldAge = 96;
    var perDay = 2;

    var days = (oldAge - age) * 356;
    var total = perDay * days;
    var resultDiv = $('#lifetime-supply')
    if(total > 40000){
        resultDiv.html("You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!");
    }else{
        resultDiv.html("You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable");
    }
}

function studentAverages(){
    var studentAverages = [95, 90, 93, 52, 70, 88];
    var goodAverages = [];
    var badAverages = [];
    var resultDiv = $('#student-averages');
    var resultParagraph = $('<p></p>');
    resultDiv.append(resultParagraph);

    for (var i = 0; i < studentAverages.length; i++) {
        if (studentAverages[i] >= 80) {
          goodAverages.push(studentAverages[i]);
        }
        else {
          badAverages.push(studentAverages[i]);
        }
    }
    var result = goodAverages.length + " students have averages greater than or equal to 80 and " + badAverages.length + " have averages below 80."
    resultParagraph.append(result);
}

function myFriends(){
    var friends = [
        {name: 'Santa Claus',
        hair: 'red'},
        {name: 'Easter Bunny',
        hair: 'brown'},
        {name: 'Tooth Fairy',
        hair: 'blue'}
    ];
    var resultDiv = $('<div></div>')

    var introParagraph = $('<p>My friends are:</p>');
    resultDiv.append(introParagraph)

    for(var i = 0; i < friends.length; i++){
        var resultParagraph = $('<p>' + describeFriend(friends[i]) + '</p>');
        resultDiv.append(resultParagraph);
    }
    $('body').append(resultDiv);
}
function describeFriend(friend){
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}
