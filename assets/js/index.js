const menuAside = document.querySelector('.menu-aside');


const toggleMenuButtons = document.querySelectorAll('#toggle-menu');


toggleMenuButtons.forEach(button => {
    button.addEventListener('click', function() {
      
        const isHidden = menuAside.classList.contains('hidden');

       
        if (isHidden) {
            menuAside.classList.remove('hidden');
        } else {
            menuAside.classList.add('hidden');
        }
    });
});


// const video = document.getElementById('video');

// video.addEventListener('loadedmetadata', function() {

//   video.play();
// });
