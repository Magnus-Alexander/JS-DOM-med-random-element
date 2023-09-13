function randomFruit() {
    let fruits = ["apple", "banana", "orange", "mango", "pear", "tomato", "watermelon", "cherry"]
    let randomNumber = Math.floor(Math.random() * fruits.length)
    console.log(fruits[randomNumber])
    let randomFruit = document.getElementById("randomElementOutPut")
    randomFruit.textContent = fruits[randomNumber]
    return randomFruit
}
randomFruit()