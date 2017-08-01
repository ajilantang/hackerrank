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





const getIndex = (value,idx) => (arr) => {
    if(value <= 0 || arr.indexOf(value) < 0 ){
        return
    }
    console.log((idx+1)+ " "+ (arr.indexOf(value)+idx+2))
    
 }
function main() {
    var t = parseInt(readLine());
    var a =[]
    for(var a0 = 0; a0 < t; a0++){
        var m = parseInt(readLine());
        var n = parseInt(readLine());
        a = readLine().split(' ');
        a = a.map(Number);
         
        var b = a;
        b.map((data,idx,array) => getIndex(m-data,idx)(b.slice(idx+1,b.length)))
       
    }

}
