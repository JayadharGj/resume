import React, {Component} from "react";
import SocialMediaButtons from 'react-social-media-buttons';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

import "./menu.css";
import 'bootstrap/dist/css/bootstrap.css';

import About from "./Images/about.jpg";

//export NODE_OPTIONS=--openssl-legacy-provider

class Container extends Component {
    constructor(){
        super();
        this.state = {
            modal: false
        };
        
        this.workDetails = [
            {
                company: "Samsung",
                items: [
                    {
                        duration: "June 2018 - July 2022",
                        location: "Noida,India",
                        position: "Lead Software Engineer",
                        experience: [
                            // make this look like a paragraph
                            `As a seasoned Android developer with extensive experience from Android 8 through Android 13,
                            I have honed my skills in Android app development. My proficiency in adapting services for inter-process communication
                            and managing databases through content resolvers has been instrumental in reducing user-reported issues by 25%.
                            My expertise extends to applying design patterns and integrating SDKs to develop scalable and maintainable applications. Representing the SRIN Samsung Pass team, 
                            I have contributed to international collaborations during business trips to Samsung HQ in South Korea and MasterCard in Australia. 
                            My commitment to excellence is further demonstrated by my certification in Algorithms and Data Structures, with a notable achievement of training over 500 employees and exceeding annual goals by 35%.
                            Additionally, my innovative contributions have been recognized with the filing of an A1 grade patent at Samsung. 
                            `, 
                            <br/>,
                            <br/>,
                            "Lead the development of Samsung Pass, leaning on my expertise in Android development, design patterns, and SDK integration.",
                        ]
                    }
                ]
                
            },
            {
                company: "UTD",
                items: [
                    {
                        duration: "Aug 2022 - Dec 2022",
                        location: "Dallas, USA",
                        position: "CS Outreach Tutor",
                        experience: [
                            `Collaborated with professors in a team environment to instruct Data Structures, Algorithms, and languages including C, C++, and Java. 
                             Conceptualized Machine Learning models and OS scheduling algorithms from scratch as a part of curriculum.`, 
                            <br/>,
                            <br/>,
                            "Developed a model to identify user emotions from smartphone usage patterns, achieving an 84% accuracy rate.",
                        ]
                    }
                ]
            },
            {
                company: "CENRG Labs IIT Kharagpur",
                items: [
                    {
                        duration: "Aug 2017 - March 2018",
                        location: "Kharagpur, India",
                        position: "Machine Learning Intern",
                        experience: [
                            `Data Preparation: I ensured high-quality model inputs by processing raw data through imputation, normalization, and feature extraction.
                            Model Optimization: I contributed to building and refining models, experimenting with algorithms and hyper-parameters to boost performance metrics.
                            Emotion Identification Project: I was part of a team that developed a model to identify user emotions from smartphone usage patterns, achieving an 87% accuracy rate.`, 
                            <br/>,
                            <br/>,
                            "Developed a model to identify user emotions from smartphone usage patterns, achieving an 84% accuracy rate.",
                        ]
                    }
                ]
            }
        ];

        this.projects = [
            {
                place: "Samsung",
                color: "red",
                topic: "Android , Image Processing",
                heading: "My Digital Life",
                content: "Developed Digital ID creation using govt. ID images, verified for authenticity using ML Algorithms."
            },
            {
                place: "Samsung",
                color: "blue",
                topic: "Design Patterns",
                heading: "MDL Architecture Design",
                content: "Designed App Architecture for backward and future compatibility across diverse Android variants."
            },
            {
                place: "Samsung",
                color: "blue",
                topic: "Android Application",
                heading: "Samsung Pass Auto Password Generator and Health Integration",
                content: "Developed a Keyboard Plugin for strong password generation and visualization of password strength"
            },
            {
                place: "Workgallery",
                color: "blue",
                topic: "Web application",
                heading: "Workgallery - a platform for dynamic portfolio creation",
                content: "Developed a platform for artists to showcase their work and connect with potential clients."
            },
            {
                place: "DoctorDb",
                color: "blue",
                topic: "Website",
                heading: "a website to handle doctor, patient, and pharmacy interactions",
                content: "Built a website to manage doctor appointments, patient records, and pharmacy prescription orders."
            },
            {
                place: "SUNY Buffalo",
                color: "blue",
                topic: "Modern Networking Concepts",
                heading: "Chat Application from Scratch Using TCP/IP HTTP protocols",
                content: "Developed a chat application using TCP/IP and HTTP protocols, with features like group chat, user preferred restrictions, and message encryption."
            },
        ]
    }

