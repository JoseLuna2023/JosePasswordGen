// .split("") === "ABC" => ["A", "B", "C"]
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')  
var lower = "abcdefghijklmnopqrstuvwxyz".split('')
var nums = "1234567890".split('')
var symbol = "!@#$%^&*()_+".split('')

function generatePassword() {

}

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password")

    passwordText.value = password
}

var generateBtn = document.querySelector("#generate")
generateBtn.addEventListener("click", writePassword)