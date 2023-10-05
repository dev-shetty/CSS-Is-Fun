function generatePassword() {
  const length = 12; // Change this value to set the desired password length
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+{}[]|:;<>,.?"; // You can customize the character set as needed
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  document.getElementById("password").textContent = password;
}

function copyToClipboard() {
  const passwordField = document.getElementById("password");
  const textArea = document.createElement("textarea");
  textArea.value = passwordField.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  alert("Password copied to clipboard!");
}
