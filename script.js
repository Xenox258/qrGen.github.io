const input = document.getElementById("qrCodeUrl")
const generateButton = document.getElementById("generate")
const resultSection = document.querySelector(".result")
const image = document.getElementById("qrcodeImage")
const downloadLink = document.getElementById("download")
const wrapper = document.querySelector(".wrapper");



generateButton.addEventListener('click', () => {
   const text= input.value.trim();
   if (text === "") {
      alert("Veuillez entrer un texte ou un lien !");
      return;
  }
   QRCode.toDataURL(input.value).then(dataUrl => {
    image.src = dataUrl;
    image.style.display = "block";
    resultSection.classList.add("active");
    downloadLink.href = dataUrl;
    downloadLink.download = "qrcode.png";
    downloadLink.style.display = "inline-block";
    resultSection.classList.add("active");
    wrapper.style.height = "auto";
   });
    

})
