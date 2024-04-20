// Check and store it in local storage
function storeUserInput() {

    if (!localStorage.getItem('colorChange')) {
        let colorChange = prompt("Please enter your preferred background color", "Press enter for default [Pink: #F47D84]");
        localStorage.setItem('colorChange', colorChange || '#F47D84');
    }


    if (!localStorage.getItem('accentcolor')) {
        let accentcolor = prompt("Please enter your preferred accent color", "Press enter for default [Red: #CF232D]");
        localStorage.setItem('accentcolor', accentcolor || '#CF232D');
    }


    if (!localStorage.getItem('textcolor')) {
        let textcolor = prompt("Please enter your preferred text color", "Default is WHITE");
        localStorage.setItem('textcolor', textcolor || 'WHITE');
    }
}


function applyStoredInput() {

    let colorChange = localStorage.getItem('colorChange');
    let accentcolor = localStorage.getItem('accentcolor');
    let textcolor = localStorage.getItem('textcolor');



                     // Background color

    document.body.style.backgroundColor = colorChange;


                        // Accent Color 

    let accentElements = document.querySelectorAll('.accent-color');
    accentElements.forEach(function(element) {
        element.style.color = accentcolor;
    });


                    // Conditionals

                    // Index

    if (document.querySelector(".disclaimer")) {
        let detail = document.querySelector(".disclaimer");
        detail.style.color = accentcolor;
    }
    if (document.getElementById("firstL")) {
        let detail1 = document.getElementById("firstL");
        detail1.style.color = accentcolor;
    }
    if (document.querySelector(".intro-video")) {
        let detail2 = document.querySelector(".intro-video");
        detail2.style.border = "solid 9px white";
    }
    if (document.querySelector(".learnmore-box")) {
        let detail3 = document.querySelector(".learnmore-box");
        detail3.style.border = "solid 9px white";
    }
    if (document.querySelector(".projects-box")) {
        let detail4 = document.querySelector(".projects-box");
        detail4.style.border = "solid 9px white";

                     
    }
    if (document.querySelector(".userprf a")) {
            let prfprompt = document.querySelector(".userprf a");
            prfprompt.style.color = accentcolor;
    }

                        // Personality

    if (colorChange != "white") {
        
        if (document.querySelector(".screen")) {
            let screenView = document.querySelector(".screen");
            screenView.style.backgroundColor = "white";
        }
        if (document.querySelector("h1")) {
            let readerOne = document.querySelector("h1");
            readerOne.style.color = "black";
        }
        if (document.querySelector("h1 span")) {
            let readerOneSpan = document.querySelector("h1 span");
            readerOneSpan.style.color = "black";
        }       
        if (document.querySelector(".screen3")) {
            let screenViewThree = document.querySelector(".screen3");
            screenViewThree.style.backgroundColor = "white";
        }
        if (document.querySelector("h3")) {
            let readerThree = document.querySelector("h3");
            readerThree.style.color = "black";
        }
        if (document.querySelector("h3 span")) {
            let readerThreeSpan = document.querySelector("h3 span");
            readerThreeSpan.style.color = "black";
        }
        if (document.querySelector(".screen4")) {
            let screenViewFour = document.querySelector(".screen4");
            screenViewFour.style.backgroundColor = "white";
        }
        if (document.querySelector("h4")) {
            let readerFour = document.querySelector("h4");
            readerFour.style.color = "black";
        }
        if (document.querySelector("h4 span")) {
            let readerFourSpan = document.querySelector("h4 span");
            readerFourSpan.style.color = "black";
        }

    } else {
        
       if (document.querySelector(".screen")) {
            let screenView = document.querySelector(".screen");
            screenView.style.backgroundColor = accentcolor;
        }
        if (document.querySelector("h1")) {
            let readerOne = document.querySelector("h1");
            readerOne.style.color = textcolor;
        }
        if (document.querySelector("h1 span")) {
            let readerOneSpan = document.querySelector("h1 span");
            readerOneSpan.style.color = textcolor;
        }       
        if (document.querySelector(".screen3")) {
            let screenViewThree = document.querySelector(".screen3");
            screenViewThree.style.backgroundColor = accentcolor;
        }
        if (document.querySelector("h3")) {
            let readerThree = document.querySelector("h3");
            readerThree.style.color = textcolor;
        }
        if (document.querySelector("h3 span")) {
            let readerThreeSpan = document.querySelector("h3 span");
            readerThreeSpan.style.color = textcolor;
        }
        if (document.querySelector(".screen4")) {
            let screenViewFour = document.querySelector(".screen4");
            screenViewFour.style.backgroundColor = accentcolor;
        }
        if (document.querySelector("h4")) {
            let readerFour = document.querySelector("h4");
            readerFour.style.color = textcolor;
        }
        if (document.querySelector("h4 span")) {
            let readerFourSpan = document.querySelector("h4 span");
            readerFourSpan.style.color = textcolor;
        } 
    }



                    // Preference button

    let prefer = document.querySelector(".prefReset");
    prefer.style.border = "2px solid " + accentcolor;
    
    prefer.addEventListener("mouseover", function (event) {
        prefer.style.backgroundColor = accentcolor;
        prefer.style.color = colorChange;
    });

    prefer.addEventListener("mouseout", function (event) {
        prefer.style.backgroundColor = "";
        prefer.style.color = "";
    });



                    // Navigation links

    let navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(function (navdetail) {
        navdetail.addEventListener("mouseover", function (event) {
            navdetail.style.color = accentcolor;
            navdetail.style.textDecoration = "underline 6px " + accentcolor;
            navdetail.style.textShadow = "2px 2px 8px " + accentcolor;
        });

        navdetail.addEventListener("mouseout", function (event) {
            if (colorChange === "white") {
                navdetail.style.color = textcolor;
                navdetail.style.textDecoration = " ";
                navdetail.style.textShadow = " ";
            } else {
                navdetail.style.color = " ";
                navdetail.style.textDecoration = " ";
                navdetail.style.textShadow = " ";
            }
        });
    });




                    // Text color


    let text1 = document.querySelector(".greeting");
    let text2 = document.querySelector(".p1");
    text1.style.color = textcolor;
    text2.style.color = textcolor;
    prefer.style.color = textcolor; 

    // If background color is white, apply text color to navigation links
    if (colorChange === "white") {
        navLinks.forEach(function (navLink) {
            navLink.style.color = textcolor;
        });
    }

    // Apply text color to specific elements
    let textElements = document.querySelectorAll('.text-color');
    textElements.forEach(function(element) {
        element.style.color = textcolor;
    });
}

//Reset functionality

function resetPreferences(){
    localStorage.removeItem('colorChange');
    localStorage.removeItem('accentcolor');
    localStorage.removeItem('textcolor');
    alert("Refresh page to reset display preferences.");
}

storeUserInput();

applyStoredInput();

console.log("Applying stored input...");

