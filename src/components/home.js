import Profile from "../components/Profile"
import { useState } from "react";
const data = [{ Name: "Muhammad Rafay", Roles: ["Back-End", "Front-End"], img: "https://avatars.githubusercontent.com/u/46870378?s=400&u=b368aa02d31228b00775d60318c70127f08b68d5&v=4" },
{ Name: "Muhammad Aamir", Roles: ["Back-End", "Front-End"], img: "https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/50227176_2175635076084455_3785822420825276416_o.jpg?_nc_cat=103&ccb=2&_nc_sid=174925&_nc_eui2=AeG4KurTiDB8cbD3zXrVErFLn9L2jLFLrDGf0vaMsUusMfkWQ7LfnFHu_K168koYKEuwHmBhdTzFz6JfO3wkCl8K&_nc_ohc=dhLCPdOTZDQAX-OTY01&_nc_ht=scontent.fkhi9-1.fna&oh=e4a3d268753326491af031b72326cd07&oe=60392C5C" },
{ Name: "Muhammad Ismail", Roles: ["Back-End", "Front-End"], img: "https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/55495120_2334394260178219_9099039914820894720_o.jpg?_nc_cat=104&ccb=2&_nc_sid=174925&_nc_eui2=AeEJGs3eOk8OFz6f_0UoHj2W4bd8BkfkLpDht3wGR-QukKUcok7vL8DKuoe3DnItVq_dyEIy2vcuS5auWG6go6nk&_nc_ohc=3TUkjqZZZ5wAX8d6F6f&_nc_ht=scontent.fkhi9-1.fna&oh=e044212b0b814eef25455e4f4573b6f8&oe=6039B243" },
{ Name: "Muhammad Sabih", Roles: ["Back-End", "Front-End"], img: "https://media-exp1.licdn.com/dms/image/C5603AQGq-TWauCj8lQ/profile-displayphoto-shrink_800_800/0/1610740382684?e=1617235200&v=beta&t=GsBJsNLDSXZsBaoC8AX91zYGRm2nGW91NjfCngGxFsU" },
{ Name: "Muhammad Hassan", Roles: ["Back-End", "Front-End"], img: "https://scontent.fkhi9-1.fna.fbcdn.net/v/t1.0-9/131210052_3000532353495493_994512726174274901_o.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGSLBFcF7Jzlbm50MYaVIRdJ35rl3BjENcnfmuXcGMQ14RcJzsu5OrkYsai4hhJ3ajNxfgRWVkuf6oD1g8l6mPr&_nc_ohc=kQVAHgUHKX0AX-FBu-f&_nc_ht=scontent.fkhi9-1.fna&oh=77ac1b0470251a6958a6b4c7b6909123&oe=6037641A" }]
const Home = () => {
    const [Profiles, SetProfiles] = useState(data)
    return (
        <div className="container mb-5" style={{ marginTop: "120px" }}>
            <div className="row shadow" id="int">
                <div className="col">
                    <h1>Introdution</h1>
                    <p>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>
                </div>
            </div>
           
            <div className="row mt-5">
                <div className="shadow col mr-2" id="sc">
                    <h1>Scenerios</h1>
                    <ul>
                        <li>Create Certificates</li>
                        <li>Publish Certificates</li>
                        <li>Verify Certificates</li>
                    </ul>
                </div>
                <div className="shadow col ml-2 pb-2" id="pr">
                    <h1>Protoytpes</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                    <a href="#">Downlaod Prototypes</a>
                </div>

            </div>
            <div className="row mt-5">
                <div className="shadow col mr-2" id="ta">
                    <h1>Task Analysis</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                </div>
                <div className="shadow col ml-2" id="ua">
                    <h1>User Anaslysis</h1>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </p>
                </div>
            </div>
            <h1 className="text-center mt-5">Our Team</h1>
            <hr/>
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