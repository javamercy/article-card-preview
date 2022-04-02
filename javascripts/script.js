const shareBtn = document.getElementById("share-btn");
const shareTooltip = document.querySelector(".share-tooltip");

shareBtn.addEventListener("click", () => {

    shareTooltip.classList.toggle("show");

});