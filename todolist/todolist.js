$(document).ready(function(){
	var todolist = ['wash','clean','make bed'];
	var todo_change = function(){
		$('#todobox').html('');
		for(var i=0;i<todolist.length;i++){
			$('#todobox').append('<li>'+todolist[i]+'<button class="remove" index="'+i+'">X</button>'+'</li>');
		}
		$('.remove').each(function(i){
			$(this).click(function(){
				todolist.splice(i,1);
				// console.log(todolist);
				todo_change();
			});
		});
	}
	todo_change();
				

	$('#addthing').keyup(function(event){
		if(event.keyCode==13){
			// console.log($('#addthing').val());
			todolist.push($('#addthing').val());
			// console.log(todolist);
			todo_change();
		}
	});
});