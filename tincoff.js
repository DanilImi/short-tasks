// var readline = require("readline");
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let total = 0;
// process.stdin.on("end", () => {
//   console.log(total);
//   process.exit(0);
// });
// rl.on("line", function (data) {
//   data = data.split(" ");
//   total += parseInt(data[0]) || 0;
//   total += parseInt(data[1]) || 0;
// });

/*
OK
OK	
CE
Compilation Error	Ошибка компиляции
RT
Run-Time Error	Ошибка при работе программы
TL
Time-Limit Exceeded	Ошибка превышение лимита времени
PE
Presentation Error	Ошибка неправильного формата результата
WA
Wrong Answer	Неправильный ответ
CF
Check Failed	Внутренняя ошибка проверки
PT
Partial Solution	Частичное решение
AC
Accepted for Testing	Принято на проверку
IG
Ignored	Решение проигнорировано
DQ
Disqualified	Решение дисквалифицировано
PD
Pending	Ожидает проверки
ML
Memory Limit Exceeded	Ошибка превышения лимита памяти
SE
Security Violation	Ошибка нарушения ограничений безопасности
SV
Style Violation	Ошибка нарушения стиля оформления исходного кода
WT
Wall Time Limit Exceeded	Ошибка превышения лимита реального времени
PR
Pending Review	Ожидает подтверждения
RJ
Rejected	Отклонено
SK
Skipped	Пропущено
SY
Synchronization error	Ошибка синхронизации
SM
Summoned for defence	Вызван на защиту
*/

// var readline = require("readline");
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// let total = 0;

// rl.on("close", () => {
//   console.log(total);
//   process.exit(0);
// });

// rl.on("line", function (data) {
//   data = data.split(" ");
//   total += parseInt(data[0]);
//   total += parseInt(data[1]);

//   rl.close();
// });
var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//1 task
// Функция для нахождения максимального количества пятерок в выбранном отрезке
function findMaxFives(n, grades) {
  let maxFives = 0; // Максимальное количество пятерок
  let currentFives = 0; // Текущее количество пятерок
  let left = 0; // Левая граница текущего отрезка

  // Проходим по всем оценкам
  for (let right = 0; right < n; right++) {
    // Если текущая оценка равна 5, увеличиваем текущее количество пятерок
    if (grades[right] === 5) {
      currentFives++;
    }

    // Пока в отрезке есть оценки 2 или 3, сдвигаем левую границу
    while ((grades[right] === 2 || grades[right] === 3) && left < right) {
      left++;
    }

    // Если текущее количество пятерок больше максимального, обновляем максимальное количество
    if (currentFives > maxFives) {
      maxFives = currentFives;
    }

    // Если длина текущего отрезка больше 7, сдвигаем левую границу
    if (right - left >= 6) {
      if (grades[left] === 5) {
        currentFives--;
      }
      left++;
    }
  }

  // Если максимальное количество пятерок в отрезке равно 0, значит нет отрезка удовлетворяющего условиям
  if (maxFives === 0) {
    return -1;
  }

  return maxFives;
}

rl.on("line", (nInput) => {
  const n = parseInt(nInput);
  rl.on("line", (gradesInput) => {
    const grades = gradesInput.split(" ").map(Number);

    const maxFives = findMaxFives(n, grades);
    console.log(maxFives);
    rl.close();
  });
});

// rl.question("Введите количество оценок (n): ", function (nInput) {
//   const n = parseInt(nInput);

//   rl.question(
//     "Введите оценки за каждый день через пробел: ",
//     function (gradesInput) {
//       const grades = gradesInput.split(" ").map(Number);

//       const maxFives = findMaxFives(n, grades);
//       console.log(`${maxFives}`);

//       rl.close();
//     }
//   );
// });
//Task1
// var readline = require("readline");

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });
// //1 task
// // Функция для нахождения максимального количества пятерок в выбранном отрезке
// function findMaxFives(n, grades) {
//   let maxFives = 0; // Максимальное количество пятерок
//   let currentFives = 0; // Текущее количество пятерок
//   let left = 0; // Левая граница текущего отрезка

//   // Проходим по всем оценкам
//   for (let right = 0; right < n; right++) {
//     // Если текущая оценка равна 5, увеличиваем текущее количество пятерок
//     if (grades[right] === 5) {
//       currentFives++;
//     }

//     // Пока в отрезке есть оценки 2 или 3, сдвигаем левую границу
//     while ((grades[right] === 2 || grades[right] === 3) && left < right) {
//       left++;
//     }

