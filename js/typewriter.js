const headingText = "Hi, I'm Lottie Orton";
const subHeadingText = "Junior Software Engineer";
let i = 0;
let j = 0;
export function typingHeader() {
  const headerElement = document.querySelector("h1");
  const subHeaderElement = document.querySelector("#sub-heading");
  subHeaderElement.classList.add("typewriter");

  if (i < headingText.length) {
    headerElement.textContent += headingText.charAt(i);
    i++;
    setTimeout(typingHeader, 100);
  } else if (j < subHeadingText.length) {
    headerElement.classList.remove("typewriter");
    subHeaderElement.textContent += subHeadingText.charAt(j);
    j++;
    setTimeout(typingHeader, 100);
  } else if (j === subHeadingText.length) {
    subHeaderElement.classList.remove("typewriter");
    headerElement.classList.add("typewriter");
  }
}
