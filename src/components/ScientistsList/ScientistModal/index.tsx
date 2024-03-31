import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import { useScientistsListContext } from "../../../contexts/scientistsListContext_v1";
import { useHistory, useParams } from "react-router-dom";

export default function ScientistModal() {
  const history = useHistory()
  const { id: paramID } = useParams<{ id: string }>();
  const { scientistsData } = useScientistsListContext();
  const selectedScientist = scientistsData.find(({ login: { id }}) => id === paramID);

  if (!selectedScientist) return null;

  const { name, gender, email, dob, nat, picture } = selectedScientist;
  
  const onClose = () => {
    history.push('/');
  };

  return (
    <Dialog open={!!selectedScientist} onClose={onClose}>
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
