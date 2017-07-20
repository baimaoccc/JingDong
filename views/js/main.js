var currentLunbo = 1;
var maxLunbo = 8;
$(function() {
	liHover();
	lunbo();
	changeAdvice();
	changeChooseBar();

	runLeftTime();
	popTop();
	xiaolunbo();

	main_4_body_left();
	main_4_body_middle();
	main_4_body_middle_operation();
	
	main_4_right_a_hover();
})

function main_4_right_a_hover(){
	$(".main_4_nav a").hover(function() {
		var index = $(this).index();
		$(".main_4_nav a").removeClass("navbar_active");
		$(this).addClass("navbar_active");
		console.log($(".main_4_right_item"));
		$(".main_4_right_item").hide();
		$(".main_4_right_item").eq(index).show();
		
	}, function() {

	})
}

function runLeftTime() {
	var endTime = new Date();
	endTime.setHours(18, 0, 0);
	var endTimeSecond = endTime.getTime();

	var currentTime = new Date();
	if(endTimeSecond < currentTime.getTime()) {
		endTime.setDate(endTime.getDate() + 1);
		endTimeSecond = endTime.getTime();
		console.log(endTime);
	}
	test();

	var timer = setInterval(test, 1000);

	function test() {
		var current = new Date().getTime();
		var subTime = endTimeSecond - current;

		if(subTime <= 0) {
			clearInterval(timer);
			return;
		}
		subTime /= 1000;
		var hours = subTime / 3600;
		subTime %= 3600;
		hours = Math.floor(hours);

		var minutes = subTime / 60;
		subTime %= 60;
		minutes = Math.floor(minutes);

		var seconds = subTime;
		seconds = Math.floor(seconds);

		$("#hour").html(hours >= 10 ? hours : "0" + hours);
		$("#minute").html(minutes >= 10 ? minutes : "0" + minutes);
		$("#second").html(seconds >= 10 ? seconds : "0" + seconds);

	}
}

function main_4_body_middle_operation() {
	console.log("111");
	$(".main_4_body").hover(function() {
		$(".main_4_body>span").show();
	}, function() {
		$(".main_4_body>span").hide();
	})
}

function main_4_body_middle() {
	$(".main_4_body .circlebar span").eq(0).addClass("circleActive");
	var currentItem = 1;
	var maxItem = 3;
	$(".main_4_body .main_4_next").click(function() {
		currentItem++;
		if(currentItem > maxItem) {
			currentItem = 1;
		}
		$(".main_4_body .circlebar span").eq(currentItem - 1).siblings().removeClass("circleActive");
		$(".main_4_body .circlebar span").eq(currentItem - 1).addClass("circleActive");
		$(".main_4_body .main_4_body_item").eq(currentItem - 1).show();
		$(".main_4_body .main_4_body_item").eq(currentItem - 1).siblings(".main_4_body .main_4_body_item").hide();
	});
	$(".main_4_body .main_4_prev").click(function() {
		currentItem--;
		if(currentItem <= 0) {
			currentItem = 3;
		}
		$(".main_4_body .circlebar span").eq(currentItem - 1).siblings().removeClass("circleActive");
		$(".main_4_body .circlebar span").eq(currentItem - 1).addClass("circleActive");
		$(".main_4_body .main_4_body_item").eq(currentItem - 1).show();
		$(".main_4_body .main_4_body_item").eq(currentItem - 1).siblings(".main_4_body .main_4_body_item").hide();
	})
	$(".main_4_body .circlebar span").hover(function() {
		var index = $(this).index();
		currentLunbo = index + 1;
		$(this).siblings().removeClass("circleActive");
		$(this).addClass("circleActive");
		$(".main_4_body .main_4_body_item").eq(index).show();
		$(".main_4_body .main_4_body_item").eq(index).siblings(".main_4_body .main_4_body_item").hide();
	}, function() {

	})
}

function main_4_body_left() {
	$(".main_4_body ul li").hover(function() {
		var img = $(this).children("img");
		img.stop();
		img.animate({
			right: "18px"
		}, 200);
	}, function() {
		var img = $(this).children("img");
		img.stop();
		img.animate({
			right: "10px"
		}, 200);
	})
}

