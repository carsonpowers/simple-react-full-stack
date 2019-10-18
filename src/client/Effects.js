const getUsername = setUsername => {
  fetch('/api/getUsername')
    .then(res => res.json())
    .then(user => setUsername(user.username))
}

export default { getUsername }
