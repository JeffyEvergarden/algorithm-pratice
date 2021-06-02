var checkZeroOnes = function (s) {
  if (s.length === 0) {
    return false
  }
  let maxOneLen = 0
  let maxzeroLen = 0
  let oneLen = 0
  let zeroLen = 0
  let i = 0
  while (i < s.length) {
    console.log(s[i])
    if (s[i] === '1' && i === 0) {
      oneLen++
      maxOneLen = 1
    } else if (s[i] === '0' && i === 0) {
      zeroLen++
      maxzeroLen = 1
    } else if (s[i] === '0' && s[i - 1] === '0') {
      zeroLen++
      maxzeroLen = Math.max(maxzeroLen, zeroLen)
      oneLen = 0
    } else if (s[i] === '1' && s[i - 1] === '1') {
      oneLen++
      maxOneLen = Math.max(maxOneLen, oneLen)
      zeroLen = 0
    } else if (s[i] === '1') {
      oneLen = 1
      zeroLen = 0
      maxOneLen = Math.max(maxOneLen, oneLen)
    } else if (s[i] === '0') {
      oneLen = 0
      zeroLen = 1
      maxzeroLen = Math.max(maxzeroLen, zeroLen)
    } else {
      oneLen = 0
      zeroLen = 0
    }
    i++
  }
  console.log(maxOneLen, '  ', maxzeroLen)
  return maxOneLen > maxzeroLen
}

checkZeroOnes('10')
