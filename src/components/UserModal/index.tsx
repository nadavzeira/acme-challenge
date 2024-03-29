import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useListUsersContext } from "../../contexts/listUsersContext";
import { useHistory, useParams } from "react-router-dom";

export default function UserModal() {
  const history = useHistory()
  const { id: paramID } = useParams<{ id: string }>();
  const { usersData } = useListUsersContext();
  const selectedUser = usersData.find(({ login: { id }}) => id === paramID);
  
  const onClose = () => {
    history.push('/');
  };

  return (
    <Dialog open={!!selectedUser} onClose={onClose}>
      <DialogTitle>Scientist Details</DialogTitle>
      <DialogContent>
        {selectedUser && (
          <div>
            <img
              src={selectedUser.picture.large}
              alt="Scientist"
              style={{ maxWidth: "100%", marginTop: "1rem" }}
            />
            <Typography>
              Name: {`${selectedUser.name.first} ${selectedUser.name.last}`}
            </Typography>
            <Typography>Gender: {selectedUser.gender}</Typography>
            <Typography>Email: {selectedUser.email}</Typography>
            <Typography>Date of Birth: {selectedUser.dob.date}</Typography>
            <Typography>Nationality: {selectedUser.nat}</Typography>
          </div>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