//     // Если текущее количество пятерок больше максимального, обновляем максимальное количество
//     if (currentFives > maxFives) {
//       maxFives = currentFives;
//     }

//     // Если длина текущего отрезка больше 7, сдвигаем левую границу
//     if (right - left >= 6) {
//       if (grades[left] === 5) {
//         currentFives--;
//       }
//       left++;
//     }
//   }

//   // Если максимальное количество пятерок в отрезке равно 0, значит нет отрезка удовлетворяющего условиям
//   if (maxFives === 0) {
//     return -1;
//   }

//   return maxFives;
// }

// rl.question("Введите количество оценок (n): ", function (nInput) {
//   const n = parseInt(nInput);

//   rl.question(
//     "Введите оценки за каждый день через пробел: ",
//     function (gradesInput) {
//       const grades = gradesInput.split(" ").map(Number);

//       const maxFives = findMaxFives(n, grades);
//       console.log(`${maxFives}`);

//       rl.close();
//     }
//   );
// });

//2 TASK

// var readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let n, m;
// let matrix = [];

// rl.question("введи матрицу: ", (nm) => {
//   [n, m] = nm.split(" ").map(Number);
//   readMatrix(n, m);
// });

// function readMatrix(rows, cols) {
//   let row = 0;
//   rl.on("line", (line) => {
//     matrix.push(line.split(" ").map(Number));
//     row++;
//     if (row === rows) {
//       rotateMatrix();
//       rl.close();
//     }
//   });
// }

// function rotateMatrix() {
//   for (let i = 0; i < m; i++) {
//     let newRow = [];
//     for (let j = n - 1; j >= 0; j--) {
//       newRow.push(matrix[j][i]);
//     }
//     console.log(newRow.join(" "));
//   }
// }

//Task 2 update
// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let n, m;
// let matrix = [];

// rl.question("введи матрицу: ", (nm) => {
//   [n, m] = nm.split(" ").map(Number);
//   readMatrix(n, m);
// });

// function readMatrix(rows, cols) {
//   let row = 0;
//   rl.on("line", (line) => {
//     matrix.push(line.split(" ").map(Number));
//     row++;
//     if (row === rows) {
//       rotateMatrix();
//       rl.close();
//     }
//   });
// }

// function rotateMatrix() {
//   for (let i = 0; i < m; i++) {
//     let newColumn = [];
//     for (let j = n - 1; j >= 0; j--) {
//       newColumn.push(matrix[j][i]);
//     }
//     console.log(newColumn.join(" "));
//   }
// }

//Task 3

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let directories = [];

// rl.question(
//   "Введите количество директорий и их абсолютные пути: ",
//   (answer) => {
//     const n = parseInt(answer);

//     rl.prompt();

//     rl.on("line", (input) => {
//       directories.push(input.trim());
//       if (directories.length === n) {
//         printDirectories(directories);
//         rl.close();
//       } else {
//         rl.prompt();
//       }
//     });
//   }
// );

// function printDirectories(directories) {
//   const directoryTree = {};

//   for (const directory of directories) {
//     const path = directory.split("/");
//     let currentLevel = directoryTree;

//     for (const dir of path) {
//       if (!currentLevel[dir]) {
//         currentLevel[dir] = {};
//       }
//       currentLevel = currentLevel[dir];
//     }
//   }

//   function printTree(tree, depth = 0) {
//     const keys = Object.keys(tree).sort();
//     for (const key of keys) {
//       console.log("  ".repeat(depth) + key);
//       printTree(tree[key], depth + 1);
//     }
//   }

//   printTree(directoryTree);
// }

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question("Введите стоимость тарифа (A), размер тарифа в мегабайтах (B), стоимость каждого лишнего мегабайта (C), и размер интернет-трафика в следующем месяце (D): ", function(input) {
//   var inputArray = input.split(" ");
//   var A = parseInt(inputArray[0]);
//   var B = parseInt(inputArray[1]);
//   var C = parseInt(inputArray[2]);
//   var D = parseInt(inputArray[3]);

//   // Оплата за базовый тариф
//   var totalCost = A;

//   // Если использованный трафик превышает базовый лимит, добавляем стоимость дополнительного трафика
//   if (D > B) {
//     var extraData = D - B;
//     totalCost += extraData * C;
//   }

//   console.log("Суммарные расходы Кости на интернет: " + totalCost + " рублей");

//   rl.close();
// });
