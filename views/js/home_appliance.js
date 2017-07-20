/**
 * Created by baimao on 2017/6/28.
 */
//二维码的hover
$('#scanCodeBox').hover(function () {
    $('#scanCodeDetail').css('display', 'block').css('z-index', '100')
}, function () {
    $('#scanCodeDetail').css('display', 'none').css('z-index', '0')
})

//全部分类hover
$('#sort').hover(function () {
    $('#sortDetail').css('display', 'block')
}, function () {
    $('#sort').css('color', '#666')
    $('#sortDetail').css('display', 'none')
})

//左侧导航hover
var imgClassArr1 = ['kongtiao1', 'xiyiji1', 'dianshi1', 'chuwei1', 'xiaodian1', 'shdq1', 'ghdq1']
var imgClassArr2 = ['kongtiao2', 'xiyiji2', 'dianshi2', 'chuwei2', 'xiaodian2', 'shdq2', 'ghdq2']
$('#leftNav li').hover(function () {
    $(this).css('background-color', 'white');
    $(this).css('color', '#666')
    var index = $(this).index();
    $('.leftDetail').eq(index).fadeIn()
    $(this).find('.topLi').find('div').removeClass(imgClassArr1[index]).addClass(imgClassArr2[index])
}, function () {
    var index = $(this).index();
    $(this).css('background-color', '#db4749')
    $(this).css('color', 'white')
    $(this).find('.topLi').find('div').removeClass(imgClassArr2[index]).addClass(imgClassArr1[index])
    $('.leftDetail').eq(index).css('display', 'none')
})

//轮播hover
var backgroundArr = ['rgb(190, 237, 253)', 'rgb(69, 128, 240)', 'rgb(13, 30, 48)'];
var shufflingPicArr = ['img/lunbo1.jpg', 'img/lunbo2.jpg', 'img/lunbo3.jpg']

$('.dot').parent().find('.dot:eq(0)').css('background-color','red')



$('#shufflingImgBox .dot').hover(function () {
    console.log($('#shufflingImgBox .dot'));
    var index = $(this).index();
    $(this).css('background-color', '#d13030')
    $(this).parent().siblings('img').attr('src', shufflingPicArr[index]);
    $(this).siblings().css('background-color', '#ccc')
    $('#shufflingBox').css('background-color', backgroundArr[index])

   /// $(this).parent().parent().css('background-image', shuffing1[index])
}, function () {

})

var index = 0;
var shufflingTimer
$('#shufflingBox').find('img').hover(function play() {
    clearInterval(shufflingTimer)
}, function () {
    shufflingTimer = setInterval(play, 3000)
})


$('.leftArrow')[0].onclick = function () {
    index--;
    if (index < 0) {
        index = 2;
    }
    $(this).siblings('img').attr('src', shufflingPicArr[index]);
    $('#shufflingBox').css('background-color', backgroundArr[index])
    $('.dot').eq(index).css('background-color', '#d13030').siblings().css('background-color', '#ccc')
}
$('.rightArrow')[0].onclick = function () {
    index++;
    if (index > 2) {
        index = 0;
    }
    $(this).siblings('img').attr('src', shufflingPicArr[index]);
    $('#shufflingBox').css('background-color', backgroundArr[index])
    $('.dot').eq(index).css('background-color', '#d13030').siblings().css('background-color', '#ccc')
}
shufflingTimer = setInterval(play, 3000)
function play() {
    $('#shufflingImgBox .rightArrow').click();
}


//右上角X的点击事件
$('#closeBtn').click(function () {
    $('#advertisingBox').css('display', 'none')
})

//右侧服务的保证
$('#rightNav').find('tbody td').hover(function () {
    $(this).find('.serverDetail').css('display', 'block')

}, function () {
    $(this).find('.serverDetail').css('display', 'none')
})


//midPic的hover事件
$('.left').hover(function () {
    $(this).find('.pic').stop()
    $(this).find('.pic').animate({
        bottom: '0px'
    }, 'fast')
}, function () {
    $(this).find('.pic').stop()
    $(this).find('.pic').animate({
        bottom: '-10px'
    }, 'fast')
})

$('.remaiDetail').eq(0).css('z-index', '100')
//热卖的hover事件
$('#reMaiNav li').hover(function () {
    var index = $(this).index()
    $(this).css('background-color', '#f35f5f')
    $(this).css('color', 'white')
    $('.remaiDetail').eq(index).css('z-index', '100')
    $('.remaiDetail').eq(index).siblings('.remaiDetail').css('z-index', '0')
}, function () {
    $(this).css('background-color', 'white')
    $(this).css('color', '#666')
})

$('.remaiDetail td').hover(function () {
    $(this).find('div').stop()
    $(this).find('img').css('margin-top', '-60px')
    $(this).find('i').css('margin-top', '3px')
    $(this).find('p').css('margin-top', '-3px')
    $(this).find('div').css('line-height', '40px')
    $(this).find('div').animate({
        height: '40px'
    }, 'fast')

}, function () {
    $(this).find('div').stop()
    $(this).find('img').css('margin-top', '-30px')
    $(this).find('i').css('margin-top', '10px')
    $(this).find('p').css('margin-top', '10px')
    $(this).find('div').css('line-height', '0px')
    $(this).find('div').animate({
        height: '0px'
    }, 'fast')
})

