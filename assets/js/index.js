document.querySelector(".button-modal").addEventListener("click", function() {
    document.querySelector(".modal").style.display = 'flex';
});

document.querySelector('.close-btn').addEventListener("click", function() {
    document.querySelector('.modal').style.display = 'none';
});
