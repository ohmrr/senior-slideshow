import "./style.css";
import data from './lib/data.json';

interface Student {
  file: string;
  name: string;
  college: string;
}

function updateCarousel(studentOne: Student, studentTwo: Student) {
  document.querySelector<HTMLDivElement>("#carousel")!.innerHTML = `
  <div class="img-container">
    <h1 class="absolute heading">${studentOne.name}</h1>
    <img src="${studentOne.file}" alt="" class="h-full w-[50vw] slide" />
  </div>
  <div class="img-container">
    <h1 class="absolute heading">${studentTwo.name}</h1>
    <img src="${studentTwo.file}" alt="" class="h-[100vh] w-[50vw] slide" />
  </div>
  `;
}

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  setInterval(async () => {
    currentIndex =
      currentIndex + 2 > data.length ? 0 : currentIndex + 2;
    
    const studentOne: Student = {
      file: new URL(`./assets/images/${data[currentIndex].file}`, import.meta.url).href,
      name: data[currentIndex].name,
      college: data[currentIndex].college
    }

    const studentTwo: Student = {
      file: new URL(`./assets/images/${data[currentIndex - 1].file}`, import.meta.url).href,
      name: data[currentIndex - 1].name,
      college: data[currentIndex - 1].college
    }

    updateCarousel(studentOne, studentTwo);
  }, 7000);
});
