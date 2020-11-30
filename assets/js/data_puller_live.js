

 

// // GET URL FROM LOCAL JSON FILE
var instancedata = $.getJSON("../../assets/json/instance.json", function (datas) {
var instance = datas.instance_url;
 
// Get url from current url params
var url = window.location.pathname;
var urlprofile = url.substring(url.lastIndexOf('/') + 1);

// SPLIT HTML FROM NAME
// var urlprofilename = urlprofile.split('.')[0];

// UNCOMMENT THIS LINE AND COMMENT ABOVE LINE TO WORK LOCALLY 
var urlprofilename="karthikeyan";


// Remove this code when URL is working without CORS ERROR
// console.log(urlprofilename);
var getprofileurl = instance + "/api/v1/profile/"+ urlprofilename;


  $.ajax({
          "async": true,
          "crossDomain": true,
          "url": getprofileurl,
          "cors": true ,
          "method": "GET",
          "headers": {
            // 'Access-Control-Allow-Origin': '*',
            // 'Content-Type':'application/json',
            },

          success:function (myJSON) {
            // console.log(results);
            // var myJSON = JSON.parse(results);
            // console.log(myJSON);
            if(myJSON.success === true){
             $('#profile_section').removeClass("hide");
            // DEFINE VARIABLES AND GET BASIC DATA FOR TOP PROFILE 
            var profilename = myJSON.basics.name;
            var profilepicture = myJSON.basics.picture;
            var profileemail = myJSON.basics.email;
            var profilelabel = myJSON.basics.label;
            var profilephone = myJSON.basics.phone;
            var profileaddress = myJSON.basics.location.address;
            var profilecity = myJSON.basics.location.city;
            var profilepostalcode = myJSON.basics.location.postalCode;
            var profilebiosummary = myJSON.basics.summary;
        
            
            
            // var data_not_found = "<span>Noo Data Found</span>";
            
            // ARRAY JSON VALUES ARE HANDLED USING LOOP
            // Here Social Media URL is handled 
            for (var i in myJSON.basics.profiles) {
              var profilenetwork = myJSON.basics.profiles[i].network;
              var profileurl= myJSON.basics.profiles[i].url;

              // Twitter
              if(profilenetwork == "Twitter") {
                $('#profile_network_twitter').attr('href', profileurl);
                if(profileurl !== "") {
                  $('#profile_network_twitter_li').removeClass("hide");
                }
              }

              // Linkedin
              if(profilenetwork == "linkedin") {
                $('#profile_network_linkedin').attr('href', profileurl);
                if(profileurl !== "") {
                  $('#profile_network_linkedin_li').removeClass("hide");
                }
              }

              // Facebook
               if(profilenetwork == "Facebook") {
                $('#profile_network_facebook').attr('href', profileurl);
                if(profileurl !== "") {
                  $('#profile_network_facebook_li').removeClass("hide");
                }
              }

              if(profilenetwork == "Instagram") {
                $('#profile_network_instagram').attr('href', profileurl);
                if(profileurl !== "") {
                  $('#profile_network_instagram_li').removeClass("hide");
                }
              }

            }
            // WORK CONTAINER VARIABLE  
            var work_loop_content ='';
            // ARRAY JSON VALUES ARE HANDLED USING LOOP
            // Here Work fields handled
            for (var k in myJSON.work) {
              var workcompany = myJSON.work[k].company;
              var workposition = myJSON.work[k].position;
              var workstart = myJSON.work[k].startDate;
              var workend = myJSON.work[k].endDate;
              var worksummary = myJSON.work[k].summary;


              var work_content = `
              <div class="space-bottom-2">
                <h3>${workposition}</h3>
                <h4 class="text-black-50">${workcompany}</h4>
                <h5 class="text-black-50"><span>${workstart.split("-").reverse("").join("-")}</span> to 
                <span>${workend.split("-").reverse("").join("-")}</span></h5>
                <p>${worksummary}</p>
              </div>`;
              // APPENDING CURRENT LOOP DATA WITH PREVIOUS LOOP DATA
               work_loop_content += work_content;

               $('#work_container').html(work_loop_content);

              // Company Name CONDITION
              // if(workcompany !== ""){
              //   $('#work_company').removeClass("hide");
              //   $('#work_company').html(workcompany);
              // }
              // Position Name CONDITION
              // if(workposition !== ""){
              //   $('#work_position').removeClass("hide");
              //   $('#work_position').html(workposition);
              // }
               // StartDate  CONDITION
              //  if(workstart !== ""){
              //   $('#work_start').removeClass("hide");
              //   $('#work_start').html(workstart);
              // }
              // EndDate CONDITION
              // if(workend !== ""){
              //   $('#work_end').removeClass("hide");
              //   $('#work_end').html(workend);
              // }
              // Summary CONDITION
              // if(worksummary !== ""){
              //   $('#work_summary').removeClass("hide");
              //   $('#work_summary').html(worksummary);
              // }
            }

            // EDUCATION CONTAINER VARIABLE  
            var edu_loop_content ='';

             // ARRAY JSON VALUES ARE HANDLED USING LOOP
            // Here Education fields handled
            for (var l in myJSON.education) {
              if(myJSON.education !== null){
              var eduinstitution = myJSON.education[l].institution;
              var edudegree = myJSON.education[l].area;
              var edustart = myJSON.education[l].startDate;
              var eduend = myJSON.education[l].endDate;

              var edu_content = `
              <div class="space-bottom-2">
                <h3>${edudegree}</h3>
                <h4 class="text-black-50">${eduinstitution}</h4>
                <h5 class="text-black-50">
                <span>${edustart.split("-").reverse("").join("-")}</span> to 
                <span>${eduend.split("-").reverse("").join("-")}</span></h5>
              </div>`;
              // APPENDING CURRENT LOOP DATA WITH PREVIOUS LOOP DATA
               edu_loop_content += edu_content;

                
              // Institution CONDITION
              // if(eduinstitution !== ""){
              //   $('#edu_summary').removeClass("hide");
              //   $('#edu_summary').html(eduinstitution);
              // }
              // Institution CONDITION
              // if(eduinstitution !== ""){
              //   $('#edu_degree').removeClass("hide");
              //   $('#edu_degree').html(edudegree);
              // }
               // StartDate  CONDITION
              //  if(edustart !== ""){
              //   $('#edu_start').removeClass("hide");
              //   $('#edu_start').html(edustart);
              // }
              // EndDate CONDITION
              // if(eduend !== ""){
              //   $('#edu_end').removeClass("hide");
              //   $('#edu_end').html(eduend);
              // }
              
              // ADDING IT TO THE CONTAINER
              $('#edu_container').html(edu_loop_content);
            }
            }

             // ARRAY JSON VALUES ARE HANDLED USING LOOP
            // Here Skill fields handled
            for (var m in myJSON.skills) {
              var skillcategory = myJSON.skills[m].category;
              var skillsummary = myJSON.skills[m].summary;

              for (var n in myJSON.skills[m].softwares) {
                var skillsname = myJSON.skills[m].softwares[n].sname;
                var skilllevel = myJSON.skills[m].softwares[n].level;

                if(skillsname !== ""){
                  $('#skill_sname').removeClass("hide");
                  $('#skill_sname').html(skillsname);
                }
                if(skilllevel !== ""){
                  $('#skill_level').removeClass("hide");
                  $('#skill_level').attr('style', 'width:' + skilllevel + '%');
                }
              }


              // Category CONDITION
              if(skillcategory !== ""){
                $('#skill_category').removeClass("hide");
                $('#skill_category').html(skillcategory);
              }
              // Category CONDITION
              if(skillsummary !== ""){
                $('#skill_summary').removeClass("hide");
                $('#skill_summary').html(skillsummary);
              }
            }

            // SET DATA TO HTML TAGS VIA ID
            // SET URL FOR CONFERENCE BUTTON
            // CLICK ACTION DONE FOR CONFERENCE
            $('.conf_id').click(function(){
              var conf_iframe = $('#profile_conf').attr('src');
              if(conf_iframe === ""){
            // SET SRC URL FOR IFRAME MODAL                
              $('#profile_conf').attr('src', instance +"/conf/"+ urlprofilename);
            } 
          });



            // SET URL FOR SCHEDULE BUTTON
            // CLICK ACTION DONE FOR SCHEDULE            
            $('.schedule_id').click(function(){
              var schedule_iframe = $('#profile_schedule').attr('src');
              if(schedule_iframe === ""){
            // SET SRC URL FOR IFRAME MODAL
              $('#profile_schedule').attr('src', instance +"/booking/"+ urlprofilename);
              }
  });
            
  
            // SET SRC URL FOR IFRAME MODAL

            

            $('#profile_name').html(profilename);

            // STICKY HEADER PROFILE NAME
            $('#profile_name_sticky').html(profilename);


            // LABEL DESIGNATION CONDITION
            if(profilelabel !== "") {
                $('#profile_label').removeClass("hide");
                $('#profile_label').html(profilelabel);

                // STICKY HEADER PROFILE LABEL
                $('#profile_label_sticky').html(profilelabel);
            }
            
            $('#profile_picture').attr('src', profilepicture);

            // EMAIL CONDITION
            if(profileemail !== "") {
            // SHOW EMAIL ID BY REMOVING HIDE CLASS
              $('#profile_email_div').removeClass("hide");
              $('#profile_email').html(profileemail);
          } 

            // PHONE NUMBER CONDITION
            if(profilephone !== ""){
              $('#profile_phone_div').removeClass("hide");
              $('#profile_phone').html(profilephone);
            }

     
            if(profilebiosummary !== ""){
              // SHOW BIO DIV SECTION BY REMOVING HIDE CLASS
              $('#bio_div').removeClass("hide");
              profilebiosummary = profilebiosummary.replace(/(?:\r\n|\r|\n)/g, '<br>');
              $('#profile_bio_summary_data').html(profilebiosummary);
            }


            // AFFILIATION AND MEMBERSHIP LOGIC AND IMPLEMENTATION 
            for(var j in myJSON.interests){
              var profileinterests_name = myJSON.interests[j].name;
              var profileinterests_keywords = myJSON.interests[j].keywords;
            if((profileinterests_keywords !== "") && (profileinterests_keywords !== " ")){
              if(profileinterests_name === "Affiliations"){
                $('#profile_affiliations').html(profileinterests_keywords);
                $('#affiliations_div').removeClass("hide");
              }
              if(profileinterests_name === "Associations"){
                $('#profile_associations').html(profileinterests_keywords);
                $('#profile_associations').removeClass("hide");
                $('#associations_div').removeClass("hide");
              }
              if(profileinterests_name === "Memberships"){
                $('#profile_memberships').html(profileinterests_keywords);
                $('#profile_memberships').removeClass("hide");
                $('#associations_div').removeClass("hide");
              }
            } 
          }


            // ADDRESS LOCATION CONDITION
            if((profileaddress !== "" && profileaddress !== " ") || (profilecity !== "" && profilecity !== " ") || (profilepostalcode !== "" && profilepostalcode !== " ")){
              $('#profile_address_div').removeClass("hide");
            $('#profile_location').html(profileaddress +  "<br/>" + profilecity +  " " + profilepostalcode );
            
          }

        
          }
        },
          error: function(xhr, status, error) {
            // var err = eval("(" + xhr.responseText + ")");
            // alert(err.Message);
            $('#no_page_found_section').removeClass("hide");
          }

  });
});


   

