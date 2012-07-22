
$("#noteindex").live("pagecreate", function(event) {
	var page = $("#noteindex");
	$.post("https://fatimaabudeeb.herokuapp.com/mobiledownload.json",{"fatima":"fatima"},  
		        function(res,code) {
		       var dlength=JSON.stringify(res['notebooks'].length);
		      
		        var items = [];
     var x;
       items.push('<tr><td> Nerd </td><td>title </td><td>course </td><td> teacher </td></tr>');
       for(i=0; i<dlength; i++) {
  		
       items.push('<tr><td>' + JSON.stringify(res['notebooks'][i].name) +'</td><td>'+ JSON.stringify(res['notebooks'][i].title)+ '</td><td>'+JSON.stringify(res['notebooks'][i].course) +'</td><td>'+ JSON.stringify(res['notebooks'][i].teacher)+'</td></tr>');
  		}
  		var htmlstring=items.join('');
  		$('table#note',page).html(htmlstring);
		        	
		});
	$("#addnote",page).live("click",function(e) {
	      window.location="addnotes.html";
		             });
	});
	
	
	
	