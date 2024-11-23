const input = document.getElementById("input");
const QR = document.getElementById("qr");
const newqr = document.getElementById("new");
const api_url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

newqr.addEventListener("click", () => {createQr(api_url)}, false);

async function createQr(url) {
    QR.innerHTML = `<img src="${api_url + input.value}" alt="" id="code">`    
} 