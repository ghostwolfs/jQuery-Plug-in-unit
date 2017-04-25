$(document).ready(function(){
	for(var i=0;i<province.length;i++){
		$('.provinceContainer').append('<li value='+province[i][0]+'>'+province[i][1]+'</li>');
	}

	$("ul[class='provinceContainer'] li").click(function(){
		$("ul[class='provinceContainer'] li").removeClass('clickActive');
		$(this).addClass('clickActive');
		var provinceId = $(this).val();
		if(provinceId<10){
			provinceId = provinceId.toString();
			// console.log(provinceId);
			provinceId = "0" + provinceId;
			// console.log(provinceId);
		}else{
			provinceId = provinceId.toString();
		}
		// console.log(proSchool[provinceId]);
		// console.log($(this).val())
		$('.schoolContainer').html('');
		for(var i=0;i<proSchool[provinceId].length;i++){
			if(proSchool[provinceId][i].length>8){
				$('.schoolContainer').append('<li class="biggerBox" value='+proSchool[provinceId][i]+'>'+proSchool[provinceId][i]+'</li>');
			}else{
				$('.schoolContainer').append('<li value='+proSchool[provinceId][i]+'>'+proSchool[provinceId][i]+'</li>');
			}
		}
		$('ul[class="schoolContainer"] li').click(function(){
			$("ul[class='schoolContainer'] li").removeClass('clickActive');
			$(this).addClass('clickActive');
			console.log($(this).text());
		});
	});
});