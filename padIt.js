function padIt(str,n){
  let i = 1
  while (i <= n){
    if (i % 2 != 0){
      str = '*' + str
      i++
    }else if (i % 2 == 0){
      str = str + '*'
      i++
    }
  }
  return str
}
