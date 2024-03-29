import { Container } from '@mui/material';
import UserModal from '../UserModal';
import UserTable from '../UserTable';
import SearchBar from '../SearchBar';

export default function UserList() {
  return (
    <Container
      maxWidth="md"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '90vh',
      }}
    >
      <SearchBar />
      <UserTable />
      <UserModal />
    </Container>
  );
}
