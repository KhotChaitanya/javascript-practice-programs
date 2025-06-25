let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array


function randomhands() {
    let randomindex = Math.floor(Math.random(hands) * 3)
    return hands[randomindex]
}


console.log(randomhands())