const longWords = (currentValue) => currentValue.every(x => x.length >= 5); 

const oneLongWord = (currentValue) => currentValue.some(x => x.length >= 10); 

const noLongWords = (currentValue) => currentValue.every(x => x.length < 7)