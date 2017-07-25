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
var contactList = {}
function main() {
    var n = parseInt(readLine());
    
    for(var a0 = 0; a0 < n; a0++){
        var op_temp = readLine().split(' ');
        var op = op_temp[0];
        var contact = op_temp[1];
        if(op === 'add'){
            addContact(contact)
            continue;
        }
        
        contactList[contact] ? console.log(contactList[contact]) : console.log(0)   
        
    }  
   
}

function addContact(text){
    i=1
    const a = 0;
    while(i<=text.length){
        var key = text.substring(0,i)
        contactList[key] = contactList[key] ? contactList[key]+1 : 1;
        i++
    }   
}