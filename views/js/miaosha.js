$("body").css("width", $(window).width());
navHover('#myNetNav', '#myNetItems');
navHover('#selectProvice', '#showProvice');
navHover('#myCostomServer', '#myCustomItems');
navHover('#myNavJD', '#myJDitems');
navHover('#sort-div', '.down-div-sort');

function navHover(munue1_id, munue2_id) {
	$(munue1_id).hover(function() {
		$(munue2_id).show();
	}, function() {
		$(munue2_id).hover(function() {
			$(munue2_id).show();
		}, function() {
			$(munue2_id).hide();
		})
		$(munue2_id).hide();
	});
}

$("#moreSort").hover(function() {
	$(".down-more-sort").css("display", "block");
	$(".down-more-sort").animate({
		top: "50px"
	}, 500);
}, function() {
	$(".down-more-sort").hover(function() {
		$(".down-more-sort").show();
	}, function(){
		$(".down-more-sort").hide();
		$(".down-more-sort").css('top', "150px");
	})
	$(".down-more-sort").hide();
	$(".down-more-sort").css('top', "150px");
});

/*滚动监听改变导航样式
 */
var styleSheet = document.styleSheets[1];
var RuleSeloterBefore = styleSheet.cssRules[14].selectorText;
var RuleSeloterAfter = styleSheet.cssRules[15].selectorText;
var timeDownRuleBefore = styleSheet.cssRules[14].cssText;
var timeDownRuleAfter = styleSheet.cssRules[15].cssText;
var iSanimated = false;
$(window).scroll(function() {
	if($(this).scrollTop() >= 150) {
		$("#fixedNavContentBorder").css({
			'position': 'fixed',
			'top': '0',
			'left': '0',
			'z-index': '100'
		});
	} else {
		$("#fixedNavContentBorder").css({
			'position': 'relative'
		});
	}
	if($(this).scrollTop() >= 242) {
		if(styleSheet.cssRules[14].selectorText == RuleSeloterBefore) {
			console.log("删除14")
			styleSheet.deleteRule(14)
		}
		if(styleSheet.cssRules[14].selectorText == RuleSeloterAfter) {
			console.log("删除15")
			styleSheet.deleteRule(14)
		}
		$(".timeline_list").css({
			"position": " fixed",
			"top": "46px",
			'margin-left': "0px",
			'background-color': 'white'
		});
		var timeline_list_left = ($(this).scrollTop() - 242) / 50 * 42;
		if(timeline_list_left > 41) {
			timeline_list_left = 41;
		}
		$(".timeline_list").css('margin-left', timeline_list_left + "px").addClass("timeline-boxshow");
	} else {
		$(".timeline_list").css({
			"position": "static",
			"left": 0,
			"top": "46px",
			"margin-left": "60px"
		}).removeClass("timeline-boxshow");
		if(styleSheet.cssRules[14].selectorText != RuleSeloterBefore) {
			styleSheet.insertRule(timeDownRuleBefore, 14);
		}
		if(styleSheet.cssRules[15].selectorText != RuleSeloterAfter) {
			styleSheet.insertRule(timeDownRuleAfter, 15);
		}
	};
});