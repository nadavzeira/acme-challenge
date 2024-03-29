import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { useListUsersContext } from "../../contexts/listUsersContext";

export default function UserModal() {
  const { selectedUser, setSelectedUser } = useListUsersContext();
  
  const onClose = () => {
    setSelectedUser(null);
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
