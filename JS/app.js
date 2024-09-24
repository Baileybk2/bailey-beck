let pills = document.getElementsByClassName("pill-animate")

Array.from(pills).forEach((pill, index) => {
  pill.style.animationDelay = `${index * 0.15}s`
})
