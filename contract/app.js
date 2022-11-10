const adButtons = document.querySelectorAll("#adDivs");
const bodyTag = document.querySelector("body");
const modalTemplate = `
		<section class="modal-container hidden">
			<div class="custom-modal">
				<div class="modal-header">
					<div>
						<h1 class="modal-h1">AD MODAL</h1>
					</div>
					<div class="modal-cls-container">
						<p class="modal-timeLeft"></p>
						<button class="modal-close-btn">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
				</div>
				
				<div>
					<p class="modal-description">
					</p>
				</div>
				
				<div class="modal-vid-wrapper">
					<iframe
						src="https://www.youtube.com/embed/C0DPdy98e4c"
						frameborder="0"
					></iframe>
				</div>
				
				<div class="modal-reward-btn-container">
					<button class="modal-reward-btn">Earn Reward</button>
				</div>
			</div>
		</section>`;
var adViewed = JSON.parse(localStorage.getItem("popupAD"));
var timerRunning = null;

function populateModal() {
	bodyTag.insertAdjacentHTML("afterbegin", modalTemplate);
	console.log("modal Populated");
}
function init() {
	console.log("popupAD Script Loaded ,V2");
	const params = new URLSearchParams(window.location.search);
	//Clear LocalStorage If Requested
	let localStorageStatus = params.get("local");
	if (
		localStorageStatus === "clear" ||
		adButtons[0].getAttribute("data-local") === "clear"
	) {
		adViewed = false;
		localStorage.removeItem("popupAD");
	}
	if (adButtons.length === 0) {
		let err = new Error(
			"No Divs Found. Make sure to add ID 'adDivs' to the required divs for popup. "
		);
		console.log("popupAD ", err);
	}
}

function initEventListeners(reset = false) {
	//console.log(reset ? "Reseting Event Listeners" : "Event Listeners Init");
	//Event Listeners
	adButtons.forEach((button) => {
		button.addEventListener("click", () => popupAd(button));
		//If Ad Not viewed by the user, disable click events for all the elements
		// on the webpage.
		// Reset : If the reset Value is true , we remove the prevent-click else we
		// add the prevent-click.
		if (!adViewed) {
			Array.from(button.children).forEach((node) => {
				if (reset) {
					node.classList.remove("prevent-click");
				} else {
					node.classList.add("prevent-click");
				}
			});
		}
	});
}

populateModal();
init();
initEventListeners();

const modalContainer = document.querySelector(".modal-container");
const modalCloseBtn = document.querySelector(".modal-close-btn");
const modalRewardBtn = document.querySelector(".modal-reward-btn ");
const modalTimeLeftDisplay = document.querySelector(".modal-timeLeft");
const modalDescription = document.querySelector(".modal-description");
const modalH1 = document.querySelector(".modal-h1");
modalCloseBtn.addEventListener("click", closePopUp);
modalRewardBtn.addEventListener("click", rewardRedirection);

//Functions
function popupAd(button) {
	//Get the attribute from the element or From URL params
	const params = new URLSearchParams(window.location.search);

	let h1 = params.get("h1") || button.getAttribute("data-h1") || "Popup AD";
	let btnTxt =
		params.get("btn") || button.getAttribute("data-btn-txt") || "Earn Reward";
	let timer = params.get("timer") || button.getAttribute("data-timer") || 10;
	let adLink =
		params.get("adlink") ||
		button.getAttribute("data-adLink") ||
		"https://www.google.com/";
	let mobileAd =
		params.get("mobilead") || button.getAttribute("data-mobilead") || adLink;
	let desktopAd =
		params.get("desktopad") || button.getAttribute("data-desktopad") || adLink;
	let originalLink =
		params.get("originallink") ||
		button.getAttribute("data-originalLink") ||
		null;
	let description =
		button.getAttribute("data-description") || "Sample Description";
	//let adViewedTimes = button.getAttribute("data-adViewed") || 1;
	//let adVideo = button.getAttribute("data-adVid");

	//Check if the user Already Clicked AD button or Not.[from-LocalStorage]
	//if user Already Viewed the AD redirect to the original Link else show the modal.

	if (!JSON.parse(localStorage.getItem("popupAD"))) {
		//Edit the modal ,Show the modal
		editModal(h1, btnTxt, mobileAd, desktopAd, timer, description);
		modalContainer.classList.remove("hidden");
		return;
	}

	//Redirect to OriginalLink , If any Link Redirection Link is present
	// , Redirect the webpage or else do Nothing
	originalLink ? window.open(originalLink) : 0;
}
function startTimer(timer) {
	// Run The Timer
	timerRunning = true;
	var timeleft = parseInt(timer, 10);
	var downloadTimer = setInterval(function () {
		if (timeleft <= 0) {
			clearInterval(downloadTimer);
			timerRunning = false;
			modalContainer.classList.add("hidden");
			initEventListeners((reset = true));
		}
		//modalTimeLeftDisplay.textContent = "You can close the ad in " + timeleft;
		timeleft -= 1;
	}, 1000);
}

function closePopUp() {
	//If timer Running don't close the Modal
	if (timerRunning) return;
	modalContainer.classList.add("hidden");
}

function rewardRedirection() {
	// Start the Timer
	startTimer(modalRewardBtn.dataset.adtimer);

	window.open(modalRewardBtn.dataset.redirect);
	localStorage.setItem("popupAD", true);
}

function editModal(h1, btnTxt, mobileAd, desktopAd, timer, description) {
	let adLink = screen.width > 765 ? desktopAd : mobileAd;
	modalH1.textContent = h1;
	modalRewardBtn.textContent = btnTxt;
	modalDescription.textContent = description;
	modalRewardBtn.setAttribute("data-redirect", adLink);
	modalRewardBtn.setAttribute("data-adtimer", timer);
}

// h1 = "Test",
// 	buttonTxt = "Test",
// 	videoUrl = "https://www.youtube.com/watch?v=C0DPdy98e4c",
// 	redirectionUrl = "https://www.shumak.me/",
// 	time = 10,
// let isMouseAvailable = window.matchMedia("(any-pointer:coarse)").matches;
// console.log(isMouseAvailable);
