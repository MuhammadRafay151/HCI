import { Table } from "react-bootstrap";
const PLinks = () => {
    return (
        <div>
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
                        <td>Website</td>
                        <td>
                            <a href="https://mr-devs.ml/" target="_blank">Open</a>
                        </td>

                    </tr>
                    <tr>
                        <td>Full Project</td>
                        <td>
                            <a href="https://drive.google.com/drive/folders/1LdgT5NapJj15JGRhcXlSquTlF6Q8x9sc?usp=sharing" target="_blank">Open</a>
                        </td>

                    </tr>
                    <tr>
                        <td>Prototypes</td>
                        <td>
                            <a href="https://drive.google.com/drive/folders/1LdgT5NapJj15JGRhcXlSquTlF6Q8x9sc?usp=sharing" target="_blank">Open</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Chapters</td>
                        <td>
                            <a href="https://drive.google.com/drive/folders/1LdgT5NapJj15JGRhcXlSquTlF6Q8x9sc?usp=sharing" target="_blank">Open</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Final Report</td>
                        <td>
                            <a href="https://drive.google.com/drive/folders/1LdgT5NapJj15JGRhcXlSquTlF6Q8x9sc?usp=sharing" target="_blank">Open</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Presentation</td>
                        <td>
                            <a href="https://drive.google.com/drive/folders/1LdgT5NapJj15JGRhcXlSquTlF6Q8x9sc?usp=sharing" target="_blank">Open</a>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default PLinks