//6*3方格的hover
$('#haowuRight td').hover(function () {
    $(this).find('div').css('display', 'block')
}, function () {
    $(this).find('div').css('display', 'none')
})

//1F的hover
$('.midPic tbody .hoverTd').hover(function () {
    $(this).find('img').stop()
    $(this).find('img').animate({
        marginLeft: '15px'
    }, '500')
}, function () {
    $(this).find('img').stop()
    $(this).find('img').animate({
        marginLeft: '30px'
    }, '500')
})

//1F 的轮播
var shuffing1 = ['url(1F/lun1.jpg)', 'url(1F/lun2.jpg)', 'url(1F/lun3.jpg)',
    'url(2F/lun1.jpg)', 'url(2F/lun2.jpg)', 'url(2F/lun3.jpg)',
    'url(3F/lun1.jpg)', 'url(3F/lun2.jpg)', 'url(3F/lun3.jpg)',
    'url(4F/lun1.jpg)', 'url(4F/lun2.jpg)', 'url(4F/lun3.jpg)',
    'url(5F/lun1.png)', 'url(5F/lun2.png)', 'url(5F/lun3.jpg)',
    'url(6F/lun1.jpg)', 'url(6F/lun2.jpg)', 'url(6F/lun3.jpg)',
    'url(7F/lun1.jpg)', 'url(7F/lun2.png)', 'url(7F/lun3.jpg)',
    'url(8F/lun1.jpg)', 'url(8F/lun2.jpg)', 'url(8F/lun3.jpg)'
]

var flagArr = [0,0,0,0,0,0,0,0];
var flag= 0;
var shuffingTimer
var currentBox = 0;
$('.shuffing').hover(function () {
    clearInterval(shuffingTimer)
}, function () {
    //shuffingTimer = setInterval(play1F, 3000)
})
var leftArrowArr = $('.floorBox .leftArrow');

$('.floorBox .leftArrow').click(function () {
    var xiaBiao = leftArrowArr.index($(this))
    var begin = xiaBiao*3;
    flagArr[xiaBiao]--;
    if ( flagArr[xiaBiao] < 0) {
        flagArr[xiaBiao] = 2;
    }
    $(this).parent().css('background-image', shuffing1[flagArr[xiaBiao]+begin]);
    $('.floorBox .dot').eq(flagArr[xiaBiao] + begin).css('background-color', '#d13030').siblings().css('background-color', '#ccc')
})

var rightArrowArr = $('.floorBox .rightArrow')

$('.floorBox .rightArrow').click(function () {
    var xiaBiao = rightArrowArr.index($(this))

    var begin = xiaBiao*3;
    flagArr[xiaBiao]++;
    if ( flagArr[xiaBiao]> 2) {
        flagArr[xiaBiao]= 0;
    }
    $(this).parent().css('background-image', shuffing1[flagArr[xiaBiao] + begin]);
    $('.floorBox .dot').eq(flagArr[xiaBiao]+ begin).css('background-color', '#d13030').siblings().css('background-color', '#ccc')
})

//
//sconsole.log($('.shuffing'));
var allShuffing = $('.shuffing');

$('.shuffing .dot').hover(function(){
    var belongToShuffing =  $(this).parent().parent();
    var index = $(this).index();

    var belongToIndex = allShuffing.index(belongToShuffing);
    flagArr[belongToIndex] = index;
    belongToShuffing.css('background-image', shuffing1[belongToIndex*3+index]);
    $('.floorBox .dot').eq(belongToIndex*3+index).css('background-color', '#d13030').siblings().css('background-color', '#ccc')

},function(){
})



//rightPic的hover事件
$('.rightPic .title span').hover(function () {
    var index = $(this).index()
    $(this).css('color', 'red')
    $(this).siblings().css('color', '#666')
    $(this).parent().parent().find('ul').eq(index).css('z-index', '100')
    $(this).parent().parent().find('ul').eq(index).siblings().css('z-index', '0')
}, function () {
})

$('.rightPic ul li').hover(function () {
    $(this).css('height', '94px')
    $(this).find('i').css('margin-top', '22px')
    $(this).find('img').css('display', 'inline-block').end().siblings().find('img').css('display', 'none')
    $(this).siblings().css('height', '62px')
    $(this).find('div').css('width', '110px').css('height', '50px').end().siblings().find('div').css('width', '170px').css('height', '30px')

}, function () {
    $(this).find('i').css('margin-top', '10px')
})


//资讯滚动
$('.roll').parent().css('padding', '10px').css('background-color', 'white')
$('#zixun .roll').find('section:eq(1)').html($('#zixun .roll').find('section:eq(0)').html())

var zixunTimer = setInterval(roll, 2000)
var height = $('.roll a').eq(0).height();
function roll() {
    var marginTopValue = Number($('#zixun .roll section:eq(0)').css('margin-top').replace('px', ''))

    if (Math.abs(marginTopValue) > $('#zixun .roll section').eq(0).height()) {
        $('#zixun .roll').find('section:eq(0)').css('margin-top', '0px')
    } else {
        $('#zixun .roll').find('section:eq(0)').animate({
            'margin-top': marginTopValue - height + 'px'
        }, '1000')
    }
}

$('.roll a').hover(function () {
    $(this).css('color', 'red')
}, function () {
    $(this).css('color', 'black')
})