const searchPublicRepos = (keyword) => {
  return fetch(`https://api.github.com/search/repositories?q=${keyword}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
      }
    return response.json()
  })
}

export default searchPublicRepos;