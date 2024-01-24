// function fizz_buzz(numbers) {
//   let result = [];

//   for (number of numbers) {
//     if (number % 15 === 0) {
//       result.push("fizzbuzz");
//     } else if (number % 3 === 0) {
//       result.push("fizz");
//     } else if (number % 5 === 0) {
//       result.push("buzz");
//     } else {
//       result.push(number);
//     }
//   }

//   return result.join(", ");
// }

// module.exports = fizz_buzz;

const formatDate = (rawDate) => {
  //in case of bad data return empty string
  if (!rawDate) {
    return "";
  }

  //reformats the date
  const formattedDate = format(new Date(rawDate), "M.d", { locale: enUS });
  return formattedDate;
};

module.exports = formatDate;
