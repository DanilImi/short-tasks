function findMissingNumber(arr) {
  const sortedArray = arr.sort((a, b) => a - b);
  const end = sortedArray[sortedArray.length - 1];
  const start = arr[0];
  const bitMap = new Map();
  for (let i = 0; i < end - start + 1; i++) {
    bitMap.set(i, false);
  }

  for (const num of arr) {
    const offsetNumber = num - start;
    bitMap.set(offsetNumber, true);
  }

  for (let i = 0; i < bitMap.size; i++) {
    if (bitMap.get(i) === false) {
      return i + start;
    }
  }

  return -1;
}

//Тесты: файл find-missing-number.test.js
//сложность: O(n log n) из-за sort. Остальное имеет сложность O(n)
/*алгоритм:
    1) сортируем массив, чтобы получить макс и мин значение(возможно можно было сделать это через Math.max и Math.min)
    2) создаём Map и по формуле end - start + 1(находит размерность промежутка) добавляем индексы в Map
    3) делаем сдвиг элементов, тем самым наш Map заполнится значениями и в нём будет одно значение с false. Он и будет отсутствующим
    4) простым перебором находим false и суммируем индекс со стартом

  Мои комментарии: Вообще я видел этот алгоритм ранее и поэтому его и вспомнил. Но я неопытен в крутых задачках) Спасибо за внимание!
*/
module.exports = findMissingNumber;
