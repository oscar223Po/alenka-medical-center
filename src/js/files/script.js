// Підключення функціоналу "Чертоги Фрілансера"
import { bodyLockStatus, bodyLockToggle, isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', function () {
	// --------------- [ JavaScript Search Window ] ---------------
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
	// --------------- [ JavaScript Video Controll ] ---------------
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
	// --------------- [ JavaScript Time Controll ] ---------------
	const timeMasterButtons = document.querySelectorAll('.about-main-master__action');
	timeMasterButtons.forEach(button => {
		button.addEventListener('click', () => {
			// Удаляем класс active у всех кнопок
			timeMasterButtons.forEach(btn => btn.classList.remove('about-main-master__action--active'));
			// Добавляем класс active текущей кнопке
			button.classList.add('about-main-master__action--active');
		});
	});
	// --------------- [ JavaScript Filter Controll ] ---------------
	const expertLinkButtons = document.querySelectorAll('.head-expert__link');
	expertLinkButtons.forEach(button => {
		button.addEventListener('click', () => {
			// Удаляем класс active у всех кнопок
			expertLinkButtons.forEach(btn => btn.classList.remove('link-expert-active'));
			// Добавляем класс active текущей кнопке
			button.classList.add('link-expert-active');
		})
	});
	// --------------- [ JavaScript Doctors Show More ] ---------------
	/*
	const reviewsButton = document.querySelector('.more-doctors__button');
	if (reviewsButton !== null) {
		reviewsButton.addEventListener('click', function () {
			// Находим все колонки с отзывами
			const columns = document.querySelectorAll('.doctors__item');

			columns.forEach(column => {
				const reviews = column.querySelectorAll('.item-doctors-sm');

				// Фильтруем все элементы, у которых нет класса 'visible'
				const hiddenReviews = Array.from(reviews).filter(review => !review.classList.contains('visible'));

				// Добавляем класс 'visible' к следующим двум скрытым элементам
				for (let i = 0; i < 2; i++) {
					if (hiddenReviews[i]) {
						hiddenReviews[i].classList.add('visible');
					}
				}

				// Если скрытых отзывов меньше двух, скрываем кнопку
				if (hiddenReviews.length <= 2) {
					this.style.display = 'none';
				}
			});
		});
	}
	*/
});