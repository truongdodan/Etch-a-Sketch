let gridSize = 30
const random = (min,max) => {
    return Math.floor(Math.random() * (max - min)) +  min
}
let r
let g
let b 
let rgb

//Create grid
function createGrid(gridSize) {
    const grid = document.querySelector(".grid")
    grid.style.cssText 

    for(let i = 0; i < gridSize; i++) {
        const div = document.createElement("div")
        grid.appendChild(div)
    }

} 

createGrid(gridSize*gridSize)

//random the color when enter the grid
const grid = document.querySelector(".grid")
grid.addEventListener("mouseenter", () => {
    r = random(0, 255)
    g = random(0, 255)
    b = random(0, 255)
    rgb = `rgb(${r}, ${g}, ${b})`
})

//darker the color
grid.addEventListener("mouseover", () => {
    if(r > 0) {
        r-=0.3
    }
    if(g > 0) {
        g-=0.3
    }
    if(b > 0) {
        b-=0.3
    }
    rgb = `rgb(${r}, ${g}, ${b})`

})

//Event
const allSquare = document.querySelectorAll(".grid div")
const changeGridSize = document.querySelector("#changesize")

function setEventLisenter(aSquare) {
    aSquare.forEach((square) => {
        square.style.height = 100/gridSize + "%"
        square.style.width = 100/gridSize + "%"

        square.addEventListener("mouseenter", () => {
            // square.setAttribute("style", "background-color: red")
            square.style.cssText = `background-color: ${rgb}; height: ${100/gridSize}%; width: ${100/gridSize}%`
        })
        square.addEventListener("mouseleave", () => {
            // square.setAttribute("style", "background-color: white;")
            square.style.cssText = `background-color: white; height: ${100/gridSize}%; width: ${100/gridSize}%`
            square.style.transition = "all 5s"
        })

    })
    
}

setEventLisenter(allSquare)

changeGridSize.addEventListener("click", () => {
    /* allSquare.forEach((square) => {
        square.remove()
    }) */
    grid.innerHTML = ''
    gridSize = prompt("Enter the new grid size (Maximum gridsize: 100); Grid = gridsize*gridsize): ")
    createGrid(gridSize*gridSize)
    
    const allSquare2 = document.querySelectorAll(".grid div")

    setEventLisenter(allSquare2)

    
})




