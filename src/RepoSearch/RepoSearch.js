import React, { useContext, useState } from "react"
import { SearchContext } from '../context/SearchContext';
import { searchPublicRepos } from "../apiCalls";

const RepoSearch = () => {
const [searchKeyword, setSearchKeyword] = useState("");
const { repos, setRepos } = useContext(SearchContext);

const handleSubmit = (event) => {
  event.preventDefault();
  const processedInput = searchKeyword.split(" ");
  if (processedInput.length === 1) {
    console.log('searchKeyword', searchKeyword)
    searchPublicRepos(searchKeyword)
    .then(res => {
      setRepos(res.items)
    })
  } else {
    const multipleWordQuery = processedInput.join("+")
    searchPublicRepos(multipleWordQuery)
    .then(res => setRepos(res.items))
  }
}

  return (
    <div className="public-repo-search-form">
      <form onSubmit={event => handleSubmit(event)}>
        <input type="text" name="search-keyword" value={searchKeyword} onChange={event => setSearchKeyword(event.target.value)} placeholder="Search for a Repo" />
      </form>
    </div>
  )
}

export default RepoSearch
