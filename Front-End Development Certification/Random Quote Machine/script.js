function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#text").html("<p id='text' class='lead text-center'>" +
          response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;</p>");
        $("#tweet-quote").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' -- ' + response.quoteAuthor + '#quotes' + '');
      },
	  error:function(xhr, status, error)
	{
		$('#bring').text("sorry  there was an error with the API request");
	}
	  
  });
}

$(document).ready(function() {
  randomQuote();
});

$("button").click(function(){
  randomQuote();
});