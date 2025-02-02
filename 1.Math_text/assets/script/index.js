const text="у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил";
const title1=document.getElementById("main1");
const screan=()=>{
    const answer=(text.length);
    title1.textContent=(`${answer}`);
}
screan()

console.log(text);
console.log(`1. Количество символов в тексте: ${text.length}`);

const title2=document.getElementById("main2");
const result=text.replace(/;/g,";\n")
console.log(`2. Текст с переносами строк: \n ${result}`);
title2.textContent=(`${result}`);

const title3=document.getElementById("main3");
const substring=text.replace(/\s+/g, '');
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
title3.textContent=(`${substring}`);

const title4=document.getElementById("main4");
const newText=text.substring(28,50);
console.log(`4. Извлечение подстроки: ${newText}`);
title4.textContent=(`${newText}`);

const title5=document.getElementById("main5");
const replacedText=newText.replace("клён", "дубе");
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
title5.textContent=(`${replacedText}`);

const title6=document.getElementById("main6");
const replacedText2=result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
title6.textContent=(`${replacedText2}`);

const title7=document.getElementById("main7");
const replacedText3=result.replace(/клён/g,"дуб");
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
title7.textContent=(`${replacedText3}`);

const title8=document.getElementById("main8");
const index=text.indexOf("моря");
console.log(`8. Индекс первого вхождения "моря": ${index}`);
title8.textContent=(`${index}`);

const title9=document.getElementById("main9");
const modifiedText=replacedText.charAt(0).toUpperCase()+replacedText.slice(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
title9.textContent=(`${modifiedText}`);


