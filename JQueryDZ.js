
 $(".twobtn").click(function(){
     $(".two").addClass("active")
 })

 $(".twoobtn").click(function(){
    $(".active").removeClass("active")
})

$(".twoo").addClass("active")

$(".twooobtn").click(function(){
    $(".twooo").toggleClass("active")
})

$('.vstavv').keypress(function(){
    $('.vstav').text($(this).val())
})

$(".perBtn").click(function(){
    $(".d2").text($(".forperBtn").val())
})

$(".twooobtnPr").click(function(){
    $(".twooo").hasClass("active")
})

$(".btn7").click(function(){
    $('.zd7').css({
        'background': 'red'
    })
})


$(".btn77").click(function(){
    $('.zd77').css({
        'background': 'green'
    })
})

$(".btn777").click(function(){
    $('.zd777').css({
        'background': 'chocolate'
    })
})

$(".dob").click(function(){
    $('.zd888').css({
        'background': 'chocolate'
    })
})

