const headingText = "Lottie Orton";
const subHeadingText = "Junior Software Engineer ";
let i = 0;
let j = 0;
export function typingHeader() {
  const headerElement = document.querySelector("h1");
  const subHeaderElement = document.querySelector("#sub-heading");

  if (i < headingText.length) {
    headerElement.textContent += headingText.charAt(i);
    i++;
    setTimeout(typingHeader, 100);
  } else if (i === headingText.length && j === 0) {
    headerElement.classList.remove("typewriter");
    subHeaderElement.classList.add("typewriter");
    subHeaderElement.textContent += subHeadingText.charAt(j);
    j++;
    setTimeout(typingHeader, 100);
  } else if (j < subHeadingText.length) {
    subHeaderElement.textContent += subHeadingText.charAt(j);
    j++;
    setTimeout(typingHeader, 100);
  }
}
