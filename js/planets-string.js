(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    planetsString = planetsArray.join("<br>");
    console.log(planetsString);

    let planetDiv = document.getElementById("planets");
    planetsString = planetsArray.join("</li></li>");


    // let ul = document.createElement("ul");
    // document.body.appendChild(ul);
    // for (let i = 0; i < planetsArray.length; i++) {
    //     let li = document.createElement("li");
    //     li.textContent = planetsArray[i];
    //     li.style.cssText = "font-size: 1.5rem; color: purple";
    //     ul.appendChild(li);
    // }
    // console.log(ul);

    /**
    *  Bonus challenge. Create a function that takes a sentence and turns it into Zatanna magic language.
    * Zatanna uses magic by taking sentences and reversing each word one by one,
    * but keeping the original order of the words. So, "give me a perfect score on all my tests" must become
    *  "Evig em a tcefrep erocs no lla ym stset!" (edited)
    **/
    function zatannaMagic(string) {
        let commandArray = string.toLowerCase().split(" ");
        for(let i = 0; i < commandArray.length; i++) {
            commandArray[i] = commandArray[i].split('').reverse().join('');
        }
        let command = commandArray.join(" ") + "!";
        return command.charAt(0).toUpperCase() + command.slice(1);
    }

})();
