// шапка
$(function(){
	$('#main-popap-bg main-popap button').click(function(){
		$.post('main.php');
		$('#main-popap-bg').hide();
		$('#PND-popap-bg').show();
	});
})
//popap 1 main
$(function(){
	$('#main-btn').click(function(){
		$('#main-popap-bg').fadeIn(300).show()
	});
	$('#close-main').click(function(){
		$('#main-popap-bg').fadeOut(300,function(){
			$(this).hide()
		});
	});
})
// popap 2
$(function(){
	$('#PND-btn').click(function(){
		$('#PND-popap-bg').fadeIn(300).show()
	});
	$('#close-PND').click(function(){
		$('#PND-popap-bg').fadeOut(300,function(){
			$(this).hide()
		});
	});
})