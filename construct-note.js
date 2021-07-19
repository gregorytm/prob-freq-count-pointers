// add whatever parameters you deem necessary
function constructNote() {
  const lettersFreq = {};
  const messageFreq = {};

  //letters freq counter
  for (let char of letters) {
    lettersFreq[char] = ++lettersFreq[char] || 1;
  }

  //message counter freq
  for (let char of message) {
    messageFreq[char] = ++messageFreq[char] || 1;
  }

  //compair letter freq against message freq
  for (let char in messageFreq) {
    if (!lettersFreq[char]) {
      return false;
    }
    if (messageFreq[char] > lettersFreq[char]) {
      return false;
    }
  }
  return true;
}
