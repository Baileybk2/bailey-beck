document.addEventListener("DOMContentLoaded", function () {
  const pillSection = document.getElementById("technical")

  let triggerPillAnimation = () => {
    let pills = document.getElementsByClassName("pill-animate")

    Array.from(pills).forEach((pill, index) => {
      pill.style.animationDelay = `${index * 0.1}s`
      pill.style.opacity = 1
    })
  }
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          triggerPillAnimation()
          observer.unobserve(pillSection)
        }
      })
    },
    { threshold: 0 }
  )

  observer.observe(pillSection)
})
