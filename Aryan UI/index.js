
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


