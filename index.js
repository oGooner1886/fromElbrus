
// import translate from './translate';
const form = document.querySelector('#form')
const content1 = document.querySelector('#content1')
const content2 = document.querySelector('#content2')

form.addEventListener('submit', (event) => {
    addWordOnDictionary(event);
    translateWord(event);
    init();
});

// form.addEventListener('submit', addWordOnDictionary, translateWord)
// form.onclick = () => alert('yes')

const dictionaryRus = [
    // {word: 'Привет'},
    // {word: 'Пока'},
]
const dictionaryEng = [
    // {word: 'Privet'},
    // {word: 'Poka'},
]

function init(){
    let rus = '';
    for(let i = 0; i < dictionaryRus.length; i++){
        const tech = dictionaryRus[i]
        rus += `
            <div class="dictionary__element dictionary__element-1">
            <div class="dictionary__content dict-rus">${tech.word} </div>
            </div>
        `
    }
    content1.innerHTML = rus;

    let eng = '';
    for(let i = 0; i < dictionaryEng.length; i++){
        const tech = dictionaryEng[i]
        eng += `
            <div class="dictionary__element dictionary__element-2">
            <div class="dictionary__content dict-eng">${tech.word} </div>
            </div>
        `
    }
    content2.innerHTML = eng;
}
function addWordOnDictionary(event){
    event.preventDefault()
    const addText = event.target.addText;
    const newRuDictionary = {
        word: addText.value,
    }
    dictionaryRus.push(newRuDictionary)
    
    
}
function translateWord(event){
    event.preventDefault()
    const addText = event.target.addText;
    const newEngDictionary = {
        word: translate(addText.value),
    }
    dictionaryEng.push(newEngDictionary)
    addText.value = '';
    

}
function translate(word){
	let answer = '';
	const converter = {
		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
		'э': 'e',    'ю': 'yu',   'я': 'ya',
 
		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
	};
 
	for (let i = 0; i < word.length; ++i ) {
		if (converter[word[i]] == undefined){
			answer += word[i];
		} else {
			answer += converter[word[i]];
		}
	}
 
	return answer;
    
}

// export {translate};

init()





// function transcript(a){
//     let res = '';
//     let dict = {
//     'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
//     'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
//     'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
//     'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
//     'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
//     'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
//     'э': 'e',    'ю': 'yu',   'я': 'ya',

//     'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
//     'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
//     'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
//     'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
//     'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
//     'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
//     'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
// };
//     for (let i = 0; i < a.length; ++i){
//         res += dict[a[i]];
//     }
//     return res;
// }
// function add (a) {
//     document.querySelector('.dictionaryElement').innerHTML
// }