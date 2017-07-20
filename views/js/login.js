//hover二维码滑出qr_help
$('#qr_code div:eq(0)').animate({
    left: '20px'
}, 'fast')
$('#qr_code div:eq(1)').css('display', 'inline-block')

setTimeout(function () {
    $('#qr_code div:eq(0)').animate({
        left: '95px'
    }, 'fast')
    $('#qr_code div:eq(1)').fadeOut(0)
}, '1000')

$('#qr_code div:eq(0)').hover(function () {
    $(this).stop()
    $(this).animate({
        left: '20px'
    }, '500')
    $('#qr_help').css('display', 'inline-block')
}, function () {
    $(this).stop()
    $('#qr_help').css('display', 'none')
    $(this).animate({
        left: '95px'
    }, '500')
})

$('#title span').click(function () {
    var index = $(this).index()
    $(this).css('color','#b61d1d')
    $(this).siblings().css('color','#666')
    $('.inner').eq(index).css('display','block')
    $('.inner').eq(index).siblings('section').css('display','none')
})
