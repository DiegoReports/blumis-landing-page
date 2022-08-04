function onScroll() {
  if (scrollY > 0) {
    nav.classList.add('scroll')
  } else {
    nav.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-mobile')
}

function closeMenu() {
  document.body.classList.remove('menu-mobile')
}
