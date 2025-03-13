import { Container, Card, Button } from "react-bootstrap";

const ProfilePage = () => {
  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <Card.Body>
          <Card.Title className="text-center">Profile</Card.Title>
          <Card.Text>
            <strong>Email:</strong> jdarderes@gmail.com
          </Card.Text>
          <Button variant="danger" className="w-100" onClick={handleLogout}>
            Logout
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ProfilePage;
