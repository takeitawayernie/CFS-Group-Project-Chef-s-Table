// "About Us" open and close

function open_about_us(){
    document.getElementById("nav_about_us").style.width= "100%";
}

function close_about_us(){
    document.getElementById("nav_about_us").style.width = "0%";
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
        description: "No Japanese meal is complete without gohan – fluffy, slightly sticky rice. Top this versatile food with pickles, spring onions, nori or katsuobushi flakes.",
        terms: ["rice", "pickles", "food", "japanese"],
        link: "https://www.bbcgoodfood.com/recipes/japanese-rice-gohan",
        imageSrc: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/ricegohan-af57a7d.jpg?quality=90&webp=true&resize=300,272"
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