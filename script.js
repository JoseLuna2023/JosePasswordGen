// .split("") === "ABC" => ["A", "B", "C"]
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
var lower = "abcdefghijklmnopqrstuvwxyz".split('')
var nums = "1234567890".split('')
var symbol = "!@#$%^&*()_+".split('')

function generatePassword() {
    var notReady = []
    var ready = ""
    var passLength = prompt("How long would you like your password to be? (8-128)")
    if(passLength > 128 || passLength < 8) {
        alert("Youre password must be between 8 and 128. Please Retry!")
        generatePassword()
    }


}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password")

    passwordText.value = password
}

var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword)