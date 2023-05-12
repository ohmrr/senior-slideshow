import './style.css';
import data from './lib/data.json';

interface Student {
  file: string;
  name: string;
  college: string;
  index: number;
}

function updateCarousel(studentOne: Student, studentTwo: Student) {
  document.querySelector<HTMLDivElement>('#carousel')!.innerHTML = `
  <div class="img-container">
    <h1 class="absolute student-name">${studentOne.name}</h1>
    <img src="${
      studentOne.file
    }" alt="" class="h-full w-full object-cover max-h-screen slide" />
    <div class="bg-black absolute bottom-0 p-4 w-full">
      <h1 class="student-college">${
        studentOne.college ? studentOne.college : 'Undecided'
      }</h1>
    </div>
  </div>
  <div class="img-container">
    <h1 class="absolute student-name">${studentTwo.name}</h1>
    <img src="${
      studentTwo.file
    }" alt="" class="h-full w-full object-cover max-h-screen slide" />
    <div class="bg-black absolute bottom-0 p-4 w-full">
      <h1 class="student-college">${
        studentTwo.college ? studentTwo.college : 'Undecided'
      }</h1>
    </div>
  </div>
  `;
}

const MAX_IMAGES = data.length - 1;

function safeIncrement(index: number): number {
  return index + 1 > MAX_IMAGES ? 0 : index + 1;
}

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  setInterval(async () => {
    const nextIndex = safeIncrement(currentIndex);

    const studentOne: Student = {
      file: new URL(`./assets/images/${data[currentIndex].file}`, import.meta.url).href,
      name: data[currentIndex].name,
      college: data[currentIndex].college,
      index: currentIndex,
    };

    const studentTwo: Student = {
      file: new URL(`./assets/images/${data[nextIndex].file}`, import.meta.url).href,
      name: data[nextIndex].name,
      college: data[nextIndex].college,
      index: nextIndex,
    };

    currentIndex = safeIncrement(safeIncrement(currentIndex));

    updateCarousel(studentOne, studentTwo);
  }, 7000);
});
