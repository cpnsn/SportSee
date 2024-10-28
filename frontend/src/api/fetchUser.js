export async function fetchUser(userId) {
  let url = `http://localhost:3000/user/${userId}`;

  const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;

}
