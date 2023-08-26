import React, { useState } from "react"
import "./style.css"
import SearchBar from "./components/SearchBar"
import jsonData from "./data/jsonData" // Importing our JSON data
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableBody from "@mui/material/TableBody"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"

function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState(jsonData)

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setFilteredData(jsonData)
    } else {
      const filtered = jsonData.filter(
        (item) =>
          item.request_method
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          item.protocol.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.geo_location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.user_role.toLowerCase().includes(searchQuery.toLowerCase())
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
      <div className="table ">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Timestamp</TableCell>
              <TableCell>Source Ip</TableCell>
              <TableCell>Destination Ip</TableCell>
              <TableCell>Request Method</TableCell>
              <TableCell>Response Code</TableCell>
              <TableCell>Response Time</TableCell>
              <TableCell>User Id</TableCell>
              <TableCell>Session Id</TableCell>
              <TableCell>Error Code</TableCell>
              <TableCell>Server Ip</TableCell>
              <TableCell>Server Port</TableCell>
              <TableCell>Protocol</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item) => (
              <TableRow key={item.log_id}>
                <TableCell>{item.timestamp}</TableCell>
                <TableCell>{item.source_ip}</TableCell>
                <TableCell>{item.destination_ip}</TableCell>
                <TableCell>{item.request_method}</TableCell>
                <TableCell>{item.response_code}</TableCell>
                <TableCell>{item.response_time}</TableCell>
                <TableCell>{item.user_id}</TableCell>
                <TableCell>{item.session_id}</TableCell>
                <TableCell>{item.error_code}</TableCell>
                <TableCell>{item.server_ip}</TableCell>
                <TableCell>{item.server_port}</TableCell>
                <TableCell>{item.protocol}</TableCell>
                <TableCell>{item.geo_location}</TableCell>
                <TableCell>{item.user_role}</TableCell>

                {/* Add more cells for additional fields */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default App
