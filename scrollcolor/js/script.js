const colors = ['yellow', 'teal-deep', 'light']

const sections = [...document.querySelectorAll('.section-color')]

window.addEventListener('scroll', function () {

  const scrollFromTop = window.pageYOffset

  for (let i = 0; sections.length > i; i++) {

    if (scrollFromTop <= sections[i].offsetTop) {
      document.body.className = colors[i] 
      break
    } 

  }

})