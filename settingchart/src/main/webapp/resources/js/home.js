$(document).ready(function(){
	load_wineList();
});

function load_wineList() {
	
	var listWine;
	var html;
	
	$('#load_wine').click(function(){
		
		var url="/settingchart/wine";
		
		$.ajax({
		
			method:"POST",
			url:url,
			
			success:function(args){
				winelist=args;
				for(var i=0;i<args.length;i++){
					html="<tr>"
						+"<td>"+args[i].product_seq+"</td>"
						+"<td>"+args[i].fuxed_acidity+"</td>"
						+"<td>"+args[i].volatile_acidity+"</td>"
						+"<td>"+args[i].citric_acid+"</td>"
						+"<td>"+args[i].residual_sugar+"</td>"
						+"<td>"+args[i].chlorides+"</td>"
						+"<td>"+args[i].free_sulfur_dioxide+"</td>"
						+"<td>"+args[i].total_sulfur_dioxide+"</td>"
						+"<td>"+args[i].density+"</td>"
						+"<td>"+args[i].pH+"</td>"
						+"<td>"+args[i].sulphates+"</td>"
						+"<td>"+args[i].alcohol+"</td>"
						+"<td>"+args[i].quality+"</td>"
						+"</tr>"
					$('#listWine').append(html);
				}
				console.log(args);
			},
			
			beforeSend:function(){
				$('#listWine').empty();
			},
			
			error:function(e){
				alert(e.responseText);
			}
				
		
		});
	});
	
}