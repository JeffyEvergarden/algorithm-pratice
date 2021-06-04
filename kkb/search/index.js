function binarySearch(arr, x) {
  let head = 0
  let tail = arr.length - 1
  let mid
  while (head <= tail) {
    mid = (head + tail) >> 1
    if (arr[mid] === x) return mid
    if (arr[mid] < x) head = mid + 1
    else tail = mid - 1
  }
  return -1
}

function binarySearch01(arr, x) {
  let head = 0
  let tail = arr.length - 1
  let mid
  while (head < tail) {
    mid = head + ((tail - head) >> 1)
    if (arr[mid] === x) return mid
    if (arr[mid] < x) head = mid + 1
    else tail = mid
  }
  return -1
}

function main() {
  let arr = [
    1, 2, 7, 15, 22, 26, 26, 27, 36, 43, 44, 50, 55, 63, 71, 74, 82, 90, 92, 95,
    102, 102, 106, 112, 120, 128, 130, 136, 144, 151, 160, 166, 168, 172, 172,
    176, 185, 189, 192, 195, 199, 205, 207, 212, 217, 225, 234, 238, 246, 249,
    253, 261, 268, 271, 276, 283, 286, 294, 294, 296, 300, 302, 305, 310, 311,
    315, 318, 325, 334, 338, 347, 350, 357, 366, 370, 374, 378, 384, 384, 392,
    392, 396, 404, 404, 413, 421, 429, 430, 432, 433, 442, 446, 448, 455, 464,
    464, 470, 472, 475, 482,
  ]
  // arr[0] = 1
  // for (let i = 1; i < 100; i++) {
  //   arr[i] = arr[i - 1] + Math.floor(Math.random() * 10)
  // }
  // console.log(arr)
  
  console.log(binarySearch01(arr, 95))
}

main()
