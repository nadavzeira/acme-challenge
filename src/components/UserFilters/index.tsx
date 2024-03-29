import { MenuItem, TextField } from "@mui/material";
import { ChangeEvent } from "react";
import { useFiltersContext } from "../../contexts/FiltersContext";
import { useListUsersContext } from "../../contexts/listUsersContext";

export default function UserFilters() {
  const { setGenderFilter, setNationalityFilter } = useFiltersContext();
  const { usersData } = useListUsersContext();

  const nationalities = Array.from(new Set(usersData.map(({ nat }) => nat)));

  const handleGenderChange = (event: ChangeEvent<{value: unknown}>) => {
    setGenderFilter(event.target.value as string);
  };

  const handleNationalityChange = (event: ChangeEvent<{value: unknown}>) => {
    setNationalityFilter(event.target.value as string[]);
  };

  return (
    <>
      <TextField
        select
        label="Gender"
        variant="outlined"
        defaultValue="All"
        fullWidth
        style={{ marginRight: "10px" }}
        onChange={handleGenderChange}
      >
        <MenuItem value="All">All</MenuItem>
        <MenuItem value="male">Male</MenuItem>
        <MenuItem value="female">Female</MenuItem>
      </TextField>
      <TextField
        select
        label="Nationality"
        variant="outlined"
        defaultValue={[]}
        fullWidth
        placeholder="All"
        onChange={handleNationalityChange}
        SelectProps={{
          multiple: true,
        }}
      >
        {nationalities.map((nationality) => (
          <MenuItem key={nationality} value={nationality}>
            {nationality}
          </MenuItem>
        ))}
      </TextField>
    </>
  );
}
