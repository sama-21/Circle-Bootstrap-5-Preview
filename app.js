document.addEventListener('mousemove', (ev) => cursorMove(ev));

function cursorMove(ev) {
  let circle = document.getElementById('circle');
  let posY = ev.clientY;
  let posX = ev.clientX;
  
  circle.style.top = posY + 'px';
  circle.style.left = posX + 'px';
}


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }


// Scroll Effects

window.sr = ScrollReveal();
sr.reveal('.navbar', {
  duration: 2000,
  origin: 'left',
  distance: '100%' 
});  

sr.reveal('#open-title', {
  duration: 2500,
  origin: 'left',
  distance: '100%' 
});  

sr.reveal('#open-btn', {
  duration: 4000,
  origin: 'bottom',
  distance: '50%' 
});  

sr.reveal('#Services', {
  duration: 5000,
  origin: 'right',
  distance: '100%',
  vue: 0.2 
});  

sr.reveal('#detail-one', {
  duration: 2000,
  origin: 'left',
  distance: '30%',
  vue: 0.2
});  

sr.reveal('#detail-two', {
  duration: 2000,
  origin: 'top',
  distance: '30%',
  vue: 0.2 
});  

sr.reveal('#detail-three', {
  duration: 2000,
  origin: 'right',
  distance: '30%',
  vue: 0.2
});  

sr.reveal('#det-1', {
  duration: 2000,
  origin: 'left',
  distance: '30%',
  vue: 0.2
});  

sr.reveal('#det-2', {
  duration: 2000,
  origin: 'top',
  distance: '30%',
  vue: 0.2
});  

sr.reveal('#det-3', {
  duration: 2000,
  origin: 'bottom',
  distance: '30%',
  vue: 0.2
});  

sr.reveal('#det-4', {
  duration: 2000,
  origin: 'right',
  distance: '30%',
  vue: 0.2
});  

sr.reveal('#left-one', {
  duration: 2000,
  origin: 'left',
  distance: '50%',
  vue: 0.2
});  

sr.reveal('#left-two', {
  duration: 2000,
  origin: 'right',
  distance: '50%',
  vue: 0.2
});  

sr.reveal('#left-3', {
  duration: 2000,
  origin: 'left',
  distance: '50%',
  vue: 0.2
}); 

sr.reveal('#left-4', {
  duration: 2000,
  origin: 'right',
  distance: '50%',
  vue: 0.2
}); 

sr.reveal('#new-left', {
  duration: 2000,
  origin: 'left',
  distance: '50%',
  vue: 0.2
}); 

sr.reveal('#new-right', {
  duration: 2000,
  origin: 'right',
  distance: '50%',
  vue: 0.2
}); 

sr.reveal('#price-1', {
  duration: 2000,
  origin: 'left',
  distance: '50%',
  vue: 0.2
}); 

sr.reveal('#price-2', {
  duration: 2000,
  origin: 'bottom',
  distance: '50%',
  vue: 0.2
});

sr.reveal('#price-3', {
  duration: 2000,
  origin: 'right',
  distance: '50%',
  vue: 0.2
});