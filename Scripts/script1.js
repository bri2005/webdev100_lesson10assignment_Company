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
	//}
	//function (){
		$(".insta").mouseenter(function(){
			$(".insta").css({
				width: "200px",
				height: "200px"
			})
			$(".insta a img").css({
				width: "200px",
				height: "200px"
			})
		})
		$(".insta").mouseleave(function(){
			$(".insta").css({
				width: "100px",
				height: "100px"
			})
			$(".insta a img").css({
				width: "100px",
				height: "100px"
			})
		})
	//}
	//	function (){
		$(".facebook").mouseenter(function(){
			$(".facebook").css({
				width: "200px",
				height: "200px"
			})
			$(".facebook a img").css({
				width: "200px",
				height: "200px"
			})
		})
		$(".facebook").mouseleave(function(){
			$(".facebook").css({
				width: "100px",
				height: "100px"
			})
			$(".facebook a img").css({
				width: "100px",
				height: "100px"
			})
		})

		$(".quantity-form").submit(function(event){
			event.preventDefault();
			quantity = $(".quantity", this).val(); 
			total = (quantity * 15).toFixed(2);
			$(".total", this).html("$" + total);
		})
		$(".payus").click(function(event){
			alert("Thank you for your purchase!")
		})
		$(".signup").click(function(event){
			$(".newsletter").val("");
			alert("Thank you for signing up!")

		})
		
			
		
	}
);
