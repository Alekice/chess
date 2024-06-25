const scrollers = document.querySelectorAll('.running-line');

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
	addAnimation(scrollers);
}

function addAnimation(scrollers) {
	scrollers.forEach((scroller) => {
		scroller.setAttribute("data-animated", true);

		duplicateScrollItems(scroller);
	});
}

function duplicateScrollItems(scroller) {
	const scrollerInner = scroller.querySelector(".running-line__inner");
	const scrollerContent = Array.from(scrollerInner.children);

	scrollerContent.forEach((item) => {
		const duplicatedItem = item.cloneNode(true);
		duplicatedItem.setAttribute("aria-hidden", true);
		scrollerInner.appendChild(duplicatedItem);
	});
}