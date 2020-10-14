function processData(input) {
    //Enter your code here
    let inputArr = input.split("\n");
    let newInputArr = inputArr.filter(entry => {
        return entry.includes(' ');
    })
    inputArr.shift()
    let queryArr = inputArr.filter(entry => {
        return !entry.includes(' ');
    })
    let inputObj = {};
    for (let i = 0; i < newInputArr.length; i++) {
        var entryItem = inputArr[i].split(" ");
        var entryItemName = entryItem[0]
        inputObj[entryItemName] = entryItem[1];
    }
    queryArr.forEach(query => {
        if (inputObj[query] == undefined) {
          console.log("Not found");
          return;
        }
        console.log(`${query}=${inputObj[query]}`)
    })
} 

processData(`3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry`)