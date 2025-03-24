

document.addEventListener('DOMContentLoaded', (event) => {
  document.body.classList.add('fade-in');
});

const name_header = document.querySelector('.name_wrapper');
if (window.innerWidth > 768) {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const translateX = -scrollPosition*2;
    name_header.style.transform = `translateX(${translateX}px)`;
  })
}
function toggleMenu() {
  var menu = document.querySelector('.mobile-menu');
  if (menu.style.display === 'block') {
      menu.style.display = 'none';
  } else {
      menu.style.display = 'block';
  }
}


function toggleMenu() {
  const menu = document.querySelector('.mobile-menu');
  const hamburgerIcon = document.querySelector('.hamburger-menu');

  if (menu.classList.contains('show')) {
      menu.style.maxHeight = '0'; // Collapse the menu
      setTimeout(() => {
          menu.classList.remove('show');
          menu.style.display = 'none';
      }, 300); // Wait for animation to finish before hiding

      hamburgerIcon.innerHTML = '&#9776;'; // Change back to hamburger icon
  } else {
      menu.style.display = 'block'; // Make it visible first
      setTimeout(() => {
          menu.classList.add('show');
          menu.style.maxHeight = '200px'; // Expand smoothly
      }, 10); // Small delay for smooth animation

      hamburgerIcon.innerHTML = '×'; // Change to close icon
  }
}



name_header.addEventListener("touchmove", touchMove, false);
function touchMove() {
  const scrollPosition = window.scrollY;
  const translateX = -scrollPosition;
  name_header.style.transform = `translateX(${translateX}px)`;
}

function pop_bubble(tag) {
    var bubble = document.getElementById(tag)
    bubble.style.opacity = 0;
    let url;
    switch(tag) {
      case "baby":
        url = "baby.html"
        break
      case "yt":
        url = "youtube.html"
        break
      case "school":
        url = "school.html"
        break
      case "hobbies":
        url = "hobbies.html"
        break
      case "career":
        url = "careers.html"
        break
      case "home":
        url = "index.html"
        break
    }
    document.body.classList.add('fade-out')
    setTimeout(() => {
      window.location.href = url
    }, 2000)
    setTimeout(() => {
      bubble.style.opacity = 1;
    }, 4000)
    
    
    
  }

  function open_page(tag) {
    switch(tag) {
      case "soquel":
        url = "https://www.soquel.sccs.net/"
      case "cabrillo":
        url = "https://www.cabrillo.edu/"
      case "csusm":
        url = "https://www.csusm.edu/"
    }
    setTimeout(() => {
      window.open(url, '_blank')
    }, 2000)
  }

  function change_like(data) {
    var like_button = document.getElementById('incrementButton')
    const like_container = document.getElementById('like_container')
    const like_count = document.createElement('div')
    
    like_count.innerText = `# of likes: ${data}`;
    like_count.classList.add('like_counter')
    like_button.classList.add('fade-out')

    setTimeout(() => {
      like_container.replaceChild(like_count, like_button)
    }, 2000);
    like_count.classList.add('fade-in')
  }
  




