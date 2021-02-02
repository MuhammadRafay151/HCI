import { Table } from "react-bootstrap";
const PLinks = () => {
    return (
        <div id="ar">
            <h1 className="mt-5">Artifacts Links</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Artifact</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Website
                        <div>
                                <strong>Email</strong>:sshameem@certifis.cf
                                <br></br>
                                <strong>Password</strong>:abc123
                        </div>
                        </td>
                        <td>
                            <a rel="noreferrer" href="https://mr-devs.ml/" target="_blank">Open</a>
                        </td>

                    </tr>
                    <tr>
                        <td>Full Project</td>
                        <td>
                            <a rel="noreferrer" href="https://drive.google.com/drive/folders/1LdgT5NapJj15JGRhcXlSquTlF6Q8x9sc?usp=sharing" target="_blank">Open</a>
                        </td>

                    </tr>
                    <tr>
                        <td>Prototypes</td>
                        <td>
                            <a rel="noreferrer" href="https://drive.google.com/drive/folders/1n59vDRQBE0dy_Lh989NCGpzvMkmmOXIX?usp=sharing" target="_blank">Open</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Sketches</td>
                        <td>
                            <a rel="noreferrer" href="https://drive.google.com/drive/folders/1QIScQpEbKv8Y-qOxiMJIAXdNdY9JX2vw?usp=sharing" target="_blank">Open</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Final Report</td>
                        <td>
                            <a rel="noreferrer" href="https://drive.google.com/drive/folders/1xylJEobbh2q3iLRy3Z5OUmIyKGygc9Ud?usp=sharing" target="_blank">Open</a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default PLinks