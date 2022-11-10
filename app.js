const adButtons = document.querySelectorAll("#adDivs");
const modalContainer = document.querySelector(".modal-container");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalRewardBtn = document.querySelector(".modal-reward-btn ");
const modalTimeLeftDisplay = document.querySelector(".modal-timeLeft");
const modalH1 = document.querySelector(".modal-h1");
var adViewed = false;
var timerRunning = null;
console.log(adButtons);
//Event Listeners
adButtons.forEach((button) =>
	button.addEventListener("click", () => popupAd(button))
);
modalCloseBtn.addEventListener("click", closePopUp);
modalRewardBtn.addEventListener("click", rewardRedirection);
console.log(adButtons);
function popupAd(button) {
	//Get the attribute from the element
	let h1 = button.getAttribute("data-h1");
	let btnTxt = button.getAttribute("data-btn-txt");
	let adLink = button.getAttribute("data-adLink");
	let adViewedTimes = button.getAttribute("data-adViewed");
	let orginalLink = button.getAttribute("data-originalLink");
	let timer = button.getAttribute("data-timer");
	let adVideo = button.getAttribute("data-adVid");

	//Edit the modal
	editModal(h1, btnTxt, adLink, adVideo);
	console.log("Pop up the Ad");
	modalContainer.classList.remove("hidden");
	adViewed = false;
	timerRunning = true;

	// Run The Timer
	var timeleft = parseInt(timer, 10);
	var downloadTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);
			timerRunning = false;
		}
		console.log("Timer", timeleft);
		modalTimeLeftDisplay.textContent = "You can close the ad in " + timeleft;
		timeleft -= 1;
	}, 1000);
}

function closePopUp() {
	console.log("close");
	if (!adViewed) {
		modalTimeLeftDisplay.textContent = "Click the Reward Button to Close";
	}
	if (adViewed && !timerRunning) {
		modalContainer.classList.add("hidden");
	}
}
function rewardRedirection() {
	// Start the Timer
	adViewed = true;
	window.open(modalRewardBtn.dataset.redirect);
	console.log(modalRewardBtn.dataset.redirect);
}

function editModal(h1, btnTxt, adLink, adVideo) {
	modalH1.textContent = h1;
	modalRewardBtn.textContent = btnTxt;
	modalRewardBtn.setAttribute("data-redirect", adLink);
}

// h1 = "Test",
// 	buttonTxt = "Test",
// 	videoUrl = "https://www.youtube.com/watch?v=C0DPdy98e4c",
// 	redirectionUrl = "https://www.shumak.me/",
// 	time = 10,
