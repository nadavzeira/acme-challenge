import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { useListUsersContext } from "../../../contexts/listUsersContext";
import { useHistory, useParams } from "react-router-dom";

export default function UserModal() {
  const history = useHistory()
  const { id: paramID } = useParams<{ id: string }>();
  const { usersData } = useListUsersContext();
  const selectedUser = usersData.find(({ login: { id }}) => id === paramID);

  if (!selectedUser) return null;

  const { name, gender, email, dob, nat, picture } = selectedUser;
  
  const onClose = () => {
    history.push('/');
  };

  return (
    <Dialog open={!!selectedUser} onClose={onClose}>
      <DialogTitle>Scientist Details</DialogTitle>
      <DialogContent>
          <Box>
            <img
              src={picture.large}
              alt="Scientist"
              style={{ maxWidth: "100%", marginTop: "1rem" }}
            />
            <Typography>
              Name: {`${name.first} ${name.last}`}
            </Typography>
            <Typography>Gender: {gender}</Typography>
            <Typography>Email: {email}</Typography>
            <Typography>Date of Birth: {dob.date}</Typography>
            <Typography>Nationality: {nat}</Typography>
          </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
