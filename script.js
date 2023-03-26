
import {animate, scroll} from "https://cdn.skypack.dev/motion";

const toggleSwitch = document.querySelector("#switch");

const body = document.querySelector("body");




toggleSwitch.addEventListener("change", switchTheme, false);

function switchTheme(event) {
  if (event.target.checked) {
   body.classList.add("darkmode");
 } else {
   body.classList.remove("darkmode");
 }

}



scroll(
    animate(".square", {
      rotate: 90,
    }),
    { target: document.querySelector(".square") }
  );



  animate("header h1", { opacity: [0, 1] }, { duration: 3 });