$(document).ready(function() { 

  //function to declare & return the output from the ajax call response
	function output(res){

    //initializing the output
    var outputString = "<div>";

    //Setting Meetup Name + Link
      if (res.name) {
          outputString += "<h3>";
      if (res.link) {
          outputString += "<a href=" + res.link + ">" + res.name + "</a>";
      } else {
            outputString += res.name;
        }
          outputString += "</h3>";
      }  

    //Setting the Meetup Photo if available
      if(res.key_photo !== undefined) {
          outputString += "<img src="+res.key_photo.photo_link+">";   
      }

    //Setting Meetup Details (city, state, members + host, & description)
      outputString += "<h4>"+ res.city +", "+res.state+"</br>With: "+res.members+" Members, Hosted By "+
                      res.organizer.name+"</h4><p>"+res.description+"<p></br>";

        //closing & returning the output
      outputString += "</div>";
      return outputString;
  };


/*
  function articles(illness){
    $('#results').empty();

  }

  function scrollDown(){
    $('html, body').animate({
        scrollTop: $("#resultBtns").offset().top
      }, 2000);
  }
*/
$("#meetupBtn").click(function(){
	var zipCode = 19102
  
	var apiURL = "https://api.meetup.com/find/groups?photo-host=public&text=anxiety&zip="+
                zipCode+"&page=10&key=754c59a5a3b631c702c571330643e36"
  //Making an Ajax call & appending the results to the html results id
	$.ajax({url: apiURL, dataType:"jsonp"}).done(function(res){
		$("#results").empty(); //edit1: cleared data from results div
			for (var i = 0; i < res.data.length; i++) {
				   	console.log(res.data[i]); //edit4: line was deemed more for debugging 
				    $("#results").append(output(res.data[i]));
			}
	});
return false;

});

function videoParse(){
  $('#videoBtn').click(function(){
    window.location="one.html";
  });
}

});






    /*$('html, body').animate({
        scrollTop: $("#mentalIllnessBtn").offset().top
      }, 2000);

  $("#anxietyBtn").click(function(){
     
     $("#groupBtn").click(function(){
        groups(illness);
    });

     $("#videoBtn").click(function(){
        videos(illness);
     });
     $("articlesBtn").click(function(){
        aricles(illness);
     });

  });

 $("#depressionBtn").click(function(){
      scrollDown();
      var illness = 'depression';
      groups(illness);
      videos(illness);
  });

  $("#addictionBtn").click(function(){
      scrollDown();
      var illness = 'addiction';
      groups(illness);
      videos(illness);
  });

  $("#didBtn").click(function(){
      scrollDown();
      var illness = 'did';
      groups(illness);
      videos(illness);
  });


});*/
