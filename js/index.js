$("#l1").click(function(){
    $(".box2").removeClass("active")
    $(".l1").addClass("active")
    $("#l1").css({"background-image":"url(./img/w1.png)"})
    $("#l2").css({"background-image":"url(./img/a2.png)"})
    $("#l3").css({"background-image":"url(./img/x2.png)"})
})
$("#l2").click(function(){
    $(".box2").removeClass("active")
    $(".l2").addClass("active")
    $("#l1").css({"background-image":"url(./img/w2.png)"})
    $("#l2").css({"background-image":"url(./img/a1.png)"})
    $("#l3").css({"background-image":"url(./img/x2.png)"})
})
$("#l3").click(function(){
    $(".box2").removeClass("active")
    $(".l3").addClass("active")
    $("#l1").css({"background-image":"url(./img/w2.png)"})
    $("#l2").css({"background-image":"url(./img/a2.png)"})
    $("#l3").css({"background-image":"url(./img/x1.png)"})
})