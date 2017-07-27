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
function getMedian(val){
   if(val.length === 1){
        return (val[0]).toFixed(1)
    }
    if(val.length%2 === 0){
        let med1 = Math.floor(val.length/2)-1
        return ((val[med1]+val[med1+1])/2).toFixed(1);
    }
    let med = Math.round(val.length/2)-1
    return val[med].toFixed(1);
}
function getSort(arr,num){
        //heaps 
        var result = arr 
        var left = []
        var right = []
       if(result.length === 0){
            return result.concat(num)
        }
        var i = arr.length
        while(i >= 0){
            var index = i -1
            i-=1    
            if(arr[index] <= num  ){  
                left = arr.slice(0,index+1)
                right = arr.slice(index+1,arr.length)
                return left.concat(num).concat(right)
            }else if(arr[index] >= num && arr.length <= 1 ){
               return [num].concat(arr)
            }else if(arr[index] > num && index===0 ){
               return [num].concat(arr)      
            }

        }
}
function main() {
    var n = parseInt(readLine());
    var a = [];
    for(let a_i = 0; a_i < n; a_i++){
       var x = parseInt(readLine());
         a = getSort(a,x)
        console.log(getMedian(a))
    }

}
