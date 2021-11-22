const allInputs = [...document.getElementsByClassName("input")];
const setValue = (tag, value) => {
  dataJS(`preview_${tag}`).innerHTML = value;
};

allInputs.map((input) => {
  input.addEventListener("blur", (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (!name.includes("phone_")) setValue(name, value);

    if (name == "birth") {
      const element = dataJS(`preview_birth`);
      const date = element.innerHTML.split("-").reverse();
      var setDate = "";

      const select = document.getElementsByClassName("select")[0].dataset.js;
      if (select == "female") setDate = "Nascida <span class='low'>em</span> ";
      else setDate = "Nascido <span class='low'>em</span> ";

      date.map((iten, index) => {
        if (index == 0) setDate += iten;
        if (index == 1) setDate += `/${iten}/`;
        if (index == 2) setDate += iten;
      });
      element.innerHTML = setDate;
    }

    if (name == "email") {
      const element = dataJS(`preview_email`);
      const backup = element.innerHTML;
      element.innerHTML = "Email: ";
      element.innerHTML += backup;
    }

    if (name == "cnh") {
      const element = dataJS(`preview_cnh`);
      const backup = element.innerHTML;
      element.innerHTML = "CNH: ";
      element.innerHTML += backup;
    }

    if (name.includes("phone_")) {
      const element = dataJS(`preview_phone`);
      if (!element.innerHTML.includes("Fone")) {
        var html = "Fone: ";
        element.innerHTML = html;
      }

      if (name == "phone_1") {
        var backup = element.innerHTML;
        const phone = dataJS("preview_phone_1");
        if (!phone) {
          backup += `<span data-js="preview_phone_1">${value}</span>`;
          element.innerHTML = backup;
        } else {
          phone.innerHTML = value;
        }
        if (value.length == 0) {
          phone.innerHTML = "";
        }
      }
      if (name == "phone_2") {
        var backup = element.innerHTML;
        const phone = dataJS("preview_phone_2");
        if (!phone) {
          backup += `<span data-js="preview_phone_2"> / ${value}</span>`;
          element.innerHTML = backup;
        } else {
          phone.innerHTML = " / " + value;
        }
        if (value.length == 0) {
          phone.innerHTML = "";
        }
      }
      if (name == "phone_3") {
        console.log(value.length);
        var backup = element.innerHTML;
        const phone = dataJS("preview_phone_3");
        if (!phone) {
          backup += `<span data-js="preview_phone_3"> / ${value}</span>`;
          element.innerHTML = backup;
        } else {
          phone.innerHTML = " / " + value;
        }
        if (value.length == 0) {
          phone.innerHTML = "";
        }
      }
    }
  });
});
