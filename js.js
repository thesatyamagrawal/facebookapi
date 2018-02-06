$(document).ready(function()
{ 
$("#Facebookfeed").hide();
    $("#Facebookprofile").hide();
    $("#photos").hide();
	
$("#btnone").click(function() {
$("#photos").show();
        $("#Facebookfeed").hide("100");
        $("#Facebookprofile").show("100");
        $("#facebook").hide();
        $("#work").hide();
        $("#family").hide();
        $("#contact").hide();
        $("#basic").show();
        
        
      // function for sidebar  
      $("#click1").on("click",function(){
        $("#basic").show();
        $("#work").hide();
        $("#family").hide();
        $("#contact").hide();
      });

      $("#click2").on("click",function(){
        $("#basic").hide();
        $("#work").show();
        $("#family").hide();
        $("#contact").hide();
      });

      $("#click3").on("click",function(){
        $("#basic").hide();
        $("#work").hide();
        $("#family").show();
        $("#contact").hide();
      });

      $("#click4").on("click",function(){
        $("#basic").hide();
        $("#work").hide();
        $("#family").hide();
        $("#contact").show();
      });  
var facebookaccesstoken = document.getElementById("accesstoken").value;
console.log(facebookaccesstoken);       
var url= "https://graph.facebook.com/me?fields=picture.width(250).height(250),id,name,first_name,last_name,birthday,about,hometown,languages,gender,education,work,relationship_status,quotes,family,website,email,cover.width(815).height(320)&access_token=";
var url1= url + facebookaccesstoken;

  $.ajax({  
    type: "GET",
    url: url1,             
    dataType: "json",        
    success: function(response){                    
		console.log(response);
              console.log(typeof(response));
              
              $(".myCoverPic").attr("src", "" + response.cover.source + "");  
              
              
              $(".myProfilePic").attr("src", "" + response.picture.data.url + "");
              
              $("#myName").text(response.name);
              $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
              $("#myGender").text(response.gender);
              $("#myBirthday").text(response.birthday);
              var languages = response.languages;
              var myLanguage = $.map(response.languages, function(index) {
                return index.name;
              });
              $("#myLanguage").text(myLanguage);
              $("#myHomeTown").text(response.hometown.name); 
              $("#myQuotes").text(response.quotes);
 
              var work = response.work;
              var myWork = $.map(work, function(index) {
                return index.employer.name;
              });
              $("#myWork").text(myWork);

              var education = response.education;
              var myEducation = $.map(education, function(index) {
                return index.school.name;
              });
              $("#myEducation").text(myEducation);
      
              
              $("#myRelation").html(response.relationship_status);
              var family = response.family;
              var myFamily = $.map(family, function(index) {
                return index.name;
              });
              $("#myFamily").text(myFamily);

             
              $("#myEmail").text(response.email);            
              $("#myWebsite").html(response.website);

              
          },
                
          error: function(jqXHR) {
            alert("Invalid Token. Please enter valid API token");
          
    },
});
 });
 $("#btntwo").click(function() {
 
 $("#Facebookfeed").show();
        $("#Facebookprofile").hide();
        $("#facebook").hide();
        $("#fb-profile").show();
        $("#photos").show();
		
		
var facebookaccesstoken = document.getElementById("accesstoken").value;
console.log(facebookaccesstoken);       
var url= "https://graph.facebook.com/me?fields=posts{created_time,type,full_picture,story,message,source},picture.width(250).height(250),cover,likes&access_token=";
var url1= url + facebookaccesstoken;

  $.ajax({  
    type: "GET",
    url: url1,             
    dataType: "json",        
    success: function(response){                    
              $(".myCoverPic").attr("src", "" + response.cover.source + "");  
              
              $(".myProfilePic").attr("src", "" + response.picture.data.url + "");

              var postData = response.posts.data;
              var feeds = $.map(postData, function(value, index) {
                if (index <= 10) {
                  return value;
				  console.log(value);
                }
              });

              var fbfeedone = $.map(feeds, function(value, index) {
                if (index == 0) {
                  return value;
                }
              });

             
              if (fbfeedone[0].type == "status") {
                $("#fbpostone").html(response.name + " says : </br>" + fbfeedone[0].message);
              }

             
              else if (fbfeedone[0].type == "photo") {
                $("#fbpostone").text("" + fbfeedone[0].story + "");
                $(".photofbpostone").html("<img src=" + fbfeedone[0].full_picture + " " + "class=" + " img-responsive" + ">");
              }

              
              else if (fbfeedone[0].type == "video") {
                $("#fbpostone").text("" + fbfeedone[0].story + "");
                $(".photofbpostone").html("<video controls> <source  src=" + "" + fbfeedone[0].source + " " + "type= " + "video/mp4" + "></video>");
              }
              
              var fbfeedtwo = $.map(feeds, function(value, index) {
                if (index == 1) {
                  return value;
                }
              });

             
              if (fbfeedtwo[0].type == "status") {
                $("#fbposttwo").html(response.name + " says : </br>" + fbfeedtwo[0].message);
              }
                
           
              else if (fbfeedtwo[0].type == "photo") {
                $("#fbposttwo").text("" + fbfeedtwo[0].story + "");
                $(".photofbposttwo").html("<img src=" + fbfeedtwo[0].full_picture + " " + "class=" + " img-responsive" + ">");
              }

             
              else if (fbfeedtwo[0].type == "video") {
                $("#fbposttwo").text("" + fbfeedtwo[0].story + "");
                $(".photofbposttwo").html("<video controls> <source  src=" + "" + fbfeedtwo[0].source + " " + "type= " + "video/mp4" + "></video>");
              } 

              else {}
              
              var fbfeedthree = $.map(feeds, function(value, index) {
                if (index == 2) {
                  return value;
                }
              });
                
            
              if (fbfeedthree[0].type == "status") {
                $("#fbpostthree").html(response.name + " says : </br>" + fbfeedthree[0].message);
              }

             
              else if (fbfeedthree[0].type == "photo") {
                $("#fbpostthree").text("" + fbfeedthree[0].story + "");
                $(".photofbpostthree").html("<img src=" + fbfeedthree[0].full_picture + " " + "class=" + " img-responsive" + ">");
              }

             
              else if (fbfeedthree[0].type == "video") {
                $("#fbpostthree").text("" + fbfeedthree[0].story + "");
                $(".photofbpostthree").html("<video controls> <source  src=" + "" + fbfeedthree[0].source + " " + "type= " + "video/mp4" + "></video>");
              } 

              else {}
             
              var fbfeedfour = $.map(feeds, function(value, index) {
                if (index == 3) {
                return value;
                }
              });

            
              if (fbfeedfour[0].type == "status") { 
                $("#fbpostfour").html(response.name + " says : </br>" + fbfeedfour[0].message);
              } 

             
              else if (fbfeedfour[0].type == "photo") { 
                $("#fbpostfour").text("" + fbfeedfour[0].story + "");
                $(".photofbpostfour").html("<img src=" + fbfeedfour[0].full_picture + " " + "class=" + " img-responsive" + ">");
              } 

              
              else if (fbfeedfour[0].type == "video") { 
                $("#fbpostfour").text("" + fbfeedfour[0].story + "");
                $(".photofbpostfour").html("<video controls> <source  src=" + "" + fbfeedfour[0].source + " " + "type= " + "video/mp4" + "></video>");
              } 

              else {}
              
              var fbfeedfive = $.map(feeds, function(value, index) {
                if (index == 4) {
                  return value;
                }
              });

              
              if (fbfeedfive[0].type == "status") { 
                $("#fbpostfive").html(response.name + " says : </br>" + fbfeedfive[0].message);
              } 

              
              else if (fbfeedfive[0].type == "photo") { 
                $("#fbpostfive").text("" + fbfeedfive[0].story + "");
                $(".photofbpostfive").html("<img src=" + fbfeedfive[0].full_picture + " " + "class=" + " img-responsive" + ">");
              } 

             
              else if (fbfeedfive[0].type == "video") { 
                $("#fbpostfive").text("" + fbfeedfive[0].story + "");
                $(".photofbpostfive").html("<video controls> <source  src=" + "" + fbfeedfive[0].source + " " + "type= " + "video/mp4" + "></video>");
              } 

              else {}
              
              var fbfeedsix = $.map(feeds, function(value, index) {
                if (index == 5) {
                  return value;
                }
              });
           
             
              if (fbfeedsix[0].type == "status") { 
                $("#fbpostsix").html(response.name + " says : </br>" + fbfeedsix[0].message);
              } 

              
              else if (fbfeedsix[0].type == "photo") { 
                $("#fbpostsix").text("" + fbfeedsix[0].story + "");
                $(".photofbpostsix").html("<img src=" + fbfeedsix[0].full_picture + " " + "class=" + " img-responsive" + ">");
              } 

             
              else if (fbfeedsix[0].type == "video") { 
                $("#fbpostsix").text("" + fbfeedsix[0].story + "");
                $(".photofbpostsix").html("<video controls> <source  src=" + "" + fbfeedsix[0].source + " " + "type= " + "video/mp4" + "></video>");
              } 
              else {}
              
              var fbfeedseven = $.map(feeds, function(value, index) {
                if (index == 6) {
                  return value;
                }
              });
           
             
              if (fbfeedseven[0].type == "status") { 
                $("#fbpostseven").html(response.name + " says : </br>" + fbfeedseven[0].message);
              } 

              
              else if (fbfeedseven[0].type == "photo") { 
                $("#fbpostseven").text("" + fbfeedseven[0].story + "");
                $(".photofbpostseven").html("<img src=" + fbfeedseven[0].full_picture + " " + "class=" + " img-responsive" + ">");
              } 

             
              else if (fbfeedseven[0].type == "video") { 
                $("#fbpostseven").text("" + fbfeedseven[0].story + "");
                $(".photofbpostseven").html("<video controls> <source  src=" + "" + fbfeedseven[0].source + " " + "type= " + "video/mp4" + "></video>");
              } 
              else {}
              
              var fbfeedeight = $.map(feeds, function(value, index) {
                if (index == 7) {
                  return value;
                }
              });
           
             
              if (fbfeedeight[0].type == "status") { 
                $("#fbposteight").html(response.name + " says : </br>" + fbfeedeight[0].message);
              } 

              
              else if (fbfeedeight[0].type == "photo") { 
                $("#fbposteight").text("" + fbfeedeight[0].story + "");
                $(".photofbposteight").html("<img src=" + fbfeedeight[0].full_picture + " " + "class=" + " img-responsive" + ">");
              } 

             
              else if (fbfeedeight[0].type == "video") { 
                $("#fbposteight").text("" + fbfeedeight[0].story + "");
                $(".photofbposteight").html("<video controls> <source  src=" + "" + fbfeedeight[0].source + " " + "type= " + "video/mp4" + "></video>");
              } 
              else {}
             
              var fbfeednine = $.map(feeds, function(value, index) {
                if (index == 8) {
                  return value;
                }
              });
           
             
              if (fbfeednine[0].type == "status") { 
                $("#fbpostnine").html(response.name + " says : </br>" + fbfeednine[0].message);
              } 

             
              else if (fbfeednine[0].type == "photo") { 
                $("#fbpostnine").text("" + fbfeednine[0].story + "");
                $(".photofbpostnine").html("<img src=" + fbfeednine[0].full_picture + " " + "class=" + " img-responsive" + ">");
              } 

            
              else if (fbfeednine[0].type == "video") { 
                $("#fbpostnine").text("" + fbfeednine[0].story + "");
                $(".photofbpostnine").html("<video controls> <source  src=" + "" + fbfeednine[0].source + " " + "type= " + "video/mp4" + "></video>");
              } 
              else {}
             
              var fbfeedten = $.map(feeds, function(value, index) {
                if (index == 9) {
                  return value;
                }
              });
           
              if (fbfeedten[0].type == "status") { 
                $("#fbpostten").html(response.name + " says : </br>" + fbfeedten[0].message);
              } 

              else if (fbfeedten[0].type == "photo") { 
                $("#fbpostten").text("" + fbfeedten[0].story + "");
                $(".photofbpostten").html("<img src=" + fbfeedten[0].full_picture + " " + "class=" + " img-responsive" + ">");
              } 

             
              else if (fbfeedten[0].type == "video") { 
                $("#fbpostten").text("" + fbfeedten[0].story + "");
                $(".photofbpostten").html("<video controls> <source  src=" + "" + fbfeedten[0].source + " " + "type= " + "video/mp4" + "></video>");
              } 
              else {}  
    }
});
 });
});