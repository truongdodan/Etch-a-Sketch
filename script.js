let gridSize = 4


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

//Event
const allSquare = document.querySelectorAll(".grid div")
const changeGridSize = document.querySelector("#changesize")

function setEventLisenter(aSquare) {
    aSquare.forEach((square) => {
        square.style.height = 100/gridSize + "%"
        square.style.width = 100/gridSize + "%"

        square.addEventListener("mouseenter", () => {
            // square.setAttribute("style", "background-color: red")
            square.style.cssText = `background-color: red; height: ${100/gridSize}%; width: ${100/gridSize}%`
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
    allSquare.forEach((square) => {
        square.remove()
    })
    gridSize = prompt("Enter the new grid size (Maximum gridsize: 100); Grid = gridsize*gridsize): ")
    createGrid(gridSize*gridSize)
    
    const allSquare2 = document.querySelectorAll(".grid div")

    setEventLisenter(allSquare2)

    
})




