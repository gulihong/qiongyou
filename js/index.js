$(document).ready(function() {
  $('.header_one').load('header.html',function(){
    //header
    $('.header .shequD').mouseover(function(event) {
      $('.header .shequD .shequ ul').css('display','block');
      $(this).find('.shequ').find('ul').find('.luntan').mouseover(function(event) {
        $('.header').find('.shequD').find('.shequ').find('.remen').css('display','block');
      });
      $(this).find('.shequ').find('ul').find('.luntan').mouseout(function(event) {
        var timer6=setTimeout(function(){
        $('.header').find('.shequD').find('.shequ').find('.remen').css('display','none');
      },3000);
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
    var timer5=setTimeout(function(){
    $('.header .search .p input').css('display','none');
  },2000);
    });
  });

  // 搜索框
  $('#sear input').focus(function(event) {
    $('.header_two ul').css('display','block');
  });
  $('#sear input').blur(function(event) {
    $('.header_two ul').css('display','none');
  });

  //轮播
  // 定义变量 记录轮播到第几张图片
  var index=0;
  var timer=setInterval(indexChange,3000);
  function indexChange(){
    if(index<$('.banner .lunbo .lb_img a').length-1){
      index++;
    }else{
      index=0;
    }
    changeImg(index);
  }
  // 下标变色
      $('.xiabiao').find('span').each(function(item){
        $(this).hover(function(){
          clearInterval(timer);
          changeImg(item);
          index=item;
        },function(){
          timer=setInterval(indexChange,3000);
        });
      });

  function changeImg(n){
    $('.banner').find('.lunbo').find('.lb_img').find('a').eq(n).slideDown(1000).siblings().slideUp(1000);
    $('.xiabiao').find('span').removeClass('xb').eq(n).addClass('xb');
  }
  // 下一张
   $('.right').click(function(event) {
     clearInterval(timer);
     timer=setInterval(indexChange,3000);
     indexChange();
   });

   // 上一张
   $('.left').click(function(event) {
      clearInterval(timer);
      if(index>=0&&index<=$('.banner .lunbo .lb_img a').length-1){
         index--;
      }else{
        index=$('.banner .lunbo .lb_img a').length-1;
      }
      changeImg(index);
      timer=setInterval(indexChange,3000);
   });
   // 当鼠标移入图片区域时停止图片轮播的定时器
   $('.banner').mouseover(function(event) {
     clearInterval(timer);
   });

   // 鼠标移出时继续图片轮播
   $('.banner').mouseout(function(event) {
    clearInterval(timer);
    timer=setInterval(indexChange,3000);
   });


//foot
 $('.index_foot').load('footer.html',function(){
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

// 二级菜单显示与隐藏
 $('.lunbo_menu>ul>li').each(function(index, el) {
   $(el).mouseover(function(event) {
     $('.li'+($(this).index()+1)+'_box').css('display','block');
   });
   $(el).mouseout(function(event) {
     $('.li'+($(this).index()+1)+'_box').css('display','none');
   });
 });


 //解析轮播图上的菜单
 $.get('http://10.0.156.235:8888/getMenu',function(data){
   //创建图片标签
   for(var k=0;k<data[5].moreCity[0].items.length;k++){
    $('.li1_box1_div').append('<img src="'+data[5].moreCity[0].items[k]+'"/>');
   }
   for(var i in data){
     $($('.lunbo_menu>ul>li>p>label')[i]).text(data[i].title);
     for(var z=0;z<data[i].mainCity.length;z++){
      $($('.lunbo_menu>ul>li>span>label')[i]).append($('<a></a>').text(data[i].mainCity[z]));
     }
      if(data[i].moreCity.length>=1){
      $($('.lunbo_menu>ul>li>div')[i]).find('.li1_box1').find('h3').text(data[i].moreCity[0].cityName);
      for(var img in data[i].moreCity[0].items){
      $($('.lunbo_menu>ul>li>div')[i]).find('.li1_box1').find('p').append($('<a></a>').text(data[i].moreCity[0].items[img]));
      }
      if(data[i].moreCity.length>=2){
      $($('.lunbo_menu>ul>li>div')[i]).find('.li1_box2').find('h3').text(data[i].moreCity[1].cityName);
      for(var img1 in data[i].moreCity[0].items){
      $($('.lunbo_menu>ul>li>div')[i]).find('.li1_box2').find('p').append($('<a></a>').text(data[i].moreCity[1].items[img1]));
      }
        if(data[i].moreCity.length>=3){
          $($('.lunbo_menu>ul>li>div')[i]).find('.li1_box3').find('h3').text(data[i].moreCity[2].cityName);
          for(var img2 in data[i].moreCity[0].items){
          $($('.lunbo_menu>ul>li>div')[i]).find('.li1_box3').find('p').append($('<a></a>').text(data[i].moreCity[2].items[img2]));
          }
        }else{
           console.log(null);
        }
      }else{
         console.log(null);
      }
   }else{
    console.log(null);
 }
}
 });
//  解析轮播图
$.ajax({
  url:'http://10.0.156.235:8888/banner',
  method:'GET',
  success:function(obj){
    for(var j=0;j<obj.length;j++){
      $('.lb_img').append('<a href="'+obj[j].href+'"><img src="'+obj[j].imgUrl+'"/></a>');
    }
  },
  error:function(err){
    console.log(err);
  }
})

//tab切换
for(var m=0;m<7;m++){
  (function(i){
    $('.freego_bot')[0].style.display='block';

    $($('.freego .freego_top>label')[i]).mouseover(function(event) {
      $(this).css({cursor:'pointer',borderBottom:'3px solid #53D38C',color:'#53D38C'});
      $(this).siblings().css({borderBottom:'0px',color:'black'});
      $($('.freego .freego_bot')[i]).fadeIn().siblings().fadeOut();
    });
  })(m);
}

// 解析机酒自由行
$.ajax({
  url:'http://10.0.156.235:8888/freework',
  method:'GET',
  success:function(obj4){
    for(var p in obj4){
      $('.freego .freego_bot_t_top>img')[p].src=obj4[p].data[0].imgUrl;
      $('.freego .freego_bot_t_top_bot>p:nth-of-type(1)')[p].innerHTML=obj4[p].data[0].title;
      $('.freego .freego_bot_t_top_bot>p:nth-of-type(2) span')[p].innerHTML=obj4[p].data[0].time;
      $('.freego .freego_bot_t_top>label')[p].innerHTML=obj4[p].data[0].price+'元起';

      $('.freego .imgb_1 .freego_bot_b_img_top img')[p].src=obj4[p].data[1].imgUrl;
      $('.freego .imgb_1 .freego_bot_b_img_top label')[p].innerHTML=obj4[p].data[1].price+'元起';
      $('.freego .imgb_1 .freego_bot_b_img_bot')[p].innerHTML=obj4[p].data[1].title;

      $('.freego .imgb_2 .freego_bot_b_img_top img')[p].src=obj4[p].data[2].imgUrl;
      $('.freego .imgb_2 .freego_bot_b_img_top label')[p].innerHTML=obj4[p].data[2].price+'元起';
      $('.freego .imgb_2 .freego_bot_b_img_bot')[p].innerHTML=obj4[p].data[2].title;

      $('.freego .imgb_3 .freego_bot_b_img_top img')[p].src=obj4[p].data[3].imgUrl;
      $('.freego .imgb_3 .freego_bot_b_img_top label')[p].innerHTML=obj4[p].data[3].price+'元起';
      $('.freego .imgb_3 .freego_bot_b_img_bot')[p].innerHTML=obj4[p].data[3].title;

      $('.freego .imgb_4 .freego_bot_b_img_top img')[p].src=obj4[p].data[4].imgUrl;
      $('.freego .imgb_4 .freego_bot_b_img_top label')[p].innerHTML=obj4[p].data[4].price+'元起';
      $('.freego .imgb_4 .freego_bot_b_img_bot')[p].innerHTML=obj4[p].data[4].title;

      $('.freego .imgb_5 .freego_bot_b_img_top img')[p].src=obj4[p].data[5].imgUrl;
      $('.freego .imgb_5 .freego_bot_b_img_top label')[p].innerHTML=obj4[p].data[5].price+'元起';
      $('.freego .imgb_5 .freego_bot_b_img_bot')[p].innerHTML=obj4[p].data[5].title;
    }
  },
  error:function(err){
    console.log(err);
  }
});

//右侧导航栏
setInterval(function(){
  var height=$(document).scrollTop();
  if(height>=200){
    $('.right_daohang').fadeIn();
    $('.daohang3').mouseover(function(event) {
      $('.app_left').css('display','block');
    });
    $('.daohang3').mouseout(function(event) {
      $('.app_left').css('display','none');
    });
  }else{
    $('.right_daohang').fadeOut();
  }
  if(height>=600){
    $('.daohang4').fadeIn();
  }else{
    $('.daohang4').fadeOut();
  }
},2000);
$('.daohang4').click(function(event) {
  $('html,body').animate({scrollTop:'0'},300);
});
});
