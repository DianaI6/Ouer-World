//ბურგერის გაკეთება
let navigationbar = document.getElementById ('navbar');
let toggleButton = document.getElementById ('toggle-button');

toggleButton.addEventListener ('click', function () {
    navigationbar.classList.toggle ('active');
});