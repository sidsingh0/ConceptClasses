
const observer= new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      // console.log(entry);
      if (entry.isIntersecting){
          entry.target.classList.add('show');
      }
      else{
          //entry.target.classList.remove('show');
      }
  });
});

const observer2= new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      // console.log(entry);
      if (entry.isIntersecting){
        counter("count1", 0, 1000, 1500);
        counter("count2", 0, 26, 2500);
        counter("count3", 0, 365, 2500);
      }
      else{
          //entry.target.classList.remove('show');
      }
  });
});

const observer3= new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      console.log(entry);
      if (entry.isIntersecting){
        entry.target.classList.add('text-focus-in');
      }
      else{
          //entry.target.classList.remove('show');
      }
  });
});


const hiddenElements= document.querySelectorAll(".hidden")
hiddenElements.forEach((el)=>observer.observe(el))

const Counter= document.querySelectorAll(".counterclass");
Counter.forEach((el)=>observer2.observe(el))

const demo= document.querySelectorAll(".demo");
demo.forEach((el)=>observer3.observe(el))

const hamburger = document.querySelector(".hamburger");
const navigationitemlist = document.querySelector(".navigationitemlist");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navigationitemlist.classList.toggle("active");
})




$(".vpop").on('click', function(e) {
  e.preventDefault();
  $("#video-popup-overlay,#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();
  
  var srchref='',autoplay='',id=$(this).data('id');
  if($(this).data('type') == 'vimeo') var srchref="//player.vimeo.com/video/";
  else if($(this).data('type') == 'youtube') var srchref="https://www.youtube.com/embed/";
  
  if($(this).data('autoplay') == true) autoplay = '?autoplay=1';
  
  $("#video-popup-iframe").attr('src', srchref+id+autoplay);
  
  $("#video-popup-iframe").on('load', function() {
    $("#video-popup-container").show();
  });
});

$("#video-popup-close, #video-popup-overlay").on('click', function(e) {
  $("#video-popup-iframe-container,#video-popup-container,#video-popup-close,#video-popup-overlay").hide();
  $("#video-popup-iframe").attr('src', '');
});

/* 
minified

$(".vpop").on("click",function(o){o.preventDefault(),$("#video-popup-iframe-container,#video-popup-container,#video-popup-close").show();var p="",e="",i=$(this).data("id");if("vimeo"==$(this).data("type"))var p="//player.vimeo.com/video/";else if("youtube"==$(this).data("type"))var p="https://www.youtube.com/embed/";1==$(this).data("autoplay")&&(e="?autoplay=1"),$("#video-popup-iframe").attr("src",p+i+e),$("#video-popup-iframe").on("load",function(){$("#video-popup-overlay, #video-popup-container").show()})}),$("#video-popup-close, #video-popup-overlay").on("click",function(o){$("#video-popup-iframe-container,#video-popup-container,#video-popup-close").hide(),$("#video-popup-iframe").attr("src","")});
*/