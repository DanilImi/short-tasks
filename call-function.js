const counterFunction = (() => {
  let counter = 0;
  return () => console.log(++counter);
})();

console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
console.log(counterFunction());
