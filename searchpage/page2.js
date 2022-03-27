// "About Us" open and close

function open_about_us(){
    document.getElementById("nav_about_us").style.width= "100%";
}

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

var recipes = [
    {
        name: "Okonomiyaki",
        description: "Try this Japanese savoury pancake, made with cabbage and chunks of pork belly. It's a great way to use up leftovers ",
        terms: ["cabbage", "pork", "pancake", "food", "japanese"],
        link: "https://www.bbc.co.uk/food/recipes/easy_okonomiyaki_78828",
        imageSrc: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/easy_okonomiyaki_78828_16x9.jpg"
    },
    {
        name: "Ramen",
        description: "Use chicken, noodles, spinach, sweetcorn and eggs to make this moreish Japanese noodle soup, for when you crave something comforting yet light and wholesome.",
        terms: ["noodles", "chicken", "food", "japanese"],
        link: "https://www.bbc.co.uk/food/recipes/souped_up_instant_ramen_69512",
        imageSrc: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/souped_up_instant_ramen_69512_16x9.jpg"
    },
    {
        name: "Rice/Gohan",
        description: "No Japanese meal is complete without gohan \- fluffy, slightly sticky rice. Top this versatile food with pickles, spring onions, nori or katsuobushi flakes.",
        terms: ["rice", "pickles", "food", "japanese"],
        link: "https://www.bbcgoodfood.com/recipes/japanese-rice-gohan",
        imageSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/ricegohan-af57a7d.jpg?quality=90&webp=true&resize=300,272"
    },
    {
        name: "Mexican bean soup with guacamole",
        description: "This warming, spiced vegetarian soup packs in goodness and is filling too. The quick-to-assemble guacamole topping tastes as good as it looks.",
        terms: ["mexican", "vegetarian", "food", "beans"],
        link: "https://www.bbcgoodfood.com/recipes/mexican-bean-soup-guacamole",
        imageSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/wdp-lunch-mexicanguacamolesoup_02051-d1c462c.jpg?quality=90&webp=true&resize=300,272"
    },
    {
        name: "Ultimate traditional Victoria sponge",
        description: "Take the classic Victoria sponge cake to a whole new level by using creme diplomat in place of standard whipped cream, and sweet macerated berries",
        terms: ["cake", "sweet", "food", "traditional, dessert, pudding"],
        link: "https://www.bbcgoodfood.com/recipes/ultimate-traditional-victoria-sponge",
        imageSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/ultimate-traditional-victoria-sponge-19d925b.jpg?quality=90&webp=true&resize=300,272"
    },
    {
        name: "Chicken pasta bake",
        description: "Enjoy this gooey cheese and chicken pasta bake for the ultimate weekday family dinner. Serve straight from the dish with a dressed green salad",
        terms: ["pasta", "chicken", "food", "traditional", "cheese", "tomato"],
        link: "https://www.bbcgoodfood.com/recipes/chicken-pasta-bake",
        imageSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chicken_pasta_bake-06fe2d6.jpg?quality=90&webp=true&resize=300,272"
    },
    {
        name: "Pizza with homemade sauce",
        description: "Make pizza for the family with a homemade base and tomato sauce. The recipe is perfect to get kids involved in cooking. Top with mozzarella and fresh basil",
        terms: ["pizza", "comforting", "food", "italian", "cheese", "tomato", "vegetarian"],
        link: "https://www.bbcgoodfood.com/recipes/pizza-homemade-sauce",
        imageSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pizza-with-homemade-sauce-b7beea0.jpg?quality=90&webp=true&resize=300,272"
    },
    {
        name: "Bean & halloumi stew",
        description: "Use a can of mixed beans to make this tomato-based veggie stew with halloumi. Make it in just 25 minutes for a quick and easy midweek supper",
        terms: ["halloumi", "vegetarian", "food", "stew", "cheese", "tomato", "beans"],
        link: "https://www.bbcgoodfood.com/recipes/bean-halloumi-stew",
        imageSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/bean-halloumi-stew-d5940b2.jpg?quality=90&webp=true&resize=300,272"
    },
    {
        name: "15-minute chicken & halloumi burgers",
        description: "Struggle to find dishes to cook that take very little time but the whole family will love? Look no further than these chicken and halloumi burgers",
        terms: ["halloumi", "chicken", "food", "burger", "cheese", "bread", "quick"],
        link: "https://www.bbcgoodfood.com/recipes/15-minute-chicken-halloumi-burgers",
        imageSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/15-minute-chicken-halloumi-burgers-ef95d1d.jpg?quality=90&webp=true&resize=300,272"
    },
    {
        name: "Salade nicoise",
        description: "Make salade nicoise your go-to salad for summer. With crunchy lettuce, ripe tomatoes, potatoes, tuna and soft-boiled eggs, it's full of flavour and texture",
        terms: ["salad", "tuna", "food", "fish", "tomato", "olive", "lettuce"],
        link: "https://www.bbcgoodfood.com/recipes/salade-nicoise",
        imageSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/salade-nicoise-565173e.jpg?quality=90&webp=true&resize=300,272"
    }
];

// function to be called when user types in search bar

onUserType = function(userInput)
{


    // gets recipe list
    var recipeList = document.getElementById('recipeList');
    // deletes previous search results when user starts typing
    recipeList.innerHTML = "";

    //loops through recipe search terms to filter results. 
    for(var i = 0 ; i < recipes.length; i++){
        var searchTermFound = false;
        for(var j = 0; j < recipes[i].terms.length; j++) {
            var currentTerm = recipes[i].terms[j].toLowerCase();
            if(currentTerm.includes(userInput)) {
                searchTermFound = true;
            }
        }
        if(searchTermFound) {
            // clones recipe template
            var recipeTemplate = document.getElementById('recipeTemplate').cloneNode(true);
            // sets recipe title
            recipeTemplate.getElementsByTagName('h3')[0].innerHTML = recipes[i].name;
            recipeTemplate.getElementsByTagName('p')[0].innerHTML = recipes[i].description;
            recipeTemplate.getElementsByTagName('img')[0].src = recipes[i].imageSrc;
            recipeTemplate.getElementsByTagName('a')[0].href = recipes[i].link;
            // makes clone visible
            recipeTemplate.classList.remove("hide");
                    // adds the new recipe to the recipe list
            recipeList.appendChild(recipeTemplate);
        }
    }
}



// add an event listener to the document so we know when the document is loaded
document.addEventListener('DOMContentLoaded', function() {
    var searchBoxValue = window.location.search.substr(1);
    searchBoxValue = searchBoxValue.split("=")[1];

    // gets html element with id searchBox
    var searchBox = document.getElementById('searchBox');

    //if we have been redirected from a user clicking on e.g. "Pasta"
    if(searchBoxValue!=undefined) {
        searchBox.value = searchBoxValue;
        onUserType(searchBoxValue);
    } else {
        onUserType("food");
    }

    // add an event listener to the searchBox so we know when the user has typed
    searchBox.addEventListener('input', function(e) {
        var userInput = e.target.value;

        userInput = userInput.toLowerCase();
        onUserType (userInput);
    });
})




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
