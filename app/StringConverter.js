function stringConverter(string) {
  const strings = string.split(' ');
  return strings[0] + ' = string.split()';
  // const strings = string.split(' ');
  // const newString = [];
  // const exceptions = ['de', 'das', 'dos', 'bb'];
  // strings.forEach(s => {
  //   if (exceptions.indexOf(s.toLowerCase()) === -1) {
  //     if (s[0]) {
  //       newString.push(s[0].toUpperCase() + s.slice(1).toLowerCase());
  //     }
  //   } else if (s === 'BB') {
  //     newString.push('BB');
  //   } else {
  //     newString.push(s.toLowerCase());
  //   }
  // });
  // return newString.join(' ');
}

export default stringConverter;
