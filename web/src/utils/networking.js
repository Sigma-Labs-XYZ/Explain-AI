export default async function fetchData(url) {
  try {
    const apiResponse = await fetch(url);
    const apiResponseJSON = await apiResponse.json();
    return apiResponseJSON;
  } catch (e) {
    return `Unable to fetch data: ${e}`;
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

export async function homepageFetch() {
  try {
    const response = await fetch(`https://explainai-api.onrender.com/groups`);
    const data = await response.json();
    return data;
  } catch (e) {
    return `Unable to fetch homepage data: ${e}`;
  }
}
