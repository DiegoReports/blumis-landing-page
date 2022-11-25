window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(products)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
  activateMenuAtCurrentSection(services)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // Acompanhamento de linha na seção
  const sectionTop = section.offsetTop // TOPO
  const sectionHeight = section.offsetHeight // ALTURA

  // Topo da Seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

  // Verificando se a base esta abaixo da linha alvo
  const sectionEndsAt = sectionTop + sectionHeight

  // Fim da secao passou da linha alvo
  const sectionAndPassedTargetLine = sectionEndsAt <= targetLine

  // Limites da seção
  const sectionBoundaries =
    sectionTopReachOrPassedTargetline && !sectionAndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-mobile')
}

function closeMenu() {
  document.body.classList.remove('menu-mobile')
}

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  /*   loop: true, */
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1500
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#products,
#products header,
#my-Newslider,
#products .content p,
#about,
#about header,
#about .content,
#testimonials,
#testimonials header,
#testimonials .content
`)
