const circle = document.querySelector('.circle');
const circleItems = document.querySelectorAll('.circle-item');
function arrangeItemsOnCircle() {
  const radius = circle.offsetWidth / 2;
  const angle = (2 * Math.PI) / circleItems.length;

  circleItems.forEach((item, index) => {
    const x = radius * Math.cos(index * angle);
    const y = radius * Math.sin(index * angle);
    item.style.left = `calc(50% + ${x}px)`;
    item.style.top = `calc(50% + ${y}px)`;
  });
}


function itemHover(){
  circleItems.forEach((item, index) => {
      item.addEventListener('touchstart', (e)=>{
        circleItems.forEach((otherItem) => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });

        if(e.target.classList.contains('icon')){
          e.target.parentElement.classList.add('active');
        } else if(e.target.classList.contains('circle-item')){
          e.target.classList.add('active');
        }
        itemText = item.querySelector('img ~ p').innerText.toUpperCase();
        document.querySelector('.main-text').innerText = itemText;
    })
    item.addEventListener('mouseenter', (e)=>{
      let itemText = e.target.querySelector('p').innerText.toUpperCase();
      document.querySelector('.main-text').innerText = itemText;
    })
    item.addEventListener('mouseleave', ()=>{
      document.querySelector('.main-text').innerText = 'POZNAJ NASZE KOMPETENCJE';
    })
  })
}

function itemTouch(){
  circleItems.forEach((item, index)=>{
    
  })
}
document.addEventListener('DOMContentLoaded', ()=>{
  console.log(AOS);
  arrangeItemsOnCircle();
});

window.addEventListener('resize', ()=>{
  arrangeItemsOnCircle();
});
itemHover()
AOS.init();
