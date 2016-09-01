$(document).ready(function(){
	var content = ['c','c++','java','javascript','jsp','jdk','ruby','php','python','node'];

	// skills_area定位
	$('#skills').focus(function(){
		var skills_area_left = $('.skills').offset().left;
		var skills_area_top = $('.skills').offset().top + 30;
		$('.skills_area').css('left',skills_area_left);
		$('.skills_area').css('top',skills_area_top);
	});

	$('#skills').keyup(function(event){
		var skills_input = $('#skills').val();
		if(event.keyCode!= 40&&event.keyCode!=38&&event.keyCode!=13){
			if(skills_input != ''){
				skills_input = new RegExp(skills_input);
				$('.skills_area').html('');
				for(var i = 0;i < content.length; i++){
					if(skills_input.test(content[i])){
						$('.skills_area').append('<p>'+ content[i] +'</p>');
					}
				}

				$('.skills_area p').mouseover(function(){
					$('.skills_area p').removeClass('active');
					$(this).addClass('active');
				});
				$('.skills_area p').mouseout(function(){
					$('.skills_area p').removeClass('active');
				});
				
			}else{
				$('.skills_area').html('');
			}

			if($('.skills_area').html() == ''){
				$('.skills_area').css('display','none');
			}else{
				$('.skills_area').css('display','block');
				$('.skills_area p').click(function(){
					$('.skills').val($(this).html());
					$('.skills_area').html('');
					$('.skills_area').css('display','none');
				});
			}
		}

		var skills_length = $('.skills_area p').length;

		// arrow down
		if(event.keyCode == 40){
			if(!($('.skills_area p').hasClass('active'))){
				$('.skills_area p').eq(0).addClass('active');
			}else if($('.skills_area p').eq(skills_length-1).hasClass('active')){
				$('.skills_area p').removeClass('active');
			}else{
				for(var i=0;i<skills_length;i++){
					if($('.skills_area p').eq(i).hasClass('active')){
						$('.skills_area p').eq(i).removeClass('active');
						$('.skills_area p').eq(i+1).addClass('active');
						break;
					}
				}
			}
		}

		// arrow up
		if(event.keyCode == 38){
			if(!($('.skills_area p').hasClass('active'))){
				$('.skills_area p').eq(skills_length-1).addClass('active');
			}else if($('.skills_area p').eq(0).hasClass('active')){
				$('.skills_area p').removeClass('active');
			}else{
				for(var i=0;i<skills_length;i++){
					if($('.skills_area p').eq(i).hasClass('active')){
						$('.skills_area p').eq(i).removeClass('active');
						$('.skills_area p').eq(i-1).addClass('active');
						break;
					}
				}
			}
		}

		// enter
		if(event.keyCode == 13){
			for(var i=0;i<skills_length;i++){
				if($('.skills_area p').eq(i).hasClass('active')){
					$('.skills_area p').eq(i).removeClass('active');
					$('.skills').val($('.skills_area p').eq(i).html());
					$('.skills_area').html('');
					$('.skills_area').css('display','none');
					break;
				}
			}
		}

	});
});