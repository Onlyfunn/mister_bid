$(document).ready(function () {
	$('.spoiler__header').click(function (event) {
		$(this).toggleClass('active').next().slideToggle(300)
		$(this).children().last().toggleClass('active')
	})
})
