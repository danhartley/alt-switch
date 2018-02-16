
export const stopwatch = (iterator, delay, onNext, onDone) => {
  let timerId = 0;
  const stop = () => { clearInterval(timerId); };
  const start = () => { 
    timerId = timer(iterator, delay, onNext);
  };
  const timer = (iterator, delay, onNext) => {
    const timerId = setInterval(() => {
      let item = iterator.next();
      if(item.done) {
        stop();
        onDone();
      } else {
        onNext(item);
      } 
    }, delay);
    return timerId;
  };
  return {
    stop,
    start
  };
};