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

/////////////// ignore above this line ////////////////////
function checkElement(Matriks, j, k, m, n) {
  if (j < 0 || k < 0 || j >= m || k >= n) {
    return 0;
  }
  else if (Matriks[j][k] == 1) {
    Matriks[j][k] = 0;//preventing infinite recursion
    /*Checking all element*/
    return 1 + checkElement(Matriks, j + 1, k, m, n)+ checkElement(Matriks, j + 1, k + 1, m, n) + checkElement(Matriks, j, k + 1, m, n) + checkElement(Matriks, j - 1, k+ 1, m, n) +checkElement(Matriks, j - 1, k, m, n) + checkElement(Matriks, j - 1, k - 1, m, n) + checkElement(Matriks, j, k - 1, m, n) + checkElement(Matriks, j + 1, k - 1, m, n);
  }
  return 0;
}

function processData(input,n,m) {
  var result = 0, count = 0;
  for (var j = 0; j < m; j++) {
    for (var k = 0; k < n; k++) {
      count = checkElement(input, j, k, m, n); 
      if (count > result) {
        result = count;
      }
    }
  }
  console.log(result);
}
function main() {
    var n = parseInt(readLine());
    var m = parseInt(readLine());
    var grid = [];
    for(grid_i = 0; grid_i < n; grid_i++){
       grid[grid_i] = readLine().split(' ');
       grid[grid_i] = grid[grid_i].map(Number);
    }
    processData(grid,m,n)
}
