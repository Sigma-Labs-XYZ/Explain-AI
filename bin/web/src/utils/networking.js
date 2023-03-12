export default async function fetchData(url) {
  try {
    const apiResponse = await fetch(url);
    const apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
  } catch (e) {
    return "unable to fetch data";
  }
}

export const postData = async ({ url, body }) => {
  try {
    const postResponse = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const postResponseJSON = await postResponse.json();
    return postResponseJSON;
  } catch (e) {
    return "unable to fetch data";
  }
};
