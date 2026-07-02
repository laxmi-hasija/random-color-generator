let generatecolor= function(){
let red=Math.floor(Math.random()*256);
let green= Math.floor(Math.random()*256);
let blue=Math.floor(Math.random()*256);
 let hex =
  (
    "#" +
    red.toString(16).padStart(2, "0") +
    green.toString(16).padStart(2, "0") +
    blue.toString(16).padStart(2, "0")
  ).toUpperCase();
let color=`rgb(${red},${green},${blue})`;
return {red , blue , green , color , hex};
}


let btn=document.querySelector(".btn");
btn.addEventListener("click", function(){
  let colorData=generatecolor();
  let rgbdisplay= document.querySelector(".rgb-color-display");
  let rgbvalue= `${colorData.red}, ${colorData.green}, ${colorData.blue}`
  rgbdisplay.innerText= rgbvalue;
  let colorpreview=document.querySelector(".colorpreview");
  colorpreview.style.backgroundColor=colorData.color;
let hexValues = document.querySelectorAll(".hex-value-display");

hexValues.forEach((element) => {
    element.innerText = colorData.hex;
});

}
);
let hexcopyIcon = document.querySelector(".hex-copy");

hexcopyIcon.addEventListener("click", ()=>{
  let hex = document.querySelector(".hex-value-display").innerText;
  navigator.clipboard.writeText(hex);
})
let rgbcopyIcon = document.querySelector(".rgb-copy");

rgbcopyIcon.addEventListener("click", ()=>{
  let rgb = document.querySelector(".rgb-color-display").innerText;
  navigator.clipboard.writeText(rgb);
})

