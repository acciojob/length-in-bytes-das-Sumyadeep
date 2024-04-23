function isAsciiOnly(str) {
  for (var i = 0; i < str.length; i++)
    if (str.charCodeAt(i) > 127)
      return false;
  return true;
}

const byteSize = (str) => {
  // write your code here
	if(isAsciiOnly(str)) return str.length;
	else
		return str.length * 3;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));










