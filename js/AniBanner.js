// JavaScript Document
(function ()
{	
	$.fn.aniBanner = function()
	{
		this.each(function()
		{
			var $this = $(this);
			var aryImgs = $("#bannerImages").find("img");
			
			$($this).append("<img src='" + $(aryImgs).eq(0).attr("src") +"' class='topImg'/>");
			$($this).append("<img src='" + $(aryImgs).eq(1).attr("src") +"' class='bottomImg'/>");
			$(aryImgs).eq(1).next().addClass("nextImg");
			
			rotator = setInterval(function(){animateImages($this,aryImgs)},3000);
		});
	};
	animateImages = function($this,aryImgs)
	{
		var bottomImg = $(".bottomImg").attr("src");
		var nextImg = $(".nextImg").attr("src");
		var next = $("#bannerImages img.nextImg").next();
		
		if(next.length == 0)
		{
			$("#bannerImages").find("img").eq(0).addClass("nextImg");
		}
		else
		{
			$("#bannerImages img.nextImg").removeClass("nextImg").next().addClass("nextImg");
		}
		
		$($this).find(".topImg").animate({opacity:0},function()
		{
			$(".topImg").attr("src",bottomImg).animate({opacity:1},100,function()
			{
				$(".bottomImg").attr("src",nextImg);
			});
		});
	};
})(jQuery);

$(document).ready(function()
{
    $("#banner").aniBanner();
});