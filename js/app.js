const circle = document.querySelector('.circle');
const circleItems = document.querySelectorAll('.circle-item');

function arrangeItemsOnCircle() {
  const radius = circle.offsetWidth / 2;
  const angle = (2 * Math.PI) / circleItems.length;
  let highestY = 0; 
  let lowestY = 0;
  let highestIndex = 0;
  let lowestIndex = 0;

  circleItems.forEach((item, index) => {
    const x = radius * Math.cos(index * angle);
    const y = radius * Math.sin(index * angle);
    item.style.left = `calc(50% + ${x}px)`;
    item.style.top = `calc(50% + ${y}px)`;
    if (y < highestY) {
      highestY = y;
      highestIndex = index;
    }
    if (y > lowestY) {
      lowestY = y;
      lowestIndex = index;
    }

    if (x > 0) {
      item.classList.add('right');
    } else if (x < 0) {
      item.classList.add('left');
    }
  });

  circleItems[highestIndex].classList.remove('left', 'right');
  circleItems[lowestIndex].classList.remove('left', 'right');
  circleItems[highestIndex].classList.add('top');
  circleItems[lowestIndex].classList.add('bottom');
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

document.addEventListener('DOMContentLoaded', ()=>{
  arrangeItemsOnCircle();
  itemHover()
  AOS.init();
});

window.addEventListener('resize', ()=>{
  arrangeItemsOnCircle();
});


