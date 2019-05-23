const now = moment();
// console.log(now.toString()) // toString() make it readable
now.subtract(25, 'year').add(1, 'month').add(6, 'days')
// now.minute(1) // set a fixed item
console.log(now.minute()) // to print the exact minute
console.log(now.format('MMMM Do, YYYY')) // May 5th, 2019
// console.log(now.fromNow()) // display "instagram-like" posted time
console.log(`Post created ${now.fromNow()}`)
const nowTimeStamp = now.valueOf()
// console.log(nowTimeStamp)

console.log(moment(nowTimeStamp).toString())