    componentDidMount(){
        const image1 = document.getElementById("image1")
        const windowRect = document.getElementById("about").getBoundingClientRect();
        const image1Width = (1435 * image1.getBoundingClientRect().height) / 797 ;
        if(image1Width > windowRect.width){
            let marginLeft = (windowRect.width - image1Width)/2
            const imageRatio = (image1.getBoundingClientRect().height / windowRect.width);
            if(imageRatio > 1.44){
                marginLeft = marginLeft - windowRect.width*(0.18*imageRatio)
            }
            image1.style.marginLeft =  marginLeft + "px";
        }
        else{
            image1.style.height = "unset";
            image1.style.width = "100%";
        }
        if(image1.height === 0){
            const image1Height = (797 * image1.getBoundingClientRect().width) / 1435 ;
            if(image1Height > windowRect.height){
                let marginTop = (windowRect.height - image1Height)/2
                image1.style.marginTop =  marginTop+ "px";
            }
        }
    }

    scroll = () => {
        const scrollContainer = document.getElementById("scrollDiv");
        var winScroll = scrollContainer.scrollTop;
        var height = scrollContainer.scrollHeight - scrollContainer.clientHeight;
        var scrolled = (winScroll / height) * 262 - 2
        document.getElementById("menuId").style.transform = "rotate(" + scrolled + "deg)";
    }

    openModal = project => () => {
        this.setState({
            modal: true,
            project: project
        });
    }

    closeModal = () => {
        this.setState({
            modal: false
        });
    }

