import { Card } from "react-bootstrap";
const Profile = (props) => {
    return (
        <div>
            <Card style={{ width: '18rem' }} className="shadow">
                <Card.Img variant="top" src={props.info.img} />
                <Card.Body>
                    <Card.Title>{props.info.Name}</Card.Title>
                    <h4>Roles</h4>

                    <ul>
                        {props.info.Roles.map((role, index) => (
                            <li key={index + "p"}>{role}</li>
                        ))}
                    </ul>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
            </Card>
        </div>
    )
}
export default Profile