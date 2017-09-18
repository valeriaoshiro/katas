function getCount(str) {
  var vowelsCount = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var arr = str.split('');
  arr.forEach(letter => {
    if(vowels.includes(letter)) vowelsCount++;
  });
  
  return vowelsCount;
}

console.log(getCount('abracadabra'));