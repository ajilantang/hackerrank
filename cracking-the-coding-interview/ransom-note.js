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

const getRansom = (match) => (container) => {
    return match.reduce((acc,curr) => {
        var index = acc.array.indexOf(curr)
        if(index >= 0){
            acc.array.splice(index,1)
            return acc
        } 
         acc.value = "No"
        acc.array = []
        return acc
    },{value:"Yes",array:container})
}
function main() {
    var m_temp = readLine().split(' ');
    var m = parseInt(m_temp[0]);
    var n = parseInt(m_temp[1]);
    magazine = readLine().split(' ');
    ransom = readLine().split(' ');
    console.log(getRansom(ransom)(magazine).value) 

}

