// Підключення функціоналу "Чертоги Фрілансера"
import { bodyLockStatus, bodyLockToggle, isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

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