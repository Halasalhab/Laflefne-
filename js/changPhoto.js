function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}
window.onclick = function(event) {
    let modal = document.getElementById('loginPopup');
    if (event.target == modal) {
        closeForm();
    }
}
var input = document.getElementById('popupFor').getElementsByTagName('input')
console.log(input)
var photobtn = document.getElementById('photo-btn')
var personalPhoto = document.getElementById('personalPhoto')

photobtn.addEventListener('click', changePhoto)

function changePhoto() {
    personalPhoto.src = input
}