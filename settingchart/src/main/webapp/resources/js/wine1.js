$(document).ready(function(){
	load_wineChart();
});

function load_wineChart() {
	
	
	$('#load_wineChart1').click(function(){
		
		
		var url="/settingchart/wine";
		
		$.ajax({
		
			method:"POST",
			url:url,
			
			
			success:function(data){
				
				var seriesOptions = [];
				var names=['fuxed_acidity', 'volatile_acidity', 'citric_acid', 'residual_sugar', 'chlorides', 'free_sulfur_dioxide', 'total_sulfur_dioxide', 'density', 'ph', 'sulphates', 'alcohol', 'quality'];
			
				
				
				Highcharts.chart('listWine', {

				    title: {
				        text: 'Solar Employment Growth by Sector, 2010-2016'
				    },

				    subtitle: {
				        text: 'Source: thesolarfoundation.com'
				    },

				    yAxis: {
				        title: {
				            text: 'Number of Employees'
				        }
				    },
				    legend: {
				        layout: 'vertical',
				        align: 'right',
				        verticalAlign: 'middle'
				    },

				    plotOptions: {
				        series: {
				            label: {
				                connectorAllowed: false
				            },
				            pointStart: 2010
				        }
				    },

				    series: [seriesOptions],

				    responsive: {
				        rules: [{
				            condition: {
				                maxWidth: 500
				            },
				            chartOptions: {
				                legend: {
				                    layout: 'horizontal',
				                    align: 'center',
				                    verticalAlign: 'bottom'
				                }
				            }
				        }]
				    }

				});
				
				$.each(names, function(i, name){
					
					$.getJSON('http://localhost:8080/settingchart/wine',
							function(data){
						
						seriesOptions[i] = {
							name: name,
							data: data
						};
					});
				});
			}

		});
	});
	
}