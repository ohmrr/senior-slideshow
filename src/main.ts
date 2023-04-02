import './style.css';
import data from './lib/data.json';

interface Student {
  file: string;
  name: string;
  college: string;
}

function updateCarousel(studentOne: Student, studentTwo: Student) {
  document.querySelector<HTMLDivElement>('#carousel')!.innerHTML = `
  <div class="img-container">
    <h1 class="absolute student-name">${studentOne.name}</h1>
    <img src="${
      studentOne.file
    }" alt="" class="h-full w-full object-cover max-h-screen slide" />
    <div class="bg-white absolute bottom-0 p-4 w-full">
      <h1 class="student-college">${studentOne.college ? studentOne.college : 'Undecided'}</h1>
    </div>
  </div>
  <div class="img-container">
    <h1 class="absolute student-name">${studentTwo.name}</h1>
    <img src="${
      studentTwo.file
    }" alt="" class="h-full w-full object-cover max-h-screen slide" />
    <div class="bg-white absolute bottom-0 p-4 w-full">
      <h1 class="student-college">${studentTwo.college ? studentTwo.college : 'Undecided'}</h1>
    </div>
  </div>
  `;
}

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  setInterval(async () => {
    const nextIndex = (currentIndex + 1) % data.length;

    const studentOne: Student = {
      file: new URL(`./assets/images/${data[currentIndex].file}`, import.meta.url).href,
      name: data[currentIndex].name,
      college: data[currentIndex].college,
    };

    const studentTwo: Student = {
      file: new URL(`./assets/images/${data[nextIndex].file}`, import.meta.url).href,
      name: data[nextIndex].name,
      college: data[nextIndex].college,
    };

    currentIndex = (currentIndex + 2) % data.length;
    if (currentIndex === data.length - 1 && data.length % 2 === 1) currentIndex = 0;

    updateCarousel(studentOne, studentTwo);
  }, 7000);
});
