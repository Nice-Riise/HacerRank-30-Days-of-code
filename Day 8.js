function processData(input) {
    input = input.split("\n");
    let n = parseInt(input[0]);
    let phoneBook = [];
    
        for (let i = 0; i < n; i++) {
            let newInput = input[i + 1];
            newInput = newInput.split(" ");
            phoneBook[newInput[0]] = newInput[1];
        }
    for (let i = n + 1; i < input.length; i++){
        let num = phoneBook[input[i]];
        if (num !== undefined) {
            console.log(input[i] + "=" + num);
        } else {
             console.log("Not found");
        }
    }
}