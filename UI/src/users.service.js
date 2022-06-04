export function getProfilesAsync() {
  return fetch("https://enigmatic-ocean-67483.herokuapp.com/profiles")
    .then((response) => response.json())
    .catch((e) => console.error(e));
}

export function createProfileAsync(data) {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch("https://enigmatic-ocean-67483.herokuapp.com/profiles", config)
    .then((response) => response.json())
    .catch((e) => console.error(e));
}

export function updateProfileAsync(data) {
  let config = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch("https://enigmatic-ocean-67483.herokuapp.com/profiles", config)
    .then((response) => response.json())
    .catch((e) => console.error(e));
}

export function deleteProfileAsync(data) {
  let config = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch("https://enigmatic-ocean-67483.herokuapp.com/profiles", config)
    .then((response) => response.json())
    .catch((e) => console.error(e));
}

export function deleteProfilesAsyncById(id) {
  return (
    fetch(`https://enigmatic-ocean-67483.herokuapp.com/profiles/${id}`, {
      method: "DELETE",
    })
      // .then((response) => response.json())
      .then((response) => response)
      .catch((e) => console.error(e))
  );
}
