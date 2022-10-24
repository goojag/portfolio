$(function(){
    // ICON ADDCLASS ANIMATE
	var loops = 1;
	function removeAddClass() {
		$('.skills-icon .icon').toggleClass('rotate');
		if (loops > 0){
			 setTimeout(removeAddClass,1000);
			 loops = loops + 1;
		}
	}
	var count_val = parseInt($('.count-item').text());
	if(count_val > 0 || count_val != ''){
		removeAddClass();
	}
});