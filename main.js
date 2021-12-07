const canvas = document.getElementById("result");
const preview = document.getElementById("preview");
preview.addEventListener("click", prev);

canvas.height = canvas.width / 1.616;
const ctx = canvas.getContext("2d");
ctx.font = "20px Helvetica";

const image = document.getElementById("imgDisplayed");
const logo = document.getElementById("logo");

function prev(){

      let inName = document.getElementById("inName").value;
      let inCollage = document.getElementById("inCollage").value;
      let inlocation = document.getElementById("inlocation").value;
  

      const name = document.getElementById("name");
      const birth = document.getElementById("collage");
      const fieldYear = document.getElementById("Location");
      const num = document.getElementById("num");

      name.innerHTML = inName;
      collage.innerHTML = incollage;
      location.innerHTML = inlocation;
     

      ctx.fillStyle = "#159";
      ctx.rect(0, 0, 300, 56);
      ctx.fill();
      ctx.fillStyle = "#fff";
      ctx.fillText("Campus Card", 10, 25);
      ctx.font = "16px Arial";
      ctx.fillText("Undergraduate", 15, 45);
      ctx.drawImage(logo, 230, 3, 50, 50);
      ctx.fillStyle = "#000";
      ctx.fillText(name.innerHTML, 110, 90);
      ctx.fillText(collage.innerHTML, 110, 115);
      ctx.fillText(location.innerHTML, 110, 140);
      ctx.fillText("SubN° " + num.innerHTML, 110, 165);
      ctx.drawImage(image, 10, 65, 80, 110);
}

function loadImage(event) {
  const image = document.getElementById("imgDisplayed");
  image.src = URL.createObjectURL(event.target.files[0]);
}

const download = document.getElementById("down");
download.addEventListener("click", function(){

  if(window.navigator.msSaveBlob) {

    window.navigator.msSaveBlob(canvas.msToBlob(), "Card.png");
  } else {

    const a = document.createElement("a");
    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "Card.png";
    a.click();
    document.body.removeChild(a);
  }
});