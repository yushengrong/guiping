// lanrenzhijia.djgp

$(function(){

	$("img[original]").lazyload({ placeholder:"car/color3.gif" });
	
	$('.demo1').Tabs();
	$('.demo2').Tabs({
		event:'click'
	});
	$('.demo3').Tabs({
		timeout:300
	});
	$('.demo4').Tabs({
		auto:3000
	});
	$('.demo5').Tabs({
		event:'click',
		callback:lazyloadForPart
	});
	//部分区域图片延迟加载
	function lazyloadForPart(container) {
		container.find('img').each(function () {
			var original = $(this).attr("original");
			if (original) {
				$(this).attr('src', original).removeAttr('original');
			}
		});
	}
});	