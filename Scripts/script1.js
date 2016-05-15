$(document).ready(
	function (){
		$(".twitter").mouseenter(function(){
			$(".twitter").css({
				width: "200px",
				height: "200px"
			})
			$(".twitter a img").css({
				width: "200px",
				height: "200px"
			})
		})
		$(".twitter").mouseleave(function(){
			$(".twitter").css({
				width: "100px",
				height: "100px"
			})
			$(".twitter a img").css({
				width: "100px",
				height: "100px"
			})
		})
	}
/*	function (){
		$(".insta").mouseenter(function(){
			$(".insta").css({
				width: "200px",
				height: "200px"
			})
		})
		$(".insta").mouseleave(function(){
			$(".insta").css({
				width: "100px",
				height: "100px"
			})
		})
	}
	function (){
		$(".facebook").mouseenter(function(){
			$(".facebook").css({
				width: "200px",
				height: "200px"
			})
		})
		$(".facebook").mouseleave(function(){
			$(".facebook").css({
				width: "100px",
				height: "100px"
			})
		})
	}*/
);
