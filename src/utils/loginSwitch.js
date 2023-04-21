import { ref } from "vue";
let flag = ref(true);
const loginSwitch = () => {
  const pre_box = document.querySelector(".pre-box");
  const img = document.querySelector("#avatar");
  if (flag.value) {
    pre_box.style.transform = "translateX(100%)";
    pre_box.style.backgroundColor = "#c9e0ed";
    img.src = "/src/assets/img/wuwu.jpeg";
  } else {
    pre_box.style.transform = "translateX(0%)";
    pre_box.style.backgroundColor = "#edd4dc";
    img.src = "/src/assets/img/waoku.jpg";
  }
  flag.value = !flag.value;
};

export default loginSwitch;
