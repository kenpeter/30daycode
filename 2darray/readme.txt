1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 2 4 4 0
0 0 0 2 0 0
0 0 1 2 4 0




function main() {
  // empty array
  let arr = [];

  // 6 rows
  for(arr_i = 0; arr_i < 6; arr_i++){
    // now build the columns
    arr[arr_i] = readLine().split(' ');
    // each column is Num.....
    arr[arr_i] = arr[arr_i].map(Number);
  }


  // lowest..... why need???
  let total = -63;
  // missing 1
  // rows
  for (let i=0; i < arr.length-2; i++) {
    // columns
    // curSum reset
    for (let j=0, curSum = 0; j < arr[i].length-2; j++) {
      /*
      0, 0, 0

      */
      curSum =
        // start at 0, 0
        arr[i][j] +
        arr[i][j+1] +
        arr[i][j+2] +

        // mid
        arr[i+1][j+1] +

        arr[i+2][j] +
        arr[i+2][j+1] +
        arr[i+2][j+2];

        // we start as low, max holder
        if (curSum > total) total = curSum;
    }
  }
  console.log(total);
}
