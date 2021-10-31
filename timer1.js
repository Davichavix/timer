let times = process.argv.slice(2);

const timer = function(array) {
  if (!array.length) return;
    for (const element of array) {
      if (!isNaN(element) && element > 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, element * 1000);
    }
  }
}
timer(times);