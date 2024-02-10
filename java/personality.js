// Screen One

const dynamicText = document.querySelector("h1 span");
const words = ["When I grow up I want to be Barbie","Or maybe i'll take over the world.",
	"I'll be a high valued, most sought Barbie", 
	"that takes over world", "...who's job also offers a great benefits package"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false


const typeEffect = () => {
	const currentWord = words[wordIndex];
	const currentChar = currentWord.substring(0, charIndex);
	dynamicText.textContent = currentChar;
	dynamicText.classList.add("stop-blinking");

	if(!isDeleting && charIndex < currentWord.length){
		//if condition is true, type the next character
		charIndex++;
		setTimeout(typeEffect, 80);
	} else if(isDeleting && charIndex > 0) {
		// if condition is true, remove the previous character
		charIndex --;
		setTimeout(typeEffect, 80);
	} else {
		// if word is deleted then switch to next word
		isDeleting = !isDeleting;
		dynamicText.classList.remove("stop-blinking");
		wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
		setTimeout(typeEffect, 1400);
	}
}

typeEffect();


// Screen Two

const dynamicText2 = document.querySelector("h2 span");
const words2 = ["I want to travel the world,",
	"preferably not in a flight attendant uniform.", "Who want's a flight attendant who can't swim?", 
	"I'm thinking of hitting every continent", "except Antartica because I hate the cold."];

let wordIndex2 = 0;
let charIndex2 = 0;
let isDeleting2 = false


const typeEffect2 = () => {
	const currentWord2 = words2[wordIndex2];
	const currentChar2 = currentWord2.substring(0, charIndex2);
	dynamicText2.textContent = currentChar2;
	dynamicText2.classList.add("stop-blinking2");

	if(!isDeleting2 && charIndex2 < currentWord2.length){
		//if condition is true, type the next character
		charIndex2++;
		setTimeout(typeEffect2, 80);
	} else if(isDeleting2 && charIndex2 > 0) {
		// if condition is true, remove the previous character
		charIndex2 --;
		setTimeout(typeEffect2, 80);
	} else {
		// if word is deleted then switch to next word
		isDeleting2 = !isDeleting2;
		dynamicText2.classList.remove("stop-blinking2");
		wordIndex2 = !isDeleting2 ? (wordIndex2 + 1) % words2.length : wordIndex2;
		setTimeout(typeEffect2, 1400);
	}
}

typeEffect2();



// Screen Three

const dynamicText3 = document.querySelector("h3 span");
const words3 = ["I wan't to gain fluency in French","Two semesters may teach you how to spell,",
	"and Duolingo will keep your grammar on point","But I want to travel abroad,","and catfish French people w/ my accent",
	"I don't know how long achieving fluency will take","but even if it takes me a decade"];

let wordIndex3 = 0;
let charIndex3 = 0;
let isDeleting3 = false


const typeEffect3 = () => {
	const currentWord3 = words3[wordIndex3];
	const currentChar3 = currentWord3.substring(0, charIndex3);
	dynamicText3.textContent = currentChar3;
	dynamicText3.classList.add("stop-blinking3");

	if(!isDeleting3 && charIndex3 < currentWord3.length){
		//if condition is true, type the next character
		charIndex3++;
		setTimeout(typeEffect3, 80);
	} else if(isDeleting3 && charIndex3 > 0) {
		// if condition is true, remove the previous character
		charIndex3 --;
		setTimeout(typeEffect3, 80);
	} else {
		// if word is deleted then switch to next word
		isDeleting3 = !isDeleting3;
		dynamicText3.classList.remove("stop-blinking3");
		wordIndex3 = !isDeleting3 ? (wordIndex3 + 1) % words3.length : wordIndex3;
		setTimeout(typeEffect3, 1400);
	}
}

typeEffect3();



// Screen Four

const dynamicText4 = document.querySelector("h4 span");
const words4 = ["Je voudrais parler Français","et je pratique depuis deux ans.",
	"Je plan visiter France,","mais j'ai beaucoup à apprendre,","Mais j'apprendrai",];

let wordIndex4 = 0;
let charIndex4 = 0;
let isDeleting4 = false


const typeEffect4 = () => {
	const currentWord4 = words4[wordIndex4];
	const currentChar4 = currentWord4.substring(0, charIndex4);
	dynamicText4.textContent = currentChar4;
	dynamicText4.classList.add("stop-blinking4");

	if(!isDeleting4 && charIndex4 < currentWord4.length){
		//if condition is true, type the next character
		charIndex4++;
		setTimeout(typeEffect4, 80);
	} else if(isDeleting4 && charIndex4 > 0) {
		// if condition is true, remove the previous character
		charIndex4 --;
		setTimeout(typeEffect4, 80);
	} else {
		// if word is deleted then switch to next word
		isDeleting4 = !isDeleting4;
		dynamicText4.classList.remove("stop-blinking4");
		wordIndex4 = !isDeleting4 ? (wordIndex4 + 1) % words4.length : wordIndex4;
		setTimeout(typeEffect4, 1400);
	}
}

typeEffect4();
