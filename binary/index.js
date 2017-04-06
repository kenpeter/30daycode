process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
  // parse int, read line
  var n = parseInt(readLine());

  // toString, 2 binary...
  var s = n.toString(2);

  //console.log('--num--');
  //console.log(s);

  //create 2 variables, one is to count 1s and the other 		to store them
  // count_how_many_ones
  var count = 0;
  // max is consecutive ones
  var max = 0;

  // how many 1 and 0
  for(var i=0; i<s.length; i++)
  {
    //if 1 is detected in s, add 1 to count. Also, 				store it to max
    if(s[i] == 1)
    {
      // if 1 continues,
      count++;
      // if greater, remember it.
      if(count > max)
      {
        max = count;
      }
    }
    else {
      // reset it
      count = 0;
    }
  }
  console.log(max);
}
