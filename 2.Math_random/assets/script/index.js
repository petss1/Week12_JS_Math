const alphabet="АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
console.log(alphabet);
console.log(`1. Количество символов в тексте: ${alphabet.length}`);

const title=document.getElementById("main");
const second=()=>{
    const answer1=Math.floor(Math.random()*alphabet.length);
    const answer2=Math.floor(Math.random()*alphabet.length);
    const answer3=Math.floor(Math.random()*alphabet.length);
    const answer4=Math.floor(Math.random()*alphabet.length);

    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);

    const wordAnswer1=alphabet[answer1];
    const wordAnswer2=alphabet[answer2];
    const wordAnswer3=alphabet[answer3];
    const wordAnswer4=alphabet[answer4];
    
    console.log(wordAnswer1+wordAnswer2+wordAnswer3+wordAnswer4);

    const mainWord=`${wordAnswer1}${wordAnswer2}${wordAnswer3}${wordAnswer4}`;
    title.textContent=(`${mainWord}`);
}
second()

