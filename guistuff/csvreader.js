const fs = require('fs');
const fileContent  = fs.readFileSync("C:/Users/harsh/OneDrive/Desktop/GUI FINAL/guistuff/csv/trial.csv").toString();
var i = 0;
    setInterval(() => {
        if(i == myArray.length) {
            return;
        }
        console.log(myArray[i]);
        fs.appendFile('judges.csv', `${myArray[i]}\n`, (err) => {
            if (err) throw err;
            console.log(`Row ${i} sent to Judge`);
       });
        i++;
    }, 2000);
    const myArray = fileContent.split('\r\n');



    


