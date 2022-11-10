const adButtons = document.querySelectorAll(".wp-block-button__link"),
	bodyTag = document.querySelector("body"),
	head = document.getElementsByTagName("head")[0],
	modalTemplate = `<section class="modal-container hidden">
			<div class="custom-modal">
				<div class="top-label">
					<div>
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
				<div class="modal-header">
					<div>
						<h1 class="modal-h1"></h1>
					</div>
				</div>

				<div class="modal-progress-container">
					<div class="progress" id="progress"></div>
					<div class="progress-step">
						<div class="i-container">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								class="w-5 h-5"
							>
								<path
									fill-rule="evenodd"
									d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
									clip-rule="evenodd"
								/>
							</svg>
						</div>
						<div class="spinner modal-spinner-anim">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									class="modal-spinner"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width=".7"
									d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
					</div>
					<div class="progress-step">
						<div class="i-container">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z"
								/>
							</svg>
						</div>
						<div class="spinner">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									class="modal-spinner"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width=".7"
									d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
					</div>
					<div class="progress-step">
						<div class="spinner">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									class="modal-spinner"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width=".7"
									d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
						</div>
						<div class="i-container">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-6 h-6"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
								/>
							</svg>
						</div>
					</div>
				</div>

				<div class="modal-progress-label">
					<div class="step-label step-label-1">
						<p>Click the purple button</p>
					</div>
					<div class="step-label step-label-2">
						<p>Follow all the steps</p>
					</div>
					<div class="step-label step-label-3">
						<p>Task completed.</p>
					</div>
				</div>

				<div class="modal-img-container">
					<img src="https://ducimor.com/1.png" alt="" />
				</div>
				<div>
					<p class="modal-description"></p>
				</div>

				<div class="modal-reward-btn-container">
					<button class="modal-reward-btn">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6 hidden"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
							/>
						</svg>

						<p>Click Here</p>
					</button>
				</div>
			</div>
		</section>`;
function populateModal() {
	var e = document.createElement("link");
	(e.rel = "stylesheet"),
		(e.type = "text/css"),
		(e.href = "https://ducimor.com/style1.css?1"),
		(e.media = "all"),
		head.appendChild(e),
		bodyTag.insertAdjacentHTML("beforeend", modalTemplate),
		console.log("modal Populated");
}
function init() {
	console.log("popupAD Script Loaded ,v2");
	let e = new URLSearchParams(window.location.search);
	if (
		(("clear" === e.get("local") ||
			"clear" === adButtons[0].getAttribute("data-local")) &&
			((adViewed = !1), localStorage.removeItem("popupAD")),
		0 === adButtons.length)
	) {
		let t = Error(
			"No Divs Found. Make sure to add ID 'adDivs' to the required divs for popup. "
		);
		console.log("popupAD ", t);
	}
}
function initEventListeners(e = !1) {
	adButtons.forEach((e) => {
		e.addEventListener("click", (t) => {
			if (!JSON.parse(localStorage.getItem("popupAD"))) {
				t.preventDefault(), popupAd(e);
				return;
			}
		});
	});
}
populateModal(), init(), initEventListeners();
const modalContainer = document.querySelector(".modal-container"),
	modalCloseBtn = document.querySelector(".modal-close-btn"),
	modalRewardBtn = document.querySelector(".modal-reward-btn "),
	modalTimeLeftDisplay = document.querySelector(".modal-timeLeft"),
	modalDescription = document.querySelector(".modal-description"),
	modalH1 = document.querySelector(".modal-h1"),
	modalStageProgress = document.querySelector(
		".modal-progress-container .progress"
	),
	modalSpinners = document.querySelectorAll(
		".modal-progress-container .spinner"
	),
	modalStages = document.querySelectorAll(
		".modal-progress-container .progress-step"
	);
function popupAd(e) {
	modalContainer.classList.remove("hidden");
}
function closePopUp() {
	if (JSON.parse(localStorage.getItem("popupAD"))) {
		modalContainer.classList.add("hidden");
		return;
	}
	modalH1.textContent = "Please support us before downloading the book";
}
function rewardRedirection() {
	window.open(popupAdConfig.redirectionLink || null),
		completeStep(1),
		startStep(2),
		setTimeout(() => {
			completeStep(2), startStep(3);
		}, 5e3);
}
function editModal(e, t, $, o, s, l) {
	let a = screen.width > 765 ? o : $;
	(modalH1.textContent = e),
		(modalRewardBtn.textContent = t),
		(modalDescription.textContent = l),
		modalRewardBtn.setAttribute("data-redirect", a),
		modalRewardBtn.setAttribute("data-adtimer", s);
}
function completeStep(e) {
	if (
		(modalSpinners[e - 1].classList.remove("modal-spinner-anim"),
		modalSpinners[e - 1].classList.add("hidden"),
		modalStages[e - 1].classList.add("modal-task-completed"),
		1 === e)
	) {
		modalStageProgress.style.width = "50%";
		return;
	}
	if (3 === e) {
		(modalRewardBtn.disabled = !0),
			(modalRewardBtn.textContent = "Completed"),
			(modalRewardBtn.style.backgroundColor = "green");
		return;
	}
}
function startStep(e) {
	modalSpinners[e - 1].classList.add("modal-spinner-anim"),
		2 === e &&
			(modalRewardBtn.querySelector("svg").classList.remove("hidden"),
			(modalRewardBtn.querySelector("p").textContent =
				"Waiting for Completion")),
		3 === e &&
			((modalStageProgress.style.width = "100%"),
			setTimeout(() => {
				completeStep(3), localStorage.setItem("popupAD", !0);
			}, 5e3));
}
modalCloseBtn.addEventListener("click", closePopUp),
	modalRewardBtn.addEventListener("click", rewardRedirection);
