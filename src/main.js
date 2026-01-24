import './styles.css'

// Navigation scroll effect
const nav = document.getElementById('nav')

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
})

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0
      setTimeout(() => {
        entry.target.classList.add('visible')
      }, delay * 100)
    }
  })
}, observerOptions)

// Observe all animated elements
document.querySelectorAll('.mission-item, .stat, .model-card, .domain-item, .founder-card').forEach((el) => {
  const siblings = el.parentElement.children
  const siblingIndex = Array.from(siblings).indexOf(el)
  el.dataset.delay = siblingIndex
  observer.observe(el)
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})
