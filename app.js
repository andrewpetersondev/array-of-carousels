const maxImages = 4
let currentIndex1 = 1

function changeImage(direction, index) {
  const imageElement = document.getElementById(`image${index}`)
  const dotsContainer = document.getElementById(`dots${index}`)

  currentIndex1 = ((currentIndex1 + direction - 1 + maxImages) % maxImages) + 1

  imageElement.src = `./images/image${index}_${currentIndex1}.jpeg`

  updateDots(dotsContainer, currentIndex1)
}

function updateDots(container, currentIndex) {
  container.innerHTML = ""
  for (let i = 1; i <= maxImages; i++) {
    const dot = document.createElement("div")
    dot.classList.add("dot")
    if (i === currentIndex) {
      dot.classList.add("active")
    }
    container.appendChild(dot)
  }
}

// updateDots(document.getElementById("dots1"), currentIndex1)
updateDots(document.getElementsByClassName("dots"), currentIndex1)
