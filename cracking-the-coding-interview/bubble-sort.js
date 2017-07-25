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


var result = []
var y = {swap:0 , first:0, last:null, shadow:0 }
function sort(arr){
   
    return arr.reduce((acc,curr,id,arr) => {
       
        if(arr[id]>arr[id+1] && id!==arr.length-1) {
            y.swap+=1
            acc.count+=1
            var c = acc.array[id]
            acc.array[id]=acc.array[id+1]
            acc.array[id+1]=c
            return acc
        } else if(id === arr.length-1 && acc.count > 0){
            return sort(acc.array)
        } else if(id === arr.length-1 && acc.count === 0){
            result = acc.array
            return acc
        } else{
            return acc
        }
    },{array:arr,count:0})
}

function main() {
    var n = parseInt(readLine());
    a = readLine().split(' ');
    a = a.map(Number);
    sort(a)
    console.log(`Array is sorted in ${y.swap} swaps.`)
    console.log(`First Element: ${result[0]}`)
    console.log(`Last Element: ${result[result.length-1]}`)
}
