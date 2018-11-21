function sum_recursive(num) {
  if (num === 1) return num;
  return num + sum_recursive(num - 1);
}

console.log(sum_recursive(5));
