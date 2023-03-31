import "./style.css";
import data from './lib/data.json';

interface Student {
  file: string;
  name: string;
  college: string;
}

function updateCarousel(studentOne: Student, studentTwo: Student) {
  document.querySelector<HTMLDivElement>("#carousel")!.innerHTML = `
    <img src=".src/assets/images/${studentOne.file}" alt="" class="h-[100vh] w-[50vw] rounded-md shadow-2xl fade-in-out shadow-blue-500/30" />
    <img src=".src/assets/images/${studentTwo.file}" alt="" class="h-[100vh] w-[50vw] rounded-md shadow-2xl fade-in-out shadow-blue-500/30" />
  `;
}

let currentImageIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
  setInterval(() => {
    currentImageIndex =
      currentImageIndex + 2 > data.length ? 0 : currentImageIndex + 2;
    updateCarousel(data[currentImageIndex], data[currentImageIndex - 1]);
  }, 7000);
});
