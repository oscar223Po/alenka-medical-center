// Підключення функціоналу "Чертоги Фрілансера"
import { bodyLockStatus, bodyLockToggle, isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

document.addEventListener('DOMContentLoaded', function () {
	// --------------- [ JavaScript Search Window ] ---------------
	if (document.querySelector(".main-header__search-btn") !== null) {
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
	if (timeMasterButtons !== null) {
		timeMasterButtons.forEach(button => {
			button.addEventListener('click', () => {
				// Удаляем класс active у всех кнопок
				timeMasterButtons.forEach(btn => btn.classList.remove('about-main-master__action--active'));
				// Добавляем класс active текущей кнопке
				button.classList.add('about-main-master__action--active');
			});
		});
	}
	// --------------- [ JavaScript Filter Controll ] ---------------
	const expertLinkButtons = document.querySelectorAll('.head-expert__link');
	if (expertLinkButtons !== null) {
		expertLinkButtons.forEach(button => {
			button.addEventListener('click', () => {
				// Удаляем класс active у всех кнопок
				expertLinkButtons.forEach(btn => btn.classList.remove('link-expert-active'));
				// Добавляем класс active текущей кнопке
				button.classList.add('link-expert-active');
			})
		});
	}
	// --------------- [ JavaScript Doctors Show More ] ---------------
	const doctorItems = document.querySelectorAll(".doctors__item");
	const loadMoreBlock = document.querySelector(".doctors__more");
	const loadMoreButton = document.querySelector(".more-doctors__button");
	const hiddenCountSpan = document.querySelector(".more-doctors__label span:nth-child(2)");

	const INITIAL_VISIBLE = 7; // Количество видимых элементов изначально
	const LOAD_MORE_COUNT = 4; // Количество элементов, которые подгружаются

	let visibleCount = INITIAL_VISIBLE;

	if (doctorItems, loadMoreBlock !== null) {
		// Функция для плавного появления элементов
		const fadeIn = (element) => {
			element.style.opacity = 0;
			element.style.display = "";
			const fadeDuration = 300; // Длительность анимации (мс)
			let startTime = null;

			const fade = (timestamp) => {
				if (!startTime) startTime = timestamp;
				const progress = (timestamp - startTime) / fadeDuration;
				element.style.opacity = Math.min(progress, 1);

				if (progress < 1) {
					requestAnimationFrame(fade);
				}
			};

			requestAnimationFrame(fade);
		};
		// Функция для обновления видимости и подсчета скрытых элементов
		const updateVisibility = () => {
			doctorItems.forEach((item, index) => {
				if (index < visibleCount) {
					if (item.style.display === "none") {
						fadeIn(item); // Плавное появление для новых элементов
					} else {
						item.style.display = ""; // Уже видимые элементы
					}
				} else {
					item.style.display = "none"; // Скрываем остальные элементы
				}
			});

			const hiddenCount = Math.max(doctorItems.length - visibleCount, 0);
			hiddenCountSpan.textContent = hiddenCount;

			// Если больше нечего подгружать, скрываем блок полностью
			if (hiddenCount === 0) {
				loadMoreBlock.style.display = "none";
			} else {
				loadMoreBlock.style.display = ""; // Показываем блок с кнопкой
			}
		};
		// Событие клика по кнопке "Подгрузить"
		loadMoreButton.addEventListener("click", () => {
			visibleCount += LOAD_MORE_COUNT;
			updateVisibility();
		});
		// Инициализация видимости при загрузке страницы
		updateVisibility();
	}
});