$(document).ready(function() {
	var sub = $("#sub");
	var activeRow;
	var activeMenu;

	$("#test")
		//鼠标进入所有区域，二级菜单显现
		.on("mouseenter", function(e) {
			sub.removeClass("none");
		})
		//鼠标离开所有区域，二级菜单隐藏
	$("#test").on("mouseleave", function(e) {
		sub.addClass("none")
		if(activeRow) {
			activeRow.removeClass("active");
			activeRow = null;
		}
		if(activeMenu) {
			activeMenu.addClass("none");
			activeMenu = null;
		}
	})
	$("#test").on("mouseenter", "li", function(e) {
		//		不存在进入
		if(!activeRow) {
			activeRow = $(e.target).addClass("active");
			activeMenu = $("#" + activeRow.data("id"));
			console.dir(activeMenu);
			activeMenu.removeClass("none");
			return;
		}
		activeRow.removeClass("active");
		activeMenu.addClass("none");
		activeRow = $(e.target);
		activeRow.addClass('active');
		activeMenu = $("#" + activeRow.data("id"))
		activeMenu.removeClass("none");
	})
})