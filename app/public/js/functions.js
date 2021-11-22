const dataJS = (tag) => document.querySelector(`[data-js="${tag}"]`);
const display = (display, element) =>
  element.setAttribute("style", `display:${display}`);

// [...document.querySelectorAll("li")].map((li) => {
//   li.onauxclick = (e) => {
//     console.log(li.innerHTML);
//   };
// });
