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

	/* 마이메뉴 수신설정 슬라이드토글 */
	$(".my_toggle").click(function(){
		$(".my_recep").slideToggle(200);
	});

	/******************** 서브리스트 ********************/
	/* 서브필터 드롭다운 */
	$(".drop_btn_more").click(function(){
		$("#bg_modal").fadeToggle(200);
		$("#filter_drop").slideToggle(200);
		$(".filter_drop_a").toggleClass("filter_drop_fade");
	});
		/* 서브필터 배경 click시 메뉴 슬라이드업 */
		$("#bg_modal").click(function(e){
			if(!$("#filter_drop").has(e.target).length){
				$("#bg_modal").fadeOut(200);
				$("#filter_drop").slideUp(200);
				$(".filter_drop_a").removeClass("filter_drop_fade");
			}
		});

	/* 검색 리스트 없음 */
	function sub_none_height(){
		var window_height =$(window).height();
		var sub_list_none_height = (window_height - 255) / 2 - 70 + "px"
		$(".sub_list_none").css("margin-top", sub_list_none_height);
	}
	$(window).on("load",sub_none_height);

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

	/* 연락글 선택 라디오버튼 */
	$(".pop_td input[type='radio']").click(function(){
		var contact_idx = $(this).index(".pop_td input[type='radio']");
		contact_idx++;
		$(".pop_td .btn_white").css("background","#fff url(http://image.club5678.com/imgs/ilheayo_job/img01/ico_chk_off.png) no-repeat center center").css("background-size","16px 12px");
		$(".pop_tr").eq(contact_idx).find(".btn_white").css("background","#fff url(http://image.club5678.com/imgs/ilheayo_job/img01/ico_chk_on.png) no-repeat center center").css("background-size","16px 12px");
	});

	/* 신고사유 선택 라디오버튼 */
	$(".report_slct li input[type=radio]").click(function(){
		var report_idx = $(this).index(".report_slct li input[type=radio");
		$(".report_slct li .slct_check").removeClass("slct_checked");
		$(".report_slct li").eq(report_idx).find(".slct_check").addClass("slct_checked");
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

	/* 문의 구분 네비 */
	$("#tab_nav ul li").click(function(){
		if($(this).hasClass("slider")){
			return;
		}
		var tab_idx = $(this).index("#tab_nav ul li");
		if(tab_idx == 0){
			$(".slider").css("left","0");
		}
		if(tab_idx == 1){
			$(".slider").css("left","50%");
		}
		$(".tab_content").css("display","none");
		$(".tab_content").eq(tab_idx).css("display","block");
	});

	/* 나의 문의내역 없음 */
	function none_height(){
		var window_height =$(window).height();
		var list_none_height = (window_height - 145) / 2 - 70 + "px"
		$(".list_none").css("margin-top", list_none_height);
		//검색어 결과 없음
		$(".result_none").css("margin-top", list_none_height);
	}
	$(window).on("load",none_height);

	/* 나의 문의내역 오픈 */
	$(".qu_list ul li").click(function(){
		var qu_open = $(this).find(".qu_open");
		var qu_my = $(this).find(".qu_my");
		var qu_manager = $(this).find(".qu_manager");
		$(qu_open).toggleClass("qu_clse");
		$(qu_my).slideToggle(200);
		$(qu_manager).slideToggle(200);
	});

	/* 공지사항 오픈 */
	$(".notice_list ul li").click(function(){
		var qu_open = $(this).find(".qu_open");
		var notice_txt = $(this).find(".notice_txt");
		$(qu_open).toggleClass("qu_clse");
		$(notice_txt).slideToggle(200);
	});

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

	function info_list1_width(){
		var window_width =$(window).width();
		var info_list1_width = window_width + "px"
		$(".info_list1").css("width",info_list1_width);
	}
	$(window).on("load",info_list1_width);
	$(window).on("resize",info_list1_width);

});
