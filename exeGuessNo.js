function randomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)+min);
}
let number = randomInt(1, 100);
let chances = 0;
let ip;
do{
    ip = prompt("Guess the number: ");
    if(ip<number){
        console.log("this guess is wrong the actual number is greater than ",ip);
        chances ++;
    }
    else if(ip>number){
        console.log("this guess is wrong the actual number is less than ",ip);
        chances ++;
    }
}while(ip != number );
if(ip == number){
    let score = 100 - chances;
    console.log("Yeah you have guessed correct number and your score is ",score," and actual number is ",number);
}
