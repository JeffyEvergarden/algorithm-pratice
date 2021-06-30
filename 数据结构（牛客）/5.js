var countSubstrings = function (s) {
  let max = 0
  for (let i = 0; i < s.length; i++) {
    max = Math.max(count(s, i), max)
    max = Math.max(count(s, i, i + 1), max)
    console.log(max, i, count(s, i), count(s, i + 1))
  }
  return max
}

function count(s, i, j) {
  let k = 0
  if (!j) {
    j = i
  }
  let len = [i, j]
  while (i - k >= 0 && j + k < s.length) {
    if (s[i - k] === s[j + k]) {
      len = [i - k, j + k]
      k++
    } else {
      break
    }
  }
  return len[1] - len[0] + 1
}

console.log(countSubstrings('babad'))
