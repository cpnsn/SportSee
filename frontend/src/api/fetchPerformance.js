export async function fetchPerformance(userId) {
    let url = `http://localhost:3000/user/${userId}/performance`;
  
    const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      return json;
  
  }
  