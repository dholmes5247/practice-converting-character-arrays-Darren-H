/*Task 1: Decode the Following Reversed Messages 

Use .split(''), reverse.(‘’) and  .join('') to convert messages between strings and 
arrays dynamically. Then log the messages. */



// 1. Message 1: " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks 
// gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam 
// gnidoC" 

let message1 = " !yako eb ll'uoy dna ,gniog peeK !sgnittes fo yteirav a ni slliks gnidoc esu osla nac uoY !ti teg ll'uoy ,tsisrep uoy fi tub ,tsrif ta drah mees yam gnidoC" ;
let flippedString = message1.split('').reverse().join('');
console.log(flippedString); // Reversed order of string

// 2. Message 2: "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB"

let messgage2 = "!ecitcarp htiw retteb teg ll‘uoy ,emit ekaT .tsrif ta drah leef lliw gnitirw edoc tuB";
let flippedString2 = messgage2.split('').reverse().join('');
console.log(flippedString2);

// 3. "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY" 

let reversedMessage = "!elpoep rehto morf tnereffid on era uoy ,elbuort evah uoy fI .lanoisseforp a ekil leef ot evah t'nod uoY";
let deRevMessage = reversedMessage.split('').reverse().join('');
console.log(deRevMessage); // 

//4. ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ" 

let encryptMess = ".rettam llits yeht ,smargorp llams etirw ylno nac uoy fI .tnemom tcefrep eht rof tiaw t'noD .yadot trats tsuJ";
let unEncryptMess = encryptMess.split('').reverse().join('');
console.log(unEncryptMess);  

/* Task 2: Write your own reverse messages 
1. First, write your own short messages of inspiration (without reversing them). 
2. Then, use .split(''), reverse.(‘’) and  .join('') to convert messages between 
strings and arrays dynamically so that you have a reverse output.  
3. Then log the messages. */

let messages = [
    "when the sun shines there is no reason for worry",
    "if you're gonna dance you have to pay the fiddler",
    "you don't buy beer you rent it"
];
for(let i = 0; i < messages.length; i++) {
    let reversedMessage = messages[i].split('').reverse().join('');
    console.log(reversedMessage);
}


