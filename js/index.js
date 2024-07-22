const header = document.querySelector(".header");

function headerActive(element) {
	element.style.backgroundColor = "#fff";

	element.querySelector(".header__container-logo-bg").style.backgroundImage =
		"url(../img/Ford-logo.svg)";

	element
		.querySelectorAll(".header__container-navs-wrap-link")
		.forEach((el) => (el.style.color = "#260da5"));

	element.querySelector(
		".header__container-icon-links-wrap-icon.account span"
	).style.backgroundImage = "url(../img/account-outline.svg)";

	element.querySelector(
		".header__container-icon-links-wrap-icon.global span"
	).style.backgroundImage = "url(../img/globe.svg)";

	element.querySelector(
		".header__container-icon-links-wrap-icon.search span"
	).style.backgroundImage = "url(../img/search.svg)";
}

function headerRemoveActive(element) {
	element.style.backgroundColor = "";
	element.querySelector(".header__container-logo-bg").style.backgroundImage =
		"url(../img/Ford-logo-white.svg)";
	// element.style.backgroundImage = "url(../img/Ford-logo.svg)";

	element
		.querySelectorAll(".header__container-navs-wrap-link")
		.forEach((el) => (el.style.color = "#fff"));

	element.querySelector(
		".header__container-icon-links-wrap-icon.account span"
	).style.backgroundImage = "url(../img/account-outline-white.svg)";

	element.querySelector(
		".header__container-icon-links-wrap-icon.global span"
	).style.backgroundImage = "url(../img/globe-white.svg)";

	element.querySelector(
		".header__container-icon-links-wrap-icon.search span"
	).style.backgroundImage = "url(../img/search-white.svg)";
}

header.addEventListener("click", function (e) {
	const btnNav = e.target.closest(".header__container-navs-wrap-link");
	const btnIcon = e.target.closest(".header__container-icon-links-wrap-icon");

	if (!btnNav && !btnIcon) return;
	if (btnNav) {
		// headerActive(e.currentTarget);
		e.currentTarget
			.querySelectorAll(".header__container-icon-links-wrap-sub")
			.forEach((el) => {
				el.classList.remove("show");
			});

		const dataNav = btnNav.dataset.id;

		const headerNavLinks = e.currentTarget.querySelectorAll(
			".header__container-navs-wrap-link"
		);

		const headerSublinks = e.currentTarget.querySelectorAll(
			".header__container-navs-wrap-sublinks"
		);

		headerNavLinks.forEach((el) => {
			if (el.dataset.id !== dataNav || el.classList.contains("active")) {
				el.classList.remove("active");
			} else {
				el.classList.add("active");
			}
		});

		headerSublinks.forEach((el) => {
			if (el.id !== dataNav || el.classList.contains("show"))
				el.classList.remove("show");
			else el.classList.add("show");
		});
	}

	if (btnIcon) {
		e.currentTarget
			.querySelectorAll(".header__container-navs-wrap-sublinks")
			.forEach((el) => {
				el.classList.remove("show");
			});

		const dataIcon = btnIcon.dataset.id;

		e.currentTarget
			.querySelectorAll(".header__container-icon-links-wrap-icon")
			.forEach((el) => {
				console.log(el);
				if (el.classList.contains("search")) {
					return;
				} else if (
					el.dataset.id !== dataIcon ||
					el.classList.contains("active")
				) {
					el.classList.remove("active");
				} else {
					el.classList.add("active");
				}
			});

		e.currentTarget
			.querySelectorAll(".header__container-icon-links-wrap-sub")
			.forEach((el) => {
				if (el.id !== dataIcon || el.classList.contains("show"))
					el.classList.remove("show");
				else el.classList.add("show");
			});
	}
});

header.addEventListener("mouseover", function (e) {
	headerActive(e.currentTarget);
});

header.addEventListener("mouseout", function (e) {
	let isShow = false;
	e.currentTarget
		.querySelectorAll(".header__container-navs-wrap-sublinks")
		.forEach((el) => {
			if (el.classList.contains("show")) {
				isShow = true;
			}
		});

	e.currentTarget
		.querySelectorAll(".header__container-icon-links-wrap-sub")
		.forEach((el) => {
			if (el.classList.contains("show")) {
				isShow = true;
			}
		});

	if (!isShow) headerRemoveActive(e.currentTarget);
});
