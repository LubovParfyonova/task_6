// fizz buzz

let count = 0;
const MAX = 100;

while (count++ < MAX){
    if (count % 3 === 0 && count % 5 === 0){
        console.log('fizz buzz');
    }else if (count % 3 === 0){
        console.log('fizz');
    }else if (count % 5 === 0){
        console.log('buzz');
    }else{
        console.log(count);
    }
}
console.log('Finish game');