//小轮播图
function xiaolunbo() {
	$("xiaolunbo .circlebar span").eq(0).addClass("circleActive");
	$(".xiaolunbo .circlebar span").hover(function() {
		var index = $(this).index();
		currentLunbo = index + 1;
		$(this).siblings().removeClass("circleActive");
		$(this).addClass("circleActive");
		$(".xiaolunbo img").attr("src", "img/first/xiaolunbo" + (index + 1) + ".jpg");
	}, function() {

	})
}

//图片往上跳
function popTop() {
	$(".main_3_body ul li").hover(function() {
		var index = $(this).index();
		var img = $(".main_3_body .imgItem img").eq(index);
		img.stop();
		img.animate({
			marginTop: "-10px"
		}, 300);
	}, function() {
		var index = $(this).index();

		var img = $(".main_3_body .imgItem img").eq(index);
		img.stop();
		img.animate({
			marginTop: "0px"
		}, 300);
	})
}

function changeChooseBar() {
	$(".main_2_right3_head a").eq(0).addClass("main2_right3_active");
	$(".main_2_right3_head a").hover(function() {
		var index = $(this).index();
		console.log(index);
		$(this).siblings().removeClass("main2_right3_active");
		$(this).addClass("main2_right3_active");
		$(".main_2_right3_body .main_2_right3_item").eq(index).show().siblings().hide();
		//$(".main_2_right3_body .main_2_right3_item").eq(index)
	}, function() {

	})
}
//改变main_2_right2_head 下的a标签hover
function changeAdvice() {
	$(".main_2_right2_head a").eq(0).addClass("aActive");
	$(".main_2_right2_head a").eq(0).hover(function() {
		$(this).siblings().removeClass("aActive");
		$(this).addClass("aActive");
		$(".main_2_right2_body").eq(0).show();
		$(".main_2_right2_body").eq(1).hide();
	}, function() {})
	$(".main_2_right2_head a").eq(1).hover(function() {
		$(this).siblings().removeClass("aActive");
		$(this).addClass("aActive");
		$(".main_2_right2_body").eq(1).show();
		$(".main_2_right2_body").eq(0).hide();
	}, function() {

	})
}

function liHover() {
	var lis = document.querySelectorAll(".navbar li");
	var itemdetails = document.querySelectorAll(".navbar li .item_detail");
	for(var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].addEventListener("mouseover", function() {
			itemdetails[this.index].style.display = "block";
		});
		lis[i].addEventListener("mouseleave", function() {
			itemdetails[this.index].style.display = "none";
		});
	}
}

function lunbo() {
	var lunboTimer;
	$(".main_2_left1").hover(function() {
		clearInterval(lunboTimer);
		$(".prev").css("display", "block");
		$(".next").css("display", "block");
	}, function() {
		$(".prev").css("display", "none");
		$(".next").css("display", "none");
		lunboTimer = setInterval(next, 2500);
	})

	$(".next").click(function() {
		currentLunbo++;
		if(currentLunbo > maxLunbo) {
			currentLunbo = 1;
		}
		$(".circlebar span").eq(currentLunbo - 1).siblings().removeClass("circleActive");
		$(".circlebar span").eq(currentLunbo - 1).addClass("circleActive");
		$("#lunboimg").attr("src", "img/first/lunbo-img" + currentLunbo + ".jpg");
	})

	$(".prev").click(function() {
		currentLunbo--;
		if(currentLunbo <= 0) {
			currentLunbo = maxLunbo;
		}
		$("..circlebar span").eq(currentLunbo - 1).siblings().removeClass("circleActive");
		$(".circlebar span").eq(currentLunbo - 1).addClass("circleActive");
		$("#lunboimg").attr("src", "img/first/lunbo-img" + currentLunbo + ".jpg");
	})

	lunboTimer = setInterval(next, 2500);

	function next() {
		$(".next").click();
	}

	$(".main_2_left1 .circlebar span").hover(function() {

		console.log($(this));
		var index = $(this).index();
		currentLunbo = index + 1;
		$(this).siblings().removeClass("circleActive");
		$(this).addClass("circleActive");
		$("#lunboimg").attr("src", "img/first/lunbo-img" + (index + 1) + ".jpg");
	}, function() {

	})
}