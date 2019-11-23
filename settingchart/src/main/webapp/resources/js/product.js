$(document).ready(function(){
	productChart();
});

function productChart() {
	
	
	$('#load_Product').click(function(){
		
		var seriesOptions = [];
		var seriesOptions1 = [];
		var seriesOptions2 = [];
		var seriesOptions3 = [];
		var seriesOptions4 = [];
		var url="/settingchart/product";
		//var names = ['fuxed_acidity', 'volatile_acidity', 'citric_acid', 'residual_sugar', 'chlorides', 'free_sulfur_dioxide','total_sulfur_dioxide', 'density', 'ph','sulphates','alcohol','quality' ]
		
		var names = ['Installation', 'Manufacturing', 'Sales_Distribution','Project_Development','Other']
		$.ajax({
		
			method:"POST",
			url:url,
			
			success:function(data){
				
				
				for(var i=0;i<data.length;i++){
					seriesOptions[i]=data[i].installation;
					seriesOptions1[i]=data[i].manufacturing;
					seriesOptions2[i]=data[i].sales_Distribution;
					seriesOptions3[i]=data[i].project_Development;
					seriesOptions4[i]=data[i].other;
	
				}
				
				Highcharts.chart('listProduct', {

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

				    series:[{
				        name: names[0],
				        data: [seriesOptions[0],seriesOptions[1],seriesOptions[2],seriesOptions[3],
				        	seriesOptions[4],seriesOptions[5],seriesOptions[6],seriesOptions[7]]
	  
				    },{
				    	name: names[1],
				    	data: [seriesOptions1[0],seriesOptions1[1],seriesOptions1[2],seriesOptions1[3],
				    		seriesOptions1[4],seriesOptions1[5],seriesOptions1[6],seriesOptions1[7]]
				    }
				    ,{
				    	name: names[2],
				    	data: [seriesOptions2[0],seriesOptions2[1],seriesOptions2[2],seriesOptions2[3],
				    		seriesOptions2[4],seriesOptions2[5],seriesOptions2[6],seriesOptions2[7]]
				    },{
				    	name: names[3],
				    	data: [seriesOptions3[0],seriesOptions3[1],seriesOptions3[2],seriesOptions3[3]
				    	,seriesOptions3[4],seriesOptions3[5],seriesOptions3[6],seriesOptions3[7]]
				    },{
				    	name: names[4],
				    	data: [seriesOptions4[0],seriesOptions4[1],seriesOptions4[2],seriesOptions4[3],
				    		seriesOptions4[4],seriesOptions4[5],seriesOptions4[6],seriesOptions4[7]]
				    }],

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
				
			}
		});
	});
	
}