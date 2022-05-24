export function getProfilesAsync() {
  return fetch("http://localhost:3000/profiles")
    .then((response) => response.json())
    .catch((e) => console.error(e));
}

export function createProfileAsync(data) {
  let config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch("http://localhost:3000/profiles", config)
    .then((response) => response.json())
    .catch((e) => console.error(e));
}

export function updateProfileAsync(data) {
  let config = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch("http://localhost:3000/profiles", config)
    .then((response) => response.json())
    .catch((e) => console.error(e));
}

export function deleteProfileAsync(data) {
  let config = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };

  return fetch("http://localhost:3000/profiles", config)
    .then((response) => response.json())
    .catch((e) => console.error(e));
}

export function deleteProfilesAsyncById(id) {
  return fetch(`http://localhost:3000/profiles/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch((e) => console.error(e));
}
