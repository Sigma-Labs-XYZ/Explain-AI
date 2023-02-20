const fetchData = async (url) => {
  const apiResponse = await fetch(url);
  console.log(apiResponse);
  const apiResponseJSON = await apiResponse.json();
  return apiResponseJSON;
};

module.exports = {
  fetchData,
};
