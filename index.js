const checkbox = document.getElementById("radioCheckbox");
const btnOn = document.getElementById("btnOn");
const btnOff = document.getElementById("btnOff");
const btns = document.querySelectorAll(".radio-btn");

const changeCheckbox = (mode = "off") => {
  [...btns].map((btn) => {
    btn.classList.remove("active");
  });
  if (mode === "on") {
    btnOn.classList.add("active");
    checkbox.checked = true;
    console.log("on click");
  } else {
    btnOff.classList.add("active");
    checkbox.checked = false;
    console.log("off clicked");
  }
  handleChange();
};

const handleChange = () => {
  const status = checkbox.checked;
  if (status) {
    console.log("payload start");
  } else {
    console.log("payload stop");
  }
};
handleChange();

checkbox.addEventListener("change", () => {
  handleChange();
});

btnOn.addEventListener("click", () => {
  changeCheckbox("on");
});
btnOff.addEventListener("click", () => {
  changeCheckbox("off");
});



const checkbox1 = document.getElementById("btnCheckbox1");

      const btn = document.getElementById("btn");

      const handleChange1 = () => {
        btn.classList.remove("active");
        const status = checkbox1.checked;
        if (status) {
          console.log("payload start");
          btn.classList.add("active");
        } else {
          console.log("payload stop");
        }
      };
      handleChange1();

      checkbox1.addEventListener("change", () => {
        handleChange1();
      });