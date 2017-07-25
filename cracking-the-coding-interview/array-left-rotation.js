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
const leftshifted = (n,k)  => 
                           (par) => {
                             let r = (k>=n) ? ( (k%n===0) ? 1: n%par.length) : k
                             let right = par.slice(r)
                             let left = par.splice(0,r)
                             return right.concat(left) 
                           }
function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    console.log(leftshifted(n,k)(a).join(' '))

}
