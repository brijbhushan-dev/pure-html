$(document).ready(function () {

	// fixed_header js Start
	window.addEventListener("scroll", function () {
		// let header = document.getElementById("header");
		// let headerTop = document.getElementById("header_top").offsetHeight;

		if (window.scrollY >= 1) {
			header.classList.add("fixed_header");
		} else {
			header.classList.remove("fixed_header");
		}
	});
	// fixed_header js End



	// main_navigation js Start
	$(".main_navigation li").has(".custom_dropdown").addClass("dsk_arrow");
	$(".main_navigation li").has(".custom_dropdown").append("<div class='arrow'></div>");

	$(".menu_icon").click(function () {
		$(".header_mid").toggleClass("show");
		$(this).toggleClass("active");
		$(".custom_dropdown").removeClass("slide");
		// $(".programs_wrap .programs_content ").removeClass("show");
		if ($(this).hasClass("active")) {
			$("body").addClass("no_scroll");
			$(".header").addClass("white");
		} else {
			$("body").removeClass("no_scroll");
			$(".header").removeClass("white");
		}
	});

	$(".main_navigation li.dsk_arrow a").click(function () {
		$(this).siblings(".custom_dropdown").addClass("slide");
	});

	$(".main_navigation .dsk_arrow .backmenu").click(function () {
		$(this).closest(".custom_dropdown").removeClass("slide");
	});

	$(".header .dropdown_btn").click(function () {
		$(".menu_icon").removeClass("active");
		$(".header_mid").removeClass("show");
		$(".custom_dropdown").removeClass("slide");
	});


	$(".header .dropdown_btn").click(function () {
		if ($(this).hasClass("show")) {
			$("body").addClass("no_scroll");
			$(".header").addClass("white");
		} else {
			$("body").removeClass("no_scroll");
			$(".header").removeClass("white");
		}
	});


	$(".header .input_box button, .header .search_result").click(function () {
		$("body").removeClass("no_scroll");
		$(".header").removeClass("white");
	});

	// main_navigation text copy for mobile Start
	document.querySelectorAll(".main_navigation li").forEach(function (li) {
		var aText = li.querySelector("a")?.innerText;
		var strongTag = li.querySelector(".mbl_div strong");
		if (aText && strongTag) {
			strongTag.innerText = aText;
		}
	});
	// main_navigation text copy for mobile End


	// main_navigation js End


	// accordion js start
	$('.accordion_wrap').find(".accor_tab:first").addClass('active').next().show();
	$(".accor_tab").click(function () {
		$(this).toggleClass("active");
		$(this).siblings(".accor_content").slideToggle();
		$(this).closest(".accordion").siblings(".accordion").find(".accor_tab").removeClass("active");
		$(this).closest(".accordion").siblings(".accordion").find(".accor_content").slideUp();
	});
	// accordion js end



	// Filter js Start  
	$('.filter-input').on('input', function () {
		var filterValue = $(this).val().toLowerCase();
		var $list = $(this).closest(".menu").find('.filterfrom');

		$list.find('.item').each(function () {
			var text = $(this).text().toLowerCase();
			$(this).toggle(text.includes(filterValue));
		});
	});
	// Filter js End

	// Textarea autoheight js Start
	var textareas = document.querySelectorAll(".text_autoheight");
	textareas.forEach(function (textarea) {
		textarea.addEventListener("input", function () {
			this.style.height = "auto";
			this.style.height = (this.scrollHeight) + "px";
		});
		textarea.style.height = (textarea.scrollHeight) + "px";
	});
	// Textarea autoheight js End


	// Textarea charCount js Start
	document.addEventListener('input', function (e) {
		if (e.target.tagName.toLowerCase() === 'textarea') {
			updateCharacterCount(e.target);
		}
	});

	function updateCharacterCount(textarea) {
		const maxLength = parseInt(textarea.getAttribute('maxlength'));
		const textareaId = textarea.id;
		const charCountElement = document.querySelector(`.charCount${textareaId.slice(-1)}`);
		const remaining = maxLength - textarea.value.length;
		charCountElement.textContent = remaining;
		if (remaining < 0) {
			charCountElement.style.color = 'red';
		} else {
			charCountElement.style.color = 'black';
		}
	}
	document.addEventListener('DOMContentLoaded', function () {
		const textareas = document.querySelectorAll('.textarea_inside');
		textareas.forEach((textarea) => {
			updateCharacterCount(textarea);
		});
	});
	// Textarea charCount js End

	// modal_autoclose js Start
	function closeSuccessModal() {
		$('.modal_autoclose').modal('hide');
	}
	$('.modal_autoclose').on('shown.bs.modal', function () {
		setTimeout(closeSuccessModal, 5000);
	});
	// modal_autoclose js End

});

//  bottom to top  //
$(document).scroll(function () {
	var y = $(this).scrollTop();
	if (y > 500) {
		$('.top').fadeIn(700);
	} else {
		$('.top').fadeOut(700);
	}
});




$(window).resize(function () {
	var wwindow = $(window).width();
	if (wwindow >= 1199) {
		$(".dsk_arrow .arrow").removeClass("active");
		$(".menu_icon").removeClass("active");
		$(".header_mid").removeAttr("style");
		$(".header_mid .custom_dropdown").removeAttr("style");
	}
});




// cookies_accept js Start
$(document).ready(function () {

	if (localStorage.getItem("cookies_accept") != null) {
		$("#CookiesBox").removeClass("opencookies_box");
	}

	$("#closeCookies").click(function () {
		localStorage.setItem("cookies_accept", "cookies_set");
		$("#CookiesBox").removeClass("opencookies_box");
	});

	$(".opencookies").click(function () {
		$(".cookiesBlock").addClass("opencookies_box");
	});

	$(".close_allpop").click(function () {
		if (localStorage.getItem("cookies_accept") == null) {
			localStorage.setItem("cookies_accept", "cookies_set");
		}

		$(".cookiesBlock").removeClass("opencookies_box");
	});
});
// cookies_accept js End










