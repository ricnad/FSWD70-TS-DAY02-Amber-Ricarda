//loop to pull JSON file into HTML

for (var i = 0; i < film.length; i++) {

    var obj = film[i];
    var rating = obj.rating

//add HTML and Bootstrap to JSON items

	var dispimage = '<img class=\'rounded-lg border border-secondary\' src=\'' + obj.image + '\'>'
	var dispname = '<p class=\"h6\">' + obj.name + '</p>'
	var dispdesc = '<p>' + obj.description + '</p>'
	var disprating = '<div class=\'like\'><button class=\'likebtn\'>Like &#128077</button><span class=\'rating text-center bottom-align-text h3\'>' + rating + '</span></div>'

//push formatted JSON items into HTML

	var melement = '<div class=\'maindiv col-8 col-lg-5\'>' + dispimage + '<div class=\'movietext\'>' + dispname + dispdesc +disprating + '</div></div>'

    $('.row2').append(melement)

   }

//increase rating of next sibling on click of button

var button = $('.likebtn');

for (let i = 0; i < button.length; i++) {

	$(button[i]).click(function(){

		ratingincr(i);

		});

	}

	function ratingincr(i){ 

		rating = 1 + film[i].rating++;
		$(button[i]).next().contents().replaceWith(rating)

		}


//Sort movies display order by rating

var sortbtn = $('#sortbtn');

$(sortbtn).click(function(){
	$('.row2').each(function(){

    $(this).append($(this).find('.maindiv').sort(function(a, b) {

    	return $(b).find(".rating").text() - $(a).find(".rating").text();

    }));
});
})