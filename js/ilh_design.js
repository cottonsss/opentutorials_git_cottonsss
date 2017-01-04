// JavaScript Document
$(document).ready(function(){
	/******************** 공통 ********************/
	/* 기본 체크박스 */
	$(".chk").click(function(){
		var pre_label = $(this).prev("label");
		var next_label = $(this).next("label");
		if($(this).prop("checked")){
			$(pre_label).css("background","url('http://image.club5678.com/imgs/ilheayo_job/img_login/btn_chk1_on.png') 0 50% no-repeat").css("background-size","19px 19px");
			$(next_label).css("background","url('http://image.club5678.com/imgs/ilheayo_job/img_login/btn_chk1_on.png') 0 50% no-repeat").css("background-size","19px 19px");
		} else {
			$(pre_label).css("background","url('http://image.club5678.com/imgs/ilheayo_job/img_login/btn_chk1_off.png') 0 50% no-repeat").css("background-size","19px 19px");
			$(next_label).css("background","url('http://image.club5678.com/imgs/ilheayo_job/img_login/btn_chk1_off.png') 0 50% no-repeat").css("background-size","19px 19px");
		}
	});

	/* 스위치 체크박스 */
	$(".chk_wrap").click(function(){
		var chk_input = $(this).find("input[type='checkbox']");
		var chk_switch = $(this).find(".chk_switch");
		var chk_handle = $(this).find(".chk_handle");
		var chk_off = $(this).find(".chk_off");
		var chk_on = $(this).find(".chk_on");
		if($(chk_input).prop("checked")){
			$(chk_switch).css("background-color","#04d464");
			$(chk_handle).css("left","25px");
			$(chk_off).css("opacity","0");
			$(chk_on).css("opacity","1");
		} else {
			$(chk_switch).css("background-color","#c3c3c3");
			$(chk_handle).css("left","0px");
			$(chk_on).css("opacity","0");
			$(chk_off).css("opacity","1");
		}
	});

	/******************** 메인리스트 ********************/
	/* 메인 더보기 드롭다운 */
	$(".nav_btn_more").click(function(){
		$("#main_bg_modal").fadeToggle(200);
		$("#gnb_drop").slideToggle(200);
		$(".drop_nav_a").toggleClass("drop_nav_fade");
	});
		/* 드롭메뉴 닫기 click시 메뉴 슬라이드업*/
		$(".drop_nav_l").eq(6).click(function(){
			$("#main_bg_modal").fadeOut(200);
			$("#gnb_drop").slideUp(200);
			$(".drop_nav_a").removeClass("drop_nav_fade");
		});
		/* 드롭메뉴 배경 click시 메뉴 슬라이드업 */
		$("#main_bg_modal").click(function(e){
			if(!$("#gnb_drop").has(e.target).length){
				$("#main_bg_modal").fadeOut(200);
				$("#gnb_drop").slideUp(200);
				$(".drop_nav_a").removeClass("drop_nav_fade");
			}
		});

	/* 메인 네비 픽스 */
	function nav_fixed(){
		var window_top_position = $(window).scrollTop();
		console.log(window_top_position);
		if(window_top_position >= 82){
			$("#gnb").css("position","fixed").css("top","0px");
			$("#gnb_drop").css("position","fixed").css("top","35px");
			$("#main_bg_modal").css("position","fixed").css("top","35px");
		} else {
			$("#gnb").css("position","absolute").css("top","81px");
			$("#gnb_drop").css("position","absolute").css("top","116px");
			$("#main_bg_modal").css("position","absolute").css("top","116px");
		}
	}
	$(window).on("scroll resize",nav_fixed);

	/******************** 서브리스트 ********************/
	/* 서브필터 드롭다운 */
	$(".drop_btn_more").click(function(){
		$("#bg_modal").fadeToggle(200);
		$("#filter_drop").slideToggle(200);
		$(".filter_drop_a").toggleClass("filter_drop_fade");
	});
		/* 서브필터 배경 click시 메뉴 슬라이드업 */
		$("#bg_modal").click(function(e){
			if(!$(".filter_drop").has(e.target).length){
				$("#bg_modal").fadeOut(200);
				$("#filter_drop").slideUp(200);
				$(".filter_drop_a").removeClass("filter_drop_fade");
			}
		});

	/******************** 팝업 ********************/
	/* 팝업 지역 선택시 */
	$(".location_slct .pop_first ul li").click(function(){
		$(".location_slct .pop_first ul li a").removeClass("slct_active");
		$(".loca").css("display","none")
		var first_idx = $(this).index();
		if(first_idx == 0){
			$(this).find("a").addClass("slct_active");
			return;
		}
		var first_idx = first_idx - 1;
		$(this).find("a").addClass("slct_active");
		$(".loca").eq(first_idx).css("display","block")
	});

	/* 팝업 분야 선택시 */
	$(".field_slct .pop_first ul li").click(function(){
		$(".field_slct .pop_first ul li a").removeClass("slct_active");
		$(".field").css("display","none")
		var first_idx = $(this).index();
		if(first_idx == 0){
			$(this).find("a").addClass("slct_active");
			return;
		}
		var first_idx = first_idx - 1;
		$(this).find("a").addClass("slct_active");
		$(".field").eq(first_idx).css("display","block")
	});

	/* 팝업 상세 선택시 */
	$(".pop_second ul li").click(function(){
		$(this).find("a").addClass("slct_active");
	});

	/******************** 상세페이지 ********************/
	/* 상세페이지 스크랩 버튼 */
	$("#dt_top_wrap .scrap a").click(function(){
		$(this).toggleClass("scrap_active");
	});

	/******************** 글쓰기 ********************/
	/* 글쓰기 긴급구인 레이어 */
	$(".help_btn").click(function(){
		$(".help_layer").toggleClass("help_layer_fade");
	});

	/******************** 마이메뉴 ********************/
	/* 스크랩 fix_bar 높이 */
	function scrap(){
		var window_height =$(window).height();
		var scrap_height = $(".scrap_wrap").height();
		if(window_height > scrap_height){
			var bar_height = window_height - 141 + "px"
			$(".fix_bar").css("height", bar_height);
		}
	}
	$(window).on("load",scrap);

	/* 스크랩 삭제 */
	$(".btn_closed").click(function(){
		//애니 추가
		var this_ul = $(this).parent("ul");
		$(this_ul).addClass("close_u");
		setTimeout(function(){
			$(this_ul).css("display","none");
		},400);
		//날짜 삭제
		setTimeout(function(){
			var this_day = $(this_ul).parent(".content_scrap_day");
			var day_height = $(this_day).height();
			if(day_height == 12){
				$(this_day).css("display","none");
			}
		},400);
		//fix_bar 높이 재조정
		setTimeout(function(){
			var window_height =$(window).height();
			var scrap_height = $(".scrap_wrap").height();
			if(window_height > scrap_height){
				var bar_height = window_height - 145 + "px"
				$(".fix_bar").css("height", bar_height);
			}
		},410);
	})

	/******************** 지도 ********************/
	$(".customoverlay").click(function(){
		$("#container").fadeToggle(200);
		$(".box_all_info").slideToggle(200);
	});

		$(".choice_info_1 a").click(function(){
			$("#container").fadeOut(200);
			$(".box_all_info").slideUp(200);
		});

		$("#container").click(function(e){
			if(!$(".box_all_info").has(e.target).length){
				$("#container").fadeOut(200);
				$(".box_all_info").slideUp(200);
			}
		});
});
