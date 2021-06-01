let seconds = process.argv.slice(2) 

const beep = () => {

  for(let second of seconds) {
    second = Number(second);

    if(isNaN(second) || !second){
      return '';
    }

    if(second < 0){
      second++;
    }

    setTimeout(() => {
      //process.stdout.write('\x07'); -> Beep wasn't working
      process.stdout.write('.');
    }, second * 1000)
  }
  totalSeconds = (seconds[seconds.length - 1]) * 1000;

  setTimeout(() => {
    process.stdout.write('\n');
  }, totalSeconds)
}

beep(seconds)