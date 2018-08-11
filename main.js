const current = document.querySelector('#current');
const images = document.querySelectorAll('.images img'); 
const opacity = 0.6;

//  set the first image opacity 
images[0].style.opacity = opacity;

images.forEach(img => img.addEventListener('click', imgClick));

 function imgClick(e) {
      // reset the opacity
    images.forEach(img => (img.style.opacity = 1));
    
    //  change current image to the source of clicked image
    current.src = e.target.src;

    // add fade-in class
    current.classList.add('fade-in');

    // remove fade-in class after .5 secs
    setTimeout(() => current.classList.remove('fade-in' ), 500);

    // change the opacity to const value (0.4)
    e.target.style.opacity = opacity; 
 }

