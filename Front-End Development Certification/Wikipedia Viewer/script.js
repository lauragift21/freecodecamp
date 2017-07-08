$("#search").on('click', function() {

    tst($('#input').val());
    $('.flex').addClass('animate');
});
$("#input").on("keydown", function(event) {  
    if (event.which == 13) {
        tst($('#input').val());
        $('.flex').addClass('animate');
        event.preventDefault();
    }
});
function tst(userInput) {
    $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + userInput + '&callback=?', function(data) {

        let temp = "<ul>";
        $.each(data.query.pages, (key, value) => {
            temp += `<li><a href="https://en.wikipedia.org/?curid=${key}" target="_blank"><h1>${value.title}</h1><p>${value.extract}</p></a></li>`;
        });
        $('.maincontent ul').replaceWith(temp + '</ul>');
        $('.maincontent ul').hide().slideDown(500, 'linear');
    });
}