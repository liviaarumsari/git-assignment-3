// Fetch Data dari API (Promise)
// Use fetch as promise-based API
function fetchUserData(username) {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
  
fetchUserData('liviaarumsari')
  