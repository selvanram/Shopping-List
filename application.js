$(document).ready(function() {


	


	//FUNCTION: If the user presses enter
	function addItem(event) {
		var checkbox = "<input type='checkbox' name='bought' id='box'>"
		var deleteButton = "<button type='button' name='remove' value='remove' id='button'>Remove</button>"
		
		if (event.which == 13) {
			event.preventDefault();
			var toAdd = $('input[name=item]').val();
			if (toAdd != "") {
				$('.items').append("<li>" + checkbox 
					 + "<span class='actualItem'>" + toAdd + "</span>"
					 + deleteButton + "</li>");
				$('input[name=item]').val("");
			}
		}

	};



	//Enter an item into the list

	$('#textArea').keydown(addItem);

	//Strike-through checked items. 
	$('.items').on('change', '#box', function() {
		if( $(this).is(':checked')) {
			console.log("Yup");
			$(this).next('.actualItem').css('text-decoration', 'line-through');
			console.log($(this).next('.actualItem'));
		}
		else {
			$(this).next('.actualItem').css('text-decoration', 'none');	
		}
		
	})

	//Remove removed items.
	$('.items').on('click', '#button', function() {
		$(this).parent('li').remove();
	})

});