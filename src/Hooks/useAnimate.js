import React from 'react';

const UseAnimate = () => {
  const onscroll = () =>{
    const card_arr = document.querySelectorAll('.nosotros__directivos-card');
    let scrollTop = Math.round(window.pageYOffset);
    
    for (let i = 0; i < card_arr.length; i++) {
      const alturadiv = Math.round(card_arr[i].offsetTop);
      if(alturadiv - 400 < scrollTop){
        const element = card_arr[i];
        element.style.opacity = 1;
        element.classList.add('card__animate-top');
      }
    }
  }

  return ( 
    onscroll()
  );
}
 
export default UseAnimate;