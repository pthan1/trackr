import React, { useContext, useState } from "react"
import { SearchContext } from '../context/SearchContext';
import searchPublicRepos from "../apiCalls";
import { Api } from "@mui/icons-material";

function RepoSearch() {
const [searchKeyword, setSearchKeyword] = useState("");
const {setRepos} = useContext(SearchContext)

const handleSubmit = event => {
  event.preventDefault();

  const processedInput = searchKeyword.split(" ");

  if (processedInput.length === 1) {
    searchPublicRepoes(searchKeyword).
  } else {
    const multipleWordQuery = processedInput.join("+")
    searchPublicRepos(multipleWordQuery);
  }
}

  return (
    <div className="public-repo-search-form">
      <form>
        <label for="keyword">Search By Keyword</label>
        <input type="text" name="search-keyword" value={searchKeyword} onChange={event => setSearchKeyword(event.target.value)} />
        <button type="button" onClick={event => handleSubmit(event)}>Search</button>
      </form>
    </div>
  )
}

export default RepoSearch
