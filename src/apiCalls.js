const searchPublicRepos = (keyword) => {
  return fetch(`https://api.github.com/search/repositories?q=${keyword}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
      }
    return response.json()
  })
}

const getFavoriteRepos = () => {
  return fetch(`http://localhost:5000/api/v1/repos`)
      .then(response => {
          if (!response.ok) {
            throw new Error(`Status: ${response.status}`)
          }
          return response.json()
        })        
}


const addRepo = (newRepo) => {
  return fetch(`http://localhost:5000/api/v1/repos`, {
				method: 'POST',
				body: JSON.stringify(newRepo),
				headers: {
					'Content-Type': 'application/json'
				}
			})
      .then(response => {
          if (!response.ok) {
            throw new Error(`Status: ${response.status}`)
          }
          return response.json()
        })        
}

const removeRepo = (id) => {
  return fetch(`http://localhost:5000/api/v1/repos/${id}`, {
				method: 'DELETE'
			})
      .then(response => {
          if (!response.ok) {
            throw new Error(`Status: ${response.status}`)
          }
          return response.json()
        })        
}

export { searchPublicRepos, addRepo, removeRepo, getFavoriteRepos }