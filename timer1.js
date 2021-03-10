const timer = process.argv.slice(2);

for (let i = 0; i < timer.length; i++) {
  timer[i];
  if (timer < 0 || timer === null || timer === isNaN) {
    process.exit(0);
  }
  let number = (timer[i] * 1000);
  setTimeout(() => {
    process.stdout.write('\x07');
  }, number);
}