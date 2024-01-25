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
