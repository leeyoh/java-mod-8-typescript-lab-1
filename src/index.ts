function prepend(numSpaces: number, inputString: string) {
  return " ".repeat(numSpaces) + inputString;
}


console.log(prepend(10,"hello"));