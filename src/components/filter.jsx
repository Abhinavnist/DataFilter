import React, { useState } from "react"
// import "./App.css" // You can import your own CSS file for styling
import SearchBar from "./SearchBar"
import DataTable from "./DataTable"
import jsonData from "../data/jsonData" // Import your JSON data

function Filter() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState(jsonData)

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredData(jsonData)
    } else {
      const filtered = jsonData.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredData(filtered)
    }
  }

  return (
    <div className="App">
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearch={handleSearch}
      />
      <DataTable data={filteredData} />
    </div>
  )
}

export default Filter