    render(){
        return(
            [<div className={"menu"} onScroll={this.scroll} id={"menuId"}>
                <span className="char1">A</span>
                <span className="char2">B</span>
                <span className="char3">O</span>
                <span className="char4">U</span>
                <span className="char5">T</span>
                <span className="char6">&nbsp;</span>
                <span className="char7">M</span>
                <span className="char8">E</span>

                <span className="char9">&nbsp;</span>
                <span className="char10">|</span>
                <span className="char11">&nbsp;</span>

                <span className="char12">W</span>
                <span className="char13">O</span>
                <span className="char14">R</span>
                <span className="char15">K</span>

                <span className="char16">&nbsp;</span>
                <span className="char17">|</span>
                <span className="char18">&nbsp;</span>

                <span className="char19">P</span>
                <span className="char20">R</span>
                <span className="char21">O</span>
                <span className="char22">J</span>
                <span className="char23">E</span>
                <span className="char24">C</span>
                <span className="char25">T</span>
                <span className="char26">S</span>
                
                <span className="char27">&nbsp;</span>
                <span className="char28">|</span>
                <span className="char29">&nbsp;</span>

                <span className="char30">C</span>
                <span className="char31">O</span>
                <span className="char32">N</span>
                <span className="char33">T</span>
                <span className="char34">A</span>
                <span className="char35">C</span>
                <span className="char36">T</span>

                <span className="char37">&nbsp;</span>
                <span className="char38">|</span>
                <span className="char39">&nbsp;</span>
            </div>,
            <div className={"contents"} onScroll={this.scroll} id={"scrollDiv"} >
                <div className={"contentsInside"}>
                    <div className={"contentAbout"} id={"about"}>
                        <img src={About} alt="" className={"aboutImage"} id={"image1"}/>
                        <div className={"aboutHeader"}>
                            <Fade right delay={250} duration={500}><h1>Jayadhar Gandham</h1></Fade>
                            <Fade right delay={350} duration={500}><h4>Ex-Samsung - Lead Software Engineer</h4></Fade>
                            <Fade right delay={450} duration={500}><h4>Android and Full Stack Developer</h4></Fade>
                            <Fade right delay={550} duration={500}><h2>State University of New York at Buffalo <br/>Computer Science <br/></h2></Fade>
                            <Fade right delay={650} duration={500}><h4>NIT Durgapur</h4></Fade>
                        </div>
                        <Fade bottom delay={650} duration={500}>
                            <div className={"aboutSubHeader"}>
                                <p>"motto"</p>
                                <h2>Engineer =&gt; Develop =&gt; Deliver</h2>
                            </div>
                        </Fade>
                    </div>
                    <div className={"contentWork"}>
                        {
                            this.workDetails.map(work => {
                                return <div key={work} className={"workItem"}>
                                    <Fade left delay={500} duration={250}>
                                        <table>
                                            <tr>
                                                <td>
                                                    <div className={"company"}>{work.company}</div>
                                                    {
                                                        work.items.map(item => {
                                                            return <div>
                                                                <div className={"duration"}>{item.duration}</div>
                                                                <div className={"location"}>{item.location}</div>
                                                                <div className={"experience"}>
                                                                <span className={"position"}>{item.position}</span>&nbsp;
                                                                {
                                                                    item.experience.map(ex => {
                                                                        return ex;
                                                                    })
                                                                }
                                                                </div>
                                                            </div>
                                                        })
                                                    }
                                                </td>
                                            </tr>
                                        </table>
                                    </Fade>
                                </div>
                            })
                        }
                    </div>
                    <div className={"contentProject"}>
                    <Fade left delay={250} duration={500}>
                        <div className={"projectsContainer"}>
                            {
                                this.projects.map((project, index) => {
                                    return <Fade bottom delay={250} duration={500}>
                                        <div className={"projectContainer"} onClick={this.openModal(project)}>
                                            <div className={"topic"}>{project.topic}</div>
                                            <div className={"projectheading"}>{project.heading}</div>
                                        </div>
                                    </Fade>
                                })
                            }
                        </div>
                    </Fade>
                    </div>
                    <div className={"contenContact"}>
                        <div className={"contactContainer"}>
                            <Zoom bottom delay={500} duration={500}>
                                <div className={"contactButtons"}>
                                    <a href={"mailto:jayadhargandham@gmail.com"}>Get In Touch</a>
                                </div>
                            </Zoom>
                            <Zoom bottom delay={500} duration={500}>
                            <div className={"contactButtons"}>
                                <a href={"https://www.linkedin.com/in/jayadhargandham/"} target="_blank" rel="noopener noreferrer">Resume</a>
                            </div>
                            </Zoom>
                            <div className={"contactFooter"}>Designed by Jayadhar Gandham</div>
                        </div>
                    </div>
                </div>
            </div>,
            <div>
            {
                this.state.modal
                ? <div className={"pageModal"}>
                    <Zoom top delay={0} duration={300}>
                        <div className={"pageModalContent"}>
                            <div className={"closeButton"} onClick={this.closeModal}>
                                &times;
                            </div>
                            <div className={"projectModalTopic"}>{this.state.project.topic}</div>
                            <div className={"projectModalHeading"}>{this.state.project.heading}</div>
                            <div className={"projectModalContent"}>
                                {this.state.project.content}
                                <div className={"projectModalPlace"}>{this.state.project.place}</div>
                            </div>
                        </div>
                    </Zoom>
                </div>
                : null
            }
            </div> ,
            <div className={"socialContainer"}>
                <Fade bottom delay={650} duration={500}>
                    <SocialMediaButtons
                        links={
                            [
                                "https://www.linkedin.com/in/jayadhargandham/",
                                "https://www.instagram.com/jayadharGj",
                                "https://www.facebook.com/jayadharGj",
                                "https://twitter.com/jayadharGj",
                            ]
                        }
                        openNewTab={true}
                        buttonStyle={{
                            width: 'clamp(20px, 3vw, 50px)',
                            height: '3vw',
                        }}
                        iconStyle={{
                            color: 'black',
                        }}/>
                    <div className={"line socialLine"}/>
                </Fade>
            </div>        
        ]

            
    );}
}

export default Container;