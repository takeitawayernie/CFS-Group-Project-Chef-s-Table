//"About Us" open and close
      
     function open_about_us(){
        document.getElementById("nav_about_us").style.width= "100%";
    }
    
    //document.getElementById("close_about").addEventListener("click",close_about_us);
    
    function close_about_us(){
    document.getElementById("nav_about_us").style.width = "0%";
    }
    
    
    //open sign up
    
    function open_sign_up(){
        document.getElementById("nav_sign_up").style.height = "80%";
    }
    
    function close_sign_up(){
        document.getElementById("nav_sign_up").style.height = "0%";
    }
    
    function close_thx(){
       // document.getElementById("nav_sign_up").style.height = "0%"; 
       document.getElementById("submit_sign_up").innerHTML = "Thank you";

           const mytimeout = setTimeout(delayclose,1000);
             function delayclose(){
               document.getElementById("nav_sign_up").style.height = "0%";
               document.getElementById("submit_sign_up").innerHTML = "Submit";  
     }
    }

      //open login
      
      
      function open_login(){
          document.getElementById("nav_login").style.height = "60%";
      }
      
      function close_login(){
          document.getElementById("nav_login").style.height = "0%";
      
      }
      
      function welcome(){
          var name_fill = document.getElementById ("login_name").value;
          document.getElementById("nav_login").style.height = "0%";
          document.getElementById("nav_welcome").style.height = "20%";
          document.getElementById("welcome_banner").innerText= ("Welcome   " + name_fill);
          
          console.log (name_fill);
      
          
      }
      
      function close_welcome(){
          document.getElementById("nav_welcome").style.height = "0%";
          document.getElementById("login_name").value="";
          document.getElementById("password1").value="";
      }
    






/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

  // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
            }
        }
    }
}



// "Contact Form" open and close

function open_contact_form(){
    document.getElementById("footer_contact_form").style.height = "80%";
}

function close_contact_form(){
    document.getElementById("footer_contact_form").style.height = "0%";
}

function submit_contact(){
    
    document.getElementById("submit_contact_form").innerHTML = "Thank you";

        const mytimeout = setTimeout(delayclose,1000);
        function delayclose(){
           document.getElementById("footer_contact_form").style.height = "0%";
      }
}

// "Terms and Conditions" open and close

function open_terms(){
    document.getElementById("footer_terms").style.width= "100%";
}

function close_terms(){
    document.getElementById("footer_terms").style.width = "0%";
}



// "Subscribe Form" open and close

function open_subscribe_form(){
    document.getElementById("footer_subscribe_form").style.height = "80%";
}

function close_subscribe_form(){
    document.getElementById("footer_subscribe_form").style.height = "0%";
}

function close_thanks(){
    
    document.getElementById("submit_subscribe_form").innerHTML = "Thank you";

        const mytimeout = setTimeout(delayclose,1000);
        function delayclose(){
            document.getElementById("footer_subscribe_form").style.height = "0%";
        }
}

document.addEventListener('DOMContentLoaded', function() {
    var searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keyup", function(event) {
        //console.log(event);
        if (event.keyCode === 13) {
            window.location.href = "./../searchpage/page2.html?search="+event.target.value;     
        }
    });
})

