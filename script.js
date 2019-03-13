$( document ).ready(function() {

/* Button Hover Efektai */

$(".buttonHeaderContainer").hover(function () {
    $(this).find(".basic-arrow-img").toggleClass("headerButtonImgHover");
}, function () {
    $(this).find(".basic-arrow-img").removeClass("headerButtonImgHover"); 
});

/* Mobile Menu li Elements Effects*/

$(".navigationMobileContentUl li").mouseover(function () {
    $(this).find(".navSpanMobile").animate({left: "30px"}, 10);
});
$(".navigationMobileContentUl li").mouseout(function () {
   $(this).find(".navSpanMobile").animate({left: "0"}, 10);
});


/* Menu Burger Click + Mobile Menu */


$('.icon').click(function(){
	$('.icon').toggleClass('active');
  $('.navigationMobileContent').toggleClass('navigationMobileContentActive');
  $('.navigationMobileContentUl').toggleClass('ulActive');
  $('.navSpanMobile').toggleClass('navSpanMobileFade');
});




/* Menu Scroll Efektas */

var iScrollPos = 0;
$(window).scroll(function () {
 var iCurScrollPos = $(this).scrollTop();
if (iCurScrollPos > iScrollPos) {
 $('.navigation').addClass('scrolledNav');
 $('.navigation').removeClass('scrolledNavUp');
	} else {
$('.navigation').addClass('scrolledNavUp');


 }
iScrollPos = iCurScrollPos;

});


/* BOOTCAMP Linijos Apskritimu Efektas */


$(window).scroll( function() { 
 var scrolled_val = $(document).scrollTop().valueOf();
 if(scrolled_val > 850){
 	$('#bubble1-2').addClass('growBubble1-2');
  $('#bubble1-1').addClass('growBubble1-1');
 } else if(scrolled_val < 850){
 	$('#bubble1-2').removeClass('growBubble1-2');
  $('#bubble1-1').removeClass('growBubble1-1');
 }

 var scrolled_val = $(document).scrollTop().valueOf();
  if(scrolled_val > 1440){
  $('#bubble2-2').addClass('growBubble2-2');
  $('#bubble2-1').addClass('growBubble2-1');
 } else if(scrolled_val < 1440){
  $('#bubble2-2').removeClass('growBubble2-2');
  $('#bubble2-1').removeClass('growBubble2-1');
 }

  var scrolled_val = $(document).scrollTop().valueOf();
  if(scrolled_val > 2000){
  $('#bubble3-2').addClass('growBubble3-2');
  $('#bubble3-1').addClass('growBubble3-1');
 } else if(scrolled_val < 2000){
  $('#bubble3-2').removeClass('growBubble3-2');
  $('#bubble3-1').removeClass('growBubble3-1');
 }

  var scrolled_val = $(document).scrollTop().valueOf();
  if(scrolled_val > 2500){
  $('#bubble4-2').addClass('growBubble4-2');
  $('#bubble4-1').addClass('growBubble4-1');
 } else if(scrolled_val < 2500){
  $('#bubble4-2').removeClass('growBubble4-2');
  $('#bubble4-1').removeClass('growBubble4-1');
 }

   var scrolled_val = $(document).scrollTop().valueOf();
  if(scrolled_val > 3050){
  $('#bubble5-2').addClass('growBubble5-2');
  $('#bubble5-1').addClass('growBubble5-1');
 } else if(scrolled_val < 3050){
  $('#bubble5-2').removeClass('growBubble5-2');
  $('#bubble5-1').removeClass('growBubble5-1');
 }

  var scrolled_val = $(document).scrollTop().valueOf();
  if(scrolled_val > 3680){
  $('#bubble6-2').addClass('growBubble6-2');
  $('#bubble6-1').addClass('growBubble6-1');
 } else if(scrolled_val < 3680){
  $('#bubble6-2').removeClass('growBubble6-2');
  $('#bubble6-1').removeClass('growBubble6-1');
 }

});


/* Landing Page Slideris */


$('.slider-h1-1').mouseover(

    function(){
      $('.imgSlider').fadeOut(40, function () {
      $('.imgSlider').attr('src','img/landing-slider-1.png');
      $('.imgSlider').attr('id', 'imgSliderHeight1');
      $('.seventhBottomRight').attr('id', 'imgSliderHeight1');
      $('.imgSlider').fadeIn(40);
    }),

      $('.seventhBottomRightSlider').addClass('slideFirst');
      $('.seventhBottomRightSlider').removeClass('slideSecond');
      $('.seventhBottomRightSlider').removeClass('slideThird');

      $('.secondSkew').addClass('secondSkewTop1');
      $('.secondSkew').removeClass('secondSkewTop2');
      $('.secondSkew').removeClass('secondSkewTop3');

});

$('.slider-h1-2').mouseover(

    function(){
      $('.imgSlider').fadeOut(40, function () {
      $('.imgSlider').attr('src','img/landing-slider-2.jpg');
      $('.imgSlider').attr('id', 'imgSliderHeight2');
      $('.seventhBottomRight').attr('id', 'imgSliderHeight2');
      $('.imgSlider').fadeIn(40);
    }),

      $('.seventhBottomRightSlider').addClass('slideSecond');
      $('.seventhBottomRightSlider').removeClass('slideFirst');
      $('.seventhBottomRightSlider').removeClass('slideThird');

      $('.secondSkew').addClass('secondSkewTop2');
      $('.secondSkew').removeClass('secondSkewTop1');
      $('.secondSkew').removeClass('secondSkewTop3');
});

$('.slider-h1-3').mouseover(

    function(){
      $('.imgSlider').fadeOut(40, function () {
      $('.imgSlider').attr('src','img/landing-slider-3.png');
      $('.imgSlider').attr('id', 'imgSliderHeight3');
      $('.seventhBottomRight').attr('id', 'imgSliderHeight3');
      $('.imgSlider').fadeIn(40);
    }),

      $('.seventhBottomRightSlider').addClass('slideThird');
      $('.seventhBottomRightSlider').removeClass('slideFirst');
      $('.seventhBottomRightSlider').removeClass('slideSecond');

      $('.secondSkew').addClass('secondSkewTop3');
      $('.secondSkew').removeClass('secondSkewTop2');
      $('.secondSkew').removeClass('secondSkewTop1');

});

/* Get Involved Header Box Effects */  

$(".box").hover(function () {
    $(this).find(".boxBottom").toggleClass("boxBottomHeight");
    $(this).find(".boxTop").toggleClass("boxTopHeight");  
});

$(".box").mouseover(function () {
    $(this).find(".boxTop").css("background-size","100%");
    $(this).find(".boxTop").css('filter', 'grayscale(50%)');
});

$(".box").mouseout(function () {
    $(this).find(".boxTop").css("background-size","120%");
    $(this).find(".boxTop").css('filter', 'grayscale(0%)');
});




/*** Team Slider ***/


var titleSectionNr = 3;
var teamSlideNr = 1;
var marg_top = -600;
var marg_top_title = -180;

var marg_top_up = 600;
var marg_top_title_up = 180;

var marg_top_responsive = -490;
var marg_top_up_responsive = 490;

var mobileRes = window.matchMedia("(max-width: 800px)");
var fullScreen = window.matchMedia("(min-width: 800px)");

/** If Screen Max-Width 800px  **/

function responsiveTeam(mobileRes) {

 if (mobileRes.matches){
  
  $('.secondRightSlider ul li').css({'height' : '490px'});
  $('.teamSliderRight').css({'height' : '490px'});
  $('.secondRightSlider').css({'height' : '5880px'});

 } else{
  $('.secondRightSlider ul li').css({'height' : '600px'});
  $('.teamSliderRight').css({'height' : '600px'});
  $('.secondRightSlider').css({'height' : '7200px'});
 }

}

/** Listen to Screen Size Function**/
    
function fullScreenTeam(fullScreen) {


    $('.arrow-down').click(
        
      function(){

        teamSlideNr = teamSlideNr + 1; //Count Current Slide

        if(teamSlideNr <=12){ 

          // Fade In&Fade Out Image
          $('.teamImgSlider').fadeOut(40, function () { 
            $('.teamImgSlider').attr('src','img/team-slider-'+teamSlideNr+'.jpg');    
            $('.teamImgSlider').fadeIn(40);
          });

          //Title Section Opacity And Movement Length
          $('.titleSection'+teamSlideNr).addClass('titleOn');   
          $('.titleSection').css({'margin-top' : "+=" + marg_top_title}); 
          $('.secondSection').css({'background': 'linear-gradient( rgba(33, 38, 45, 0.9), rgba(33, 38, 45, 0.9) ),url("img/team-slider-'+teamSlideNr+'.jpg")'});
          $('.secondSection').css({'background-position': 'top'});
          $('.secondSection').css({'background-repeat': 'no-repeat'});
          $('.secondSection').css({'background-size': 'cover'});

          /** Adjust Main Slider Movement By Screen Size  **/

          if (fullScreen.matches){              
            $('.secondRightSlider').css({'margin-top' : "+=" + marg_top});  
          } else if(mobileRes.matches){
             $('.secondRightSlider').css({'margin-top' : "+=" + marg_top_responsive}); 
          }
 
        }
                
    }); //End Arrow-Down Click Function



    $('.arrow-up').click(
        
      function(){

        teamSlideNr = teamSlideNr + -1;
        teamSliderNrUp = teamSlideNr + 1;

        if(teamSlideNr >= 1 ){   

            $('.teamImgSlider').fadeOut(40, function () { 
              $('.teamImgSlider').attr('src','img/team-slider-'+teamSlideNr+'.jpg');   
              $('.teamImgSlider').fadeIn(40);
            });

            $('.titleSection'+teamSliderNrUp).removeClass('titleOn');    
            $('.titleSection').css({'margin-top' : "+=" + marg_top_title_up});
            
            $('.secondSection').css({'background': 'linear-gradient( rgba(33, 38, 45, 0.9), rgba(33, 38, 45, 0.9) ),url("img/team-slider-'+teamSlideNr+'.jpg")'});
            $('.secondSection').css({'background-position': 'top'});
            $('.secondSection').css({'background-repeat': 'no-repeat'});
            $('.secondSection').css({'background-size': 'cover'});

            /** Adjust Slider Movement By Screen Size  **/

            if (fullScreen.matches){         
              $('.secondRightSlider').css({'margin-top' : "+=" + marg_top_up}); 
            } else if(mobileRes.matches){
              $('.secondRightSlider').css({'margin-top' : "+=" + marg_top_up_responsive});  
            }
                
          }
          
    }); // End Arrow-Up Click Function


} // END Listen to Screen Size Function





responsiveTeam(mobileRes) // Call listener function at run time
mobileRes.addListener(responsiveTeam) // Attach listener function on state changes


fullScreenTeam(fullScreen) // Call listener function at run time
fullScreen.addListener(fullScreenTeam) // Attach listener function on state changes


/*** Team Slider END***/



}); //JQUERY END




