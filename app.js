// Select relevant document nodes
let textarea = document.querySelector(".textarea");
let resultLayer = document.querySelector(".result-layer");
let result = document.querySelector(".result");
let btn = document.querySelector(".btn");
let clearBtn = document.querySelector(".clear-btn");

btn.addEventListener("click", () => {
	let normalText = textarea.value;

	makeBionicWords(normalText);
	resultLayer.classList.remove("hidden");

	textarea.value = "";
});

clearBtn.addEventListener("click", () => {
	result.innerHTML = "";
});

// Funtion that convert given text to a Bionic Text
function makeBionicWords(sentence) {
	let splitSentence = sentence.split(" ");
	// console.log(splitSentence)

	splitSentence.forEach((word) => {
		let lengthOfWord = word.length;

		let halfNumWord;

		if (lengthOfWord >= 2) {
			halfNumWord = Math.ceil(lengthOfWord / 2);

			let boldedWord = word.slice(0, halfNumWord);

			let otherHalfNumWord = lengthOfWord - halfNumWord;
			let normalWord = word.slice(-`${otherHalfNumWord}`);

			let bionicWord = boldedWord.bold() + normalWord;

			return (result.innerHTML += ` ${bionicWord}`);
		} else {
			halfNumWord = 1;

			let bionicWord = word.bold();
			return (result.innerHTML += ` ${bionicWord}`);
		}
	});
}
