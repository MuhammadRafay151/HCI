import Profile from "../components/Profile"
import PLinks from "./ProjectLinks";
const data = [{ Name: "Muhammad Rafay", Roles: ["Software Engineer", "Project Manager", "Software Architect"], img: "https://avatars.githubusercontent.com/u/46870378?s=400&u=b368aa02d31228b00775d60318c70127f08b68d5&v=4" },
{ Name: "Muhammad Aamir", Roles: ["Software Engineer", "Web Designer"], img: "https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/50227176_2175635076084455_3785822420825276416_o.jpg?_nc_cat=103&ccb=2&_nc_sid=174925&_nc_eui2=AeG4KurTiDB8cbD3zXrVErFLn9L2jLFLrDGf0vaMsUusMfkWQ7LfnFHu_K168koYKEuwHmBhdTzFz6JfO3wkCl8K&_nc_ohc=dhLCPdOTZDQAX-OTY01&_nc_ht=scontent.fkhi9-1.fna&oh=e4a3d268753326491af031b72326cd07&oe=60392C5C" },
{ Name: "Muhammad Ismail", Roles: ["Software Engineer", "Business Analyst", "Designer"], img: "https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/55495120_2334394260178219_9099039914820894720_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_eui2=AeEJGs3eOk8OFz6f_0UoHj2W4bd8BkfkLpDht3wGR-QukKUcok7vL8DKuoe3DnItVq_dyEIy2vcuS5auWG6go6nk&_nc_ohc=3TUkjqZZZ5wAX8d6F6f&_nc_ht=scontent.fkhi9-1.fna&oh=e044212b0b814eef25455e4f4573b6f8&oe=6039B243" },
{ Name: "Muhammad Sabih", Roles: ["Software Engineer", "Business Analyst", "Designer"], img: "https://media-exp1.licdn.com/dms/image/C5603AQGq-TWauCj8lQ/profile-displayphoto-shrink_800_800/0/1610740382684?e=1617235200&v=beta&t=GsBJsNLDSXZsBaoC8AX91zYGRm2nGW91NjfCngGxFsU" },
{ Name: "Muhammad Hassan", Roles: ["Software Engineer", "Test Engineer"], img: "https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/131210052_3000532353495493_994512726174274901_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGSLBFcF7Jzlbm50MYaVIRdJ35rl3BjENcnfmuXcGMQ14RcJzsu5OrkYsai4hhJ3ajNxfgRWVkuf6oD1g8l6mPr&_nc_ohc=kQVAHgUHKX0AX-FBu-f&_nc_ht=scontent.fkhi9-1.fna&oh=77ac1b0470251a6958a6b4c7b6909123&oe=6037641A" }]
const Home = () => {
    const divstyle = {
        backgroundColor: "#fdfdfd"
    }
    return (
        <div className="container mb-5" style={{ marginTop: "120px" }}>
            <div className="row shadow" id="int" style={divstyle}>
                <div className="col">
                    <h1 className="border-bottom">Introdution</h1>
                    <p>
                        Certification has found its way into almost every industry for a reason: It helps advance the profession. Certification helps employers assess potential new hires, evaluate job performance, evaluate workers, pick contractors, market resources, and encourage employees to develop their skills and abilities. Certification provides recognition of skills, demonstrates devotion to the profession, and assists with career advancement. There has been an explosive growth in professional certification. Professional Certification helps one to:
                    </p>
                    <ul>
                        <li>Gain practical skills for the job, as it focuses on the knowledge and skills required to fulfill job responsibilities in the real world.</li>
                        <li>Realize the maximum benefit from a broad range of areas of expertise.</li>
                        <li>Learn all aspects of a particular type of career pursuit while providing these professionals with a standard of assured excellence for organizations.</li>
                        <li>Integrate these career pursuits effectively into one's specific work environment.</li>
                    </ul>
                    <h3>Problem</h3>
                    <p>The problem is that different certificates for events, courses, health, etc. are issued to the people from different organizations. But in case of any mishaps (natural disaster, misplace, etc.) person might lose his/her certificate, Sometime the organization shift the platform so it is very difficult process to get that certificate again due to lots of hurdles, verifying those certificates is really big issue, sometime if it is possible so it is very time consuming and costly process and sometime it is not possible due to lack of backup also preparing and distributing those certificates manually is so much time consuming.</p>
                    <h3>Objective</h3>
                    <p>We are providing a platform of blockchain based e-certification CERTIFIS which provides a way to verify the certificates not only by the certificate generating entity also by other users (either the part of any entity in the network or not) and in case any entity loss their data or change their platform then the certificates issued by them still be verifiable.
                    The Blockchain based e-certification project will meet the following objectives:</p>
                    <ul>
                        <li>Provide distributed platform for verifiability of certificate.</li>
                        <li>Provide distributed platform for verifiability of certificate.</li>
                        <li>Tamper free securable environment.</li>
                    </ul>
                    <h3>Target Audience</h3>
                    <ul>
                        <li>
                            Those who want to create certificates in a tamper free environment.
                        </li>
                        <li>
                            Those who want to issue certificates.
                        </li>
                        <li>
                            Tamper free securable environment.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="row mt-5">
                <div className="shadow col mr-2" id="sc" style={divstyle}>
                    <h1 className="border-bottom">Scenerios</h1>
                    <h3>Single Certificate /Batch and Batch Certificate Creation</h3>
                    <p>
                        If the user wants to create a single certificate this will provide him/her the feature of creating certificates. By choosing a certificate template he/she will be able to create certificates.
                        If the user wants to create a batch this will provide him/her the feature of creating batches. By choosing a certificate template he/she will be able to create batches.
                        If the user wants to create certificates in a batch this will provide him/her the feature for creating as much as required certificates in a batch but he/she can only add certificates in a batch if the batch is not published.

                    </p>
                    <h3>Single Certificate and Batch Publication</h3>
                    <p>
                        This will allow users to publish a single certificate on the blockchain after publishing the certificates will be verifiable.
                        This will allow users to publish batches on the blockchain after publishing the batch the certificates in a batch will be verifiable.

                    </p>
                    <h3>Certificate Verification</h3>
                    <p>
                        This will allow users to verify all the certificates that have been published to blockchain.
                    </p>
                </div>
            </div>
            <div className="row mt-5" style={divstyle}>
                <div className="shadow col mr-2" id="ta">
                    <h1>User Analysis</h1>
                    <h4>Multiple User Classes (Type of Stakeholders)</h4>
                    <p>Super Admin, Admin, Issuer, Verifier </p>
                    <h4>Primary Stakeholders</h4>
                    <p>Super Admin, Admin, Issuer, Verifier </p>
                    <h4>Personas for Your Primary Stakeholders</h4>
                    <ol>
                        <li>
                            <h4>Super Admin</h4>
                            <ul>
                                <li>Manage User: Register Users, Enable/Disable Users, Reset Password.</li>
                                <li>Manage Single Certificates: Create Single Certificates, Edit Single Certificates, Delete Single Certificates, View Single Certificates.</li>
                                <li>Manage Batches: Create Batches, Edit Batches, Delete Batches, View Batches.</li>
                                <li>Manage Batch Certificate: Create Batch Certificates, Edit Batch Certificates, Delete Batch Certificates, View Batch Certificates.</li>
                                <li>Manage Publications: Publish Batches, Publish Single Certificates, Email Certificate.</li>
                                <li>Verify Certificates: Verify Certificates, Download Certificates, Recover Certificates.</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Admin</h4>
                            <ul>
                                <li>Manage User: Register Users, Enable/Disable Users, Reset Password.</li>
                                <li>Manage Single Certificates: Create Single Certificates, Edit Single Certificates, Delete Single Certificates, View Single Certificates.</li>
                                <li>Manage Batches: Create Batches, Edit Batches, Delete Batches, View Batches.</li>
                                <li>Manage Batch Certificate: Create Batch Certificates, Edit Batch Certificates, Delete Batch Certificates, View Batch Certificates.</li>
                                <li>Manage Publications: Publish Batches, Publish Single Certificates, Email Certificate.</li>
                                <li>Verify Certificates: Verify Certificates, Download Certificates, Recover Certificates.</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Issuer</h4>
                            <ul>
                                <li>Manage Single Certificates: Create Single Certificates, Edit Single Certificates, Delete Single Certificates, View Single Certificates.</li>
                                <li>Manage Batches: Create Batches, Edit Batches, Delete Batches, View Batches.</li>
                                <li>Manage Batch Certificate: Create Batch Certificates, Edit Batch Certificates, Delete Batch Certificates, View Batch Certificates.</li>
                                <li>Manage Publications: Publish Batches, Publish Single Certificates, Email Certificate.</li>
                                <li>Verify Certificates: Verify Certificates, Download Certificates, Recover Certificates.</li>
                            </ul>
                        </li>
                        <li>
                            <h4>Verifier</h4>
                            <ul>
                                <li>Verify Certificates: Verify Certificates, Download Certificates, Recover Certificates.</li>
                            </ul>
                        </li>

                    </ol>
                </div>
                <div className="shadow col ml-2" id="ua">
                    <h1>Task Analysis</h1>
                    <ol>

                        <li>
                            <h4>Single Certificate Creation</h4>
                            If the user wants to create a single certificate this will provide him/her the feature of creating certificates. By choosing a certificate template he/she will be able to create certificates.
                        </li>

                        <li>
                            <h4>Batch Creation</h4>
                            If the user wants to create a batch this will provide him/her the feature of creating batches. By choosing a certificate template he/she will be able to create batches.
                        </li>

                        <li>
                            <h4>Batch Certificate Creation</h4>
                            If the user wants to create certificates in a batch this will provide him/her the feature for creating as much as required certificates in a batch but he/she can only add certificates in a batch if the batch is not published.
                        </li>

                        <li>
                            <h4>Single Certificate Publication</h4>
                            This will allow users to publish single certificate on the blockchain after publishing the certificates will be verifiable.
                        </li>

                        <li>
                            <h4>Batch Publication</h4>
                            This will allow users to publish batches on the blockchain after publishing the batch the certificates in a batch will be verifiable.
                        </li>
                        <li>
                            <h4>Certificate Verification</h4>
                            This will allow users to verify all the certificates that have been published to blockchain.
                        </li>
                    </ol>
                </div>
            </div>
            <div className="row mt-5" >
                <div className="col shadow" style={divstyle}>
                    <h1 className="border-bottom">Startup Instruction</h1>
                    <h4>Prototypes Reqirement</h4>
                    <ul>
                        <li>Image Viewer</li>
                    </ul>
                    <h4>Web Application Requirements</h4>
                    <ul>
                        <li>Google Chrome</li>
                        <li>Mozilla firefox</li>
                        <li>Microsoft Chromium</li>
                    </ul>
                </div>
            </div>
            <PLinks />
            <h1 className="text-center mt-5">Our Team</h1>
            <hr />
            <div className="row mt-5" id="ot">
                <div className="col">
                    <Profile info={data[3]} />
                </div>
                <div className="col">
                    <Profile info={data[2]} />
                </div>
                <div className="col">
                    <Profile info={data[0]} />
                </div>
            </div>
            <div className="row mt-5" id="ot">
                <div className="col d-flex justify-content-center">
                    <Profile info={data[1]} />
                </div>
                <div className="col d-flex justify-content-center">
                    <Profile info={data[4]} />
                </div>
            </div>

        </div>
    )
}
export default Home