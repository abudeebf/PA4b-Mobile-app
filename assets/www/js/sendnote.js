function sendnote() {
var page = $("#createnote");
  $("#status", page).html(" calling remote server.........  ");
		   $.post("https://fatimaabudeeb.herokuapp.com/mobileupload.json", 
		        {
		         "email":$("#email",page).val(),
		         "password":$("#password",page).val(),
		        "title":$("#title",page).val(),
		          "content":$("#content",page).val(),
		            "course":$("#course",page).val(),
		              "teacher":$("#teacher",page).val(),
		               "free":$("#free",page).val(),
		                "price":$("#price",page).val()
		         }, function(res,code) {
		             if( res.signin==true)
		             { 
		             	window.location="index.html";
		             	alert('note save successfuly');
    			       }
    			      else
    			      {
    			      	$("#status", page).html("email  or password is not correct");
    			      }
    			  })};