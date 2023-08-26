import React from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { Box } from "@mui/material"

function SearchBar({ searchQuery, setSearchQuery, onSearch }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop="20px"
      className="box"
    >
      <div className="SearchBar">
        <TextField
          className="search-input"
          label="Search by Role, Request Method, Protocol, Location"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={onSearch}
          sx={{ margin: "10px" }}
        >
          Search
        </Button>
      </div>
    </Box>
  )
}

export default SearchBar
