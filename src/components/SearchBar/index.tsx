import { TextField } from "@mui/material";
import React, { useState } from "react";
import _ from "lodash";
import { useFiltersContext } from "../../contexts/FiltersContext";

export default function SearchBar() {
  const [localSearchQuery, setLocalSearchQuery] = useState<string>("");
  const { setSearchQuery } = useFiltersContext();

  const handleSearchChange = _.debounce((query: string) => {
    setSearchQuery(query);
  }, 300);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setLocalSearchQuery(query);
    handleSearchChange(query);
  };

  return (
    <TextField
      label="Search by name"
      variant="outlined"
      value={localSearchQuery}
      onChange={handleChange}
      style={{ marginBottom: "1rem" }}
    />
  );
}
