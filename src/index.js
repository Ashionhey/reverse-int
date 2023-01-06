module.exports = function reverse(n) {
   if (n < 0) {
      n = Math.abs(n)
   }
   let nStr = String(n)
   let i = 0;
   let result = "";

   while (i < nStr.length) {
      result = `${nStr[i]}${result}`
      i++
   }
   return result = Number(result)
}
