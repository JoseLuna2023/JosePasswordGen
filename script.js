// .split("") === "ABC" => ["A", "B", "C"]
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
var lower = "abcdefghijklmnopqrstuvwxyz".split('')
var nums = "1234567890".split('')
var symbol = "!@#$%^&*()_+".split('')

function generatePassword() {
    var notReady = []
    var ready = ""
    var passLength = prompt("How long would you like your password to be? (8-128)")
    if (passLength > 128 || passLength < 8) {
        alert("Youre password must be between 8 and 128. Please Retry!")
        generatePassword()
    } else {
        if (confirm("Do you want uppercase letters in your password?")) {
            notReady = notReady.concat(upper)
        }
        if (confirm("Do you want lowercase letters in your password?")) {
            notReady = notReady.concat(lower)
        }
        if (confirm("Do you want numbers in your password?")) {
            notReady = notReady.concat(nums)
        }
        if (confirm("Do you want symbols in your password?")) {
            notReady = notReady.concat(symbol)
        }
        if (notReady.length === 0) {
            alert("Please choose atleast 1 type of character to generate a password. Please Retry!")
            generatePassword()
        } else {
            // do whats in the for loop passlength times (10 times)
            for (let i = 0; i < passLength; i++) {
                // this variable is kind of like a function, that each time the for loop LOOPS(10 times)
                // It will grab a random "name" from the "hat"
                var randoIndex = Math.floor(Math.random() * notReady.length)
                // Each time we grab that random "name" we are gonna add it to the end of our ready string(var)
                ready += notReady[randoIndex]
            }
        }
        return ready
    }
}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password")

    passwordText.value = password
}

var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword)