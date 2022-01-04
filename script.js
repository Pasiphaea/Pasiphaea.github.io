const a = document.querySelectorAll('a');
const detailBox = document.querySelector('.detailBox');
const detailBoxTitle = document.querySelector('.detailBoxTitle');
const day = document.querySelector('.day');

const abs = '0.5px solid gainsboro';
const p = '0.5px solid darkturquoise';
const i = '0.5px solid salmon';

a.forEach( (as) => {
  as.addEventListener('click', () => {
   detailBox.classList.toggle('active');   
   if (as.className == 'abs') {
    detailBox.style.border = abs; 
    detailBoxTitle.innerHTML = 'Absen';
    detailBoxTitle.style.color = 'gainsboro';
    // detailBoxTitle.style.opacity = '80%';
   }
    if (as.className == 'p') {
    detailBox.style.border = p; 
    detailBoxTitle.innerHTML = 'FULL';
    detailBoxTitle.style.color = 'darkturquoise';
    // detailBoxTitle.style.opacity = '80%';

    
   }
    if (as.className == 'i') {
    detailBox.style.border = i; 
    detailBoxTitle.style.color = 'salmon';
    // detailBoxTitle.style.opacity = '80%';
   }
  });
});