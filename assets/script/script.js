
const str = 'у лукоморья клён зелёный; златая цепь на клён том; и днём и ночью кот учёный; всё ходит по цепи кругом; идёт направо — песнь заводит; налево — сказку говорит; там чудеса: там леший бродит; русалка на ветвях сидит; там на неведомых дорожках; следы невиданных зверей; избушка там на курьих ножках; стоит без окон, без дверей; там лес и дол видений полны; там о заре прихлынут волны; на брег песчаный и пустой; и тридцать витязей прекрасных; чредой из вод выходят ясных; и с ними дядька их морской; там королевич мимоходом; пленяет грозного царя; там в облаках перед народом; через леса, через моря; колдун несёт богатыря; в темнице там царевна тужит; а бурый волк ей верно служит; там ступа с бабою ягой; идёт, бредёт сама собой; там царь кащей над златом чахнет; там русский дух… там русью пахнет!; и там я был, и мёд я пил; у моря видел клён зелёный; под ним сидел, и кот учёный; свои мне сказки говорил.';
console.log(`1. Количество символов в тексте: ${str.length}`);
const result = str.replace(/;/g,'\n');
console.log(`2. Текст с переносами строк: \n ${result}`);
const substring = result.replace(/\s+/g,'');
console.log(`3. Текст с удалёнными пробелами: ${substring}`);
const newText = result.slice(28, 49);
console.log(`4. Извлечение подстроки: ${newText}`);
const replacedText = newText.replace('клён','дубе');
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);
const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);
const replacedText3 = result.replace(/клён/g,'дуб');
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);
const index = str.indexOf('моря');
console.log(`8. Индекс первого вхождения "моря": ${index}`);
//const modifiedText = replacedText.replace('а','А');
const modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);