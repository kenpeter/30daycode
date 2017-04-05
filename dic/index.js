function processData(input) {
  let arr = input.split("\n");
  // look, be very careful for the input. Need to change type....
  // default is string
  let entryNum = parseInt(arr[0]);
  // https://stackoverflow.com/questions/7196212/how-to-create-dictionary-and-add-key-value-pairs-dynamically-in-javascript
  let dist = {};
  let row = '';
  let tmpRow = '';

  let name = '';
  let phone = '';

  // build dic
  for(let i=1; i<=entryNum; i++) {
    row = arr[i];
    tmpRow = row.split(' ');
    name = tmpRow[0];
    phone = tmpRow[1];

    // object and array exchange
    // https://stackoverflow.com/questions/882727/is-there-a-way-to-use-variable-keys-in-a-javascript-object-literal
    dist[name] = phone;
  }


  //console.log('--- test ---');
  //console.log(1+entryNum);
  //console.log(arr.length);

  //
  let query = '';
  let out = '';
  for(let i=1+entryNum; i<arr.length; i++) {
    query = arr[i];
    if(dist[query] !== undefined) {
      out = query + '=' + dist[query];
      console.log(out);
    }
    else {
      out = 'Not found';
      console.log(out);
    }
  }

  //console.log('--- dist ---');
  //console.log(dist);

}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
