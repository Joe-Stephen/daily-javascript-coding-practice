const customCountdown = (seconds) => {
  let count = 0;
  let i = seconds;
  const arr = [];
  const timerId = setInterval(() => {
    arr.push(i);
    console.log(i--);
    count++;
    if (count === seconds) {
      clearInterval(timerId);
      ((arr) => {
        console.log("IIFE is called");
        const timerID2 = setInterval(() => {
          console.log(arr.pop());
          if (arr.length === 0) {
            clearInterval(timerID2);
          };
        }, 1000);
      })(arr);
    };
  }, 1000);
};

customCountdown(5);