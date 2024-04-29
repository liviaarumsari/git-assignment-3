// Fetch Data dari API (Callback)
// Using XMLHttpRequest, a callback-based API in javascript, need to run in browser
// Callback will handle error and data received from the API call
function fetchUserData(username, callback) {
    const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.github.com/users/${username}`, true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      callback(null, data);
    } else {
      const error = new Error(`Failed to fetch user data for ${username}`);
      callback(error, null);
    }
  };
  xhr.onerror = function () {
    const error = new Error(`Failed to fetch user data for ${username}`);
    callback(error, null);
  };

  xhr.send();
}

fetchUserData("liviaarumsari", (error, data) => {
  if (error) {
    console.error("Failed to fetch user data:", error.message);
  } else {
    console.log("User data:", data);
  }
});
