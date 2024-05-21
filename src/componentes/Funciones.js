export function Animate(class_card, alturaRestante, nameAnimation){
  
  const card_arr = document.querySelectorAll(`.${class_card}`);
  let scrollTop = Math.round(window.pageYOffset);
  console.log(scrollTop)
  for (let i = 0; i < card_arr.length; i++) {
    const alturadiv = Math.round(card_arr[i].offsetTop);
    
    if(alturadiv - alturaRestante < scrollTop){
      const element = card_arr[i];
      element.style.opacity = 1;
      element.classList.add(`${nameAnimation}`);
    }
  }
}
 