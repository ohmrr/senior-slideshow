import './style.css';
import data from './lib/data.json';

let studentList: Student[] = [];
for (let i = 0; i < data.length; i++) {
  if (data[i].college != '') {
    studentList.push(data[i]);
  }
}

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

const MAX_IMAGES = studentList.length - 1;

function safeIncrement(index: number): number {
  return index + 1 > MAX_IMAGES ? 0 : index + 1;
}

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  setInterval(async () => {
    const nextIndex = safeIncrement(currentIndex);

    const studentOne: Student = {
      file: new URL(`./assets/images/${studentList[currentIndex].file}`, import.meta.url).href,
      name: studentList[currentIndex].name,
      college: studentList[currentIndex].college,
    };

    const studentTwo: Student = {
      file: new URL(`./assets/images/${studentList[nextIndex].file}`, import.meta.url).href,
      name: studentList[nextIndex].name,
      college: studentList[nextIndex].college,
    };

    currentIndex = safeIncrement(safeIncrement(currentIndex));

    updateCarousel(studentOne, studentTwo);
  }, 7000);
});
