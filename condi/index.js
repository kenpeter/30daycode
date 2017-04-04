// Run
main();

function main() {
  //var N = parseInt(readLine());
  var N = 4;

  if(isOdd(N)) {
    console.log('Weird');
  }
  else if( isEven(N) && (N>=2 && N<=5) ) {
    console.log('Not Weird');
  }
  else if( isEven(N) && (N>=6 && N<=20) ) {
    console.log('Weird');
  }
  else if( isEven(N) && N>20 ) {
    console.log('Not Weird');
  }
}


// https://stackoverflow.com/questions/5016313/how-to-determine-if-a-number-is-odd-in-javascript
function isOdd(num) { return num % 2; }

function isEven(num) { return !(num % 2); }
