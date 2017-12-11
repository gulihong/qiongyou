$(document).ready(function() {
  $('.header1').load('header.html',function(){
    //header
    $('.header .shequD').mouseover(function(event) {
      $('.header .shequD .shequ ul').css('display','block');
      $(this).find('.shequ').find('ul').find('.luntan').mouseover(function(event) {
        $('.header').find('.shequD').find('.shequ').find('.remen').css('display','block');
      });
      $(this).find('.shequ').find('ul').find('.luntan').mouseout(function(event) {
        $('.header').find('.shequD').find('.shequ').find('.remen').css('display','none');
      });
    });
    $('.header .shequD').mouseout(function(event) {
      $('.header .shequD .shequ ul').css('display','none');
    });
    $('.header .shangchengD').mouseover(function(event) {
      $('.header .shangchengD .shangcheng ul').css('display','block');
    });
    $('.header .shangchengD').mouseout(function(event) {
      $('.header .shangchengD .shangcheng ul').css('display','none');
    });
    $('.header .yudingD').mouseover(function(event) {
      $('.header .yudingD .yuding ul').css('display','block');
    });
    $('.header .yudingD').mouseout(function(event) {
      $('.header .yudingD .yuding ul').css('display','none');
    });
    $('.header .search .p label:nth-of-type(4)').mouseover(function(event) {
    $('.header .search .p input').css('display','block');
    });
    $('.header .search .p label:nth-of-type(4)').mouseout(function(event) {
    $('.header .search .p input').css('display','none');
    });
  });
//搜索
  $('#inp').focus(function(event) {
   $('#ul1').css('display','block');
  });
  $('#inp').blur(function(event) {
   $('#ul1').css('display','none');
  });

  $('.zonghe>span:nth-of-type(3)').mouseover(function(event) {
   $(this).css('color',"#36CF9E");
   $('.zonghe>span:nth-of-type(3)>label').css('background',"#36CF9E");
  });
  $('.zonghe>span:nth-of-type(3)').mouseout(function(event) {
   $(this).css('color',"#fff");
   $('.zonghe>span:nth-of-type(3)>label').css('background',"#fff");
  });

  $('.city_foot').load('footer.html',function(){
    $('.label1').mouseover(function(event) {
    $('#weixin').css('display','block');
    $('.xiao_sanjiao1').css('display','block');
    });
    $('.label1').mouseout(function(event) {
    $('#weixin').css('display','none');
    $('.xiao_sanjiao1').css('display','none');
    });
    $('.label2').mouseover(function(event) {
    $('#weibo').css('display','block');
    $('.xiao_sanjiao2').css('display','block');
    });
    $('.label2').mouseout(function(event) {
    $('#weibo').css('display','none');
    $('.xiao_sanjiao2').css('display','none');
    });
    $('.label3').mouseover(function(event) {
    $('#youxiang').css('display','block');
    $('.xiao_sanjiao3').css('display','block');
    });
    $('.label3').mouseout(function(event) {
    $('#youxiang').css('display','none');
    $('.xiao_sanjiao3').css('display','none');
    });
  });

  $.get('http://10.0.156.235:8888/citywork',function(data){
    for(var i=0;i<data.length;i++){
      $($('.zui_img')[i]).find('.zui_left').find('img')[0].src=data[i].imgurl;
      $($('.zui_img')[i]).find('.zui_right').find('.zui_right_top').find('span:nth-of-type(1)').text(data[i].address);
      $($('.zui_img')[i]).find('.zui_right').find('.zui_right_top').find('.top_p').find('.cishu').text(data[i].browseCount+'次');
      $($('.zui_img')[i]).find('.zui_right').find('.zui_right_top').find('.top_p').find('.jianshu').text(data[i].soldCount);
      $($('.zui_img')[i]).find('.zui_right').find('h1').text(data[i].title);
      for(var j=0;j<data[i].introduce.length;j++){
      $($('.zui_img')[i]).find('.zui_right').find('.zui_right_p').find('p')[j].innerHTML=data[i].introduce[j];
      }
     $($('.zui_img')[i]).find('.zui_right').find('.right_bot').find('p').find('s').text(data[i].oldPrice);
     $($('.zui_img')[i]).find('.zui_right').find('.right_bot').find('p').find('span').text(data[i].newPrice);
    }
  });
});
