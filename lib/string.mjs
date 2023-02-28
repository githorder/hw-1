export const toLower = (string = '') =>
  `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;

export const correctSentence = (string = '') =>
  string
    .replace(/\s+/g, ' ') // removes extra spaces
    .replace(/\s?\.\s?/g, '. ') // removes spaces before period and adds one space after period if present
    .replace(/\s?\,\s?/g, ', ') // removes spaces before comma and adds one space after comma if present
    .trim(); // removes extrac spaces at start and end

export const countWordsIn = (string = '') =>
  correctSentence(string).split(' ').length;

const correctWordForm = (n, textForm) => {
  n = n % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) {
    return textForm[2];
  }
  if (n1 > 1 && n1 < 5) {
    return textForm[1];
  }
  if (n1 == 1) {
    return textForm[0];
  }
  return textForm[2];
};

export const countUniqueWordsIn = (string = '') => {
  const countWordsMap = {};
  let trimmedString = string.trim();
  let word = '';
  let result = '';

  for (let i = 0; i < trimmedString.length; i++) {
    if (
      trimmedString[i] === ' ' ||
      trimmedString[i] === '.' ||
      trimmedString[i] === ','
    ) {
      countWordsMap[word] = countWordsMap[word] ? countWordsMap[word] + 1 : 1;
      word = '';
    } else {
      word += trimmedString[i].toLowerCase();
    }

    if (
      i === trimmedString.length - 1 &&
      trimmedString[i] !== '.' &&
      trimmedString[i] !== ','
    ) {
      countWordsMap[word] = countWordsMap[word] ? countWordsMap[word] + 1 : 1;
      word = '';
    }
  }

  for (let word in countWordsMap) {
    if (word) {
      result += `${word.toLowerCase()} - ${
        countWordsMap[word]
      } ${correctWordForm(countWordsMap[word], ['раз', 'раза', 'раз'])}, `;
    }
  }

  return result.trim();
};
