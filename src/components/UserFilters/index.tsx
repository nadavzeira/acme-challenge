import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useFiltersContext } from "../../contexts/FiltersContext";
import { useListUsersContext } from "../../contexts/listUsersContext";

export default function UserFilters() {
  const { setGenderFilter, setNationalityFilter } = useFiltersContext();
  const { usersData } = useListUsersContext();

  const nationalities = Array.from(new Set(usersData.map(({ nat }) => nat)));

  const handleGenderChange = (event: ChangeEvent<{ value: string }>) => {
    setGenderFilter(event.target.value);
  };

  const handleNationalityChange = (event: ChangeEvent<{ value: string }>) => {
    setNationalityFilter(event.target.value);
  };

  return (
    <>
      <TextField
        select
        label="Gender"
        variant="outlined"
        defaultValue="all"
        fullWidth
        style={{ marginRight: "10px" }}
        onChange={handleGenderChange}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </TextField>
      <TextField
        select
        label="Nationality"
        variant="outlined"
        defaultValue="all"
        fullWidth
        onChange={handleNationalityChange}
      >
        <MenuItem value="all">All</MenuItem>
        {nationalities.map(nationality => (
          <MenuItem key={nationality} value={nationality}>
            {nationality}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}
