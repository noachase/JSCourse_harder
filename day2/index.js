let namePerson = prompt('Введите имя');

    namePerson.match(/Артем/) && namePerson.match(/тем$/) 
    ? alert(namePerson+ 'директор') 
    : namePerson.match(/Макс/) && namePerson.match(/им$/) 
    ? alert(namePerson+ ' препод') : alert(namePerson + ' студент');
// namePerson === 'Art' ? console.log('dir') : namePerson === 'Max' ? console.log('prep') : console.log('stud');

let lang = 'eng',
    daysRus = 'Ponedelnik, Vtornik',
    daysEng = 'Monday, Tuesday';

if (lang === 'ru'){
    console.log(daysRus);
} else if(lang === 'eng') {
    console.log(daysEng);
}

switch (lang) {
    case 'ru':
        console.log(daysRus)
        break;
    case 'eng':
        console.log(daysEng)
        break;
}

let aaa = [
    ['Ponedelnik', 'Vtornik'],
    ['Monday', 'tuesday']
];

let arrRus = aaa[0],
    arrEng = aaa[1];

function switchDaysLang (arrRus) {
    arrRus.forEach(el => {
        console.log(el);
    });
}
function switchDaysLang (arrEng) {
    arrEng.forEach(el => {
        console.log(el);
    });
}
switchDaysLang(arrRus);
switchDaysLang(arrEng);

// let a = prompt('en or ru?');
// let lang = [
//     ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// ];
// // consoleen.log(en);
// a === 'ru' ? (console.log(lang[0])) : 'en' ? (console.log(lang[1])) : console.log('Язык по умолчанию - русский. Deafult language is russian, update page to choose again');
