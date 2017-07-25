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

function main() {
    var s = parseInt(readLine());
    const stairCombinations = stairStepper([1,2,3]);
    for(var a0 = 0; a0 < s; a0++){
        var n = parseInt(readLine());
        console.log(stairCombinations(n))
    }

function stairStepper(stepSizes) {
    let answers = [1,1];
    return function(numSteps) {
        if(numSteps < 0) {
            return 0;
        }else if(typeof answers[numSteps] === 'undefined') {
            answers[numSteps] = stepSizes.reduce((totalSteps, stepSize) => totalSteps + stairCombinations(numSteps-stepSize), 0);
        }
        return answers[numSteps];
    };
}
 
} 


