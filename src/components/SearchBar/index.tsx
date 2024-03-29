import { TextField, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import _ from "lodash";
import { useFiltersContext } from "../../contexts/FiltersContext";

export default function SearchBar() {
  const { setSearchQuery } = useFiltersContext();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current?.focus();

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleSearchChange = _.debounce((query: string) => {
    setSearchQuery(query);
  }, 300);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    handleSearchChange(query);
  };

  return (
    <>
      <TextField
        inputRef={inputRef}
        label="Search by name"
        variant="outlined"
        onChange={handleChange}
      />
      <Typography variant="body2" color="textSecondary">
        Type '/' to focus on the search bar
      </Typography>
    </>
  );
}
