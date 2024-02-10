const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		} else {
			entry.target.classList.remove('show');
		}

	});

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


var fullimgBox = document.getElementById("fullimgBox")
var fullimg = document.getElementById("fullimg")

	function openFullimg(pic){
		fullimgBox.style.display = "flex";
		fullimg.src = pic;
	}

	function closeFullimg(){
		fullimgBox.style.display = "none";
	}