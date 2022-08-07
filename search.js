const lyrics = 'tumi bondhu kala pakhi ami jno ki . bosonto kale tomay bolte parini. sada sada kala kala rong jomeche sada kala';

const doesExist =lyrics.includes('pakhi');
// const doesNotExist = lyrics.includes('Tomay');

console.log(doesExist);
// console.log(doesNotExist);

// simple lurics string dekhano holo 

const lyrics2 = "amar sonar bangla ami tomay valo bashi . chito din tomar akas tomar batas amar parene bajay basi amar sonar bangla mi tomay valo basi";

const searchString = "Bangla";

const searchStringLowerCase = searchString.toLowerCase();
// const lyrics2LowerCase = lyrics2.toLowerCase().includes(searchStringLowerCase);
const lyrics2LowerCase = lyrics2.toLowerCase();
const searchWord = lyrics2LowerCase.includes(searchStringLowerCase);
console.log(searchWord);
 





