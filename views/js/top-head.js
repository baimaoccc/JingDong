$("#myNetItems").hide();
navHover('#myNetNav','#myNetItems');
navHover('#selectProvice','#showProvice');
navHover('#myCostomServer','#myCustomItems');
navHover('#myNavJD','#myJDitems');
function navHover(munue1_id,munue2_id) {
	$(munue1_id).hover(function() {
		$(munue2_id).show();
	}, function() {
		$(munue2_id).hover(function(){
			$(munue2_id).show();
		},function(){
			$(munue2_id).hide();
		})
		$(munue2_id).hide();
	});
}