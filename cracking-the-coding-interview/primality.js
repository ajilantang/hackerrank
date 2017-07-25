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
function isPrime(number){
  if(number <=1){
      return "Not prime"
  }
  for(var i = 2 ; i<number ; i++){
      if(number%i === 0){
          return "Not prime"
      }
  }
  return "Prime"
}

function main() {
    var p = parseInt(readLine());
    for(var a0 = 0; a0 < p; a0++){
        var n = parseInt(readLine());
        
    console.log(isPrime(n))
    }
}
