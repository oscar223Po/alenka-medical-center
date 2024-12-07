// Підключення функціоналу "Чертоги Фрілансера"
import { bodyLockStatus, bodyLockToggle, isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector(".main-header__search-btn")) {
		document.addEventListener("click", function (e) {
			if (bodyLockStatus && e.target.closest('.main-header__search-btn')) {
				bodyLockToggle();
				document.documentElement.classList.toggle("search-open");
			} else if (!e.target.closest('.search__body') && document.documentElement.classList.contains("search-open")) {
				document.documentElement.classList.remove("search-open");
				bodyLockToggle();
			}
		});
	};
	const videosCover = document.querySelector('.record');
	const videos = document.querySelectorAll('.record__video');
	const buttons = document.querySelectorAll('.record__button');
	if (videos !== null) {
		videos.forEach((video, index) => {
			const videoButton = buttons[index];
			if (video !== null && videoButton !== null) {
				videoButton.addEventListener('click', function () {
					if (video.paused) {
						video.play();
						video.classList.add("video-pointer");
						videosCover.classList.add("record-play");
						videoButton.classList.add('play-btn-disable');
					}
				});
				video.addEventListener('click', function () {
					if (!video.paused) {
						video.pause();
						video.classList.remove("video-pointer");
						videosCover.classList.remove("record-play");
						videoButton.classList.remove('play-btn-disable');
					}
				});
			}
		});
	}
});