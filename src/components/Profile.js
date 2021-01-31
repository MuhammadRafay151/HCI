import { Button, Card } from "react-bootstrap";
const Profile = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className="shadow">
                <Card.Img variant="top" src={props.info.img} />
                <Card.Body>
                    <Card.Title>{props.info.Name}</Card.Title>
                    <Card.Text>
                        <h4>Roles</h4>
                        
                       <ul>
                       {props.info.Roles.map((role) => (
                            <li>{role}</li>
                        ))}
                       </ul>
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}
export default Profile