const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Yay!");
  }, 2000)
});

dieToss = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const promiseToss = new Promise((resolve, reject) => {
  let n = dieToss();
  if (n === 1) {
    resolve(n);
  } else {
    reject(n);
  }
})

promiseToss.then((toss) => {
  console.log('Woot woot it\'s a ' + toss + '.');
}, (toss) => {
  console.log('Roll again, Beethoven, you threw a ' + toss + '.');
});