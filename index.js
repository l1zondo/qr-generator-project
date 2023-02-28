const download = document.querySelector(".download");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const qrContainer = document.querySelector("#qrCode");
const qrText = document.querySelector(".qr-text");
const shareBtn = document.querySelector(".share-btn");
const sizes = document.querySelector(".sizes");

dark.addEventListener("input", handleDarkColor);
light.addEventListener("input", handleLightColor);
qrText.addEventListener("input", handleQRText);
sizes.addEventListener("change", handleSize);
shareBtn.addEventListener("click", handleShare);

const defaultUrl = "https://www.instagram.com/dolman.ar/";
let colorLight = "#fff",
    colorDark = "000",
    text = defaultUrl,
    size = 300;

function handleDarkColor(e){
    colorDark = e.target.value,
    generateQRCode();
}

function handleLightColor(e){
    colorLight = e.target.value,
    generateQRCode();
}


function handleQRText(e){
    const value = e.target.value;
    text = value;
    if (!value){
        text = defaultUrl;
    }
    generateQRCode()
}

async function generateQRCode(){
    qrContainer.innerHTML = "";
    new generateQRCode("qr-code", {
        text,
        height: size,
        width: size,
        colorLight,
        colorDark,
    });
    download.href = await resolveDataUrl();
}

async function handleShare(){
    setTimeout(async()=>{
        try{
            const base64url =await resolveDataUrl();
        }
    })
}
