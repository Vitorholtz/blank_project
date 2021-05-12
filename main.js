window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  let position = 600;
  let position2 = 2600;

  if (currentScrollPos >= position) {
      document.querySelector(".content__container").style ='display:flex;';
  } 

  if (currentScrollPos >= position2) {
    document.querySelector(".instructions__container").style ='display:flex;';
} 
}