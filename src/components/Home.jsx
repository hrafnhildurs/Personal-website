import React, { Component } from 'react'
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { renderToStaticMarkup } from "react-dom/server";
import { withLocalize } from "react-localize-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Translate } from "react-localize-redux";
import navTranslations from "../translations/navTranslations.json";
import pageTranslations from "../translations/pageTranslations.json";
import './Home.css';


export default withLocalize(class Home extends Component {
    constructor(props) {
        super(props);
    
        this.props.initialize({
          languages: [
            { name: "English", code: "en" },
            { name: "Íslenska", code: "is" }
          ],
          translation: navTranslations,
          options: { defaultLanguage: "en", renderToStaticMarkup }
        });
        this.props.addTranslation(pageTranslations);
    }

    render() {
        return (
            <Grid fluid>
                <Row>
                    <div id="home">
                    <Col xs={12} sm={12} md={12}>
                        <h1>
                            Hrafnhildur <center>Skúladóttir</center> <br />
                            <div className="subtitle"><small><Translate id="home.subtitle" className="subtitle">Web and mobile developer</Translate></small></div>
                        </h1>
                    </Col>
                    </div>
               </Row>
               <Row>
                    <div id="about">
                        <h2 className="section-title">Hrafnhildur Skúladóttir</h2>
                        <Col xs={12} sm={12} md={6}>
                        <Image className="about-me-image" src="/assets/hrafnhildur.png" circle responsive></Image>
                        </Col>
                        <Col xs={12} sm={12} md={3}>
                            <h3 className="about-me-subtitle"><Translate id="about.subtitle">About me</Translate></h3>
                            <p className="about-me-text"><Translate id="about.text"> I have a BSc. in Computer Science from Reykjavík University.
                                I have mainly been working on web and mobile development projects and I am, as well,
                                interested in working on other forms of programming. I love learning new things that
                                increase my knowledge and skills. I am dedicated, hard working and I never shy away from a challenge.</Translate></p>
                        </Col>
                    </div>
                </Row>
                <Row className="project-row">
                    <div id="projects">
                        <h2 className="section-title"><Translate id="projects.title">Projects</Translate></h2>
                        <Col xs={12} sm={12} md={4} mdOffset={2}>
                            <a href="https://geosilica.is" target="_blank" rel="noopener noreferrer">
                                <div className="project">
                                    <Image className="project-image" id="project1-image" src="/assets/geoSilica.png" thumbnail responsive></Image>
                                    <div className="middle">
                                        <div className="overlay-text"><Translate id="projects.info1">Website for geoSilica Iceland</Translate></div>
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col xs={12} sm={12} md={4}>
                            
                                <div className="project">  
                                    <Image className="project-image" id="project2-image" src="/assets/IcelandicNounsAndVerbs.png" thumbnail responsive></Image>
                                    <div className="middle">
                                        <div className="overlay-text"><Translate id="projects.info2">Icelandic nouns and verbs app for iOS and Android</Translate></div>
                                        <div className="overlay-text">
                                            <Row className="justify-content-md-center"> 
                                                <Col className="store-link"><a href="https://itunes.apple.com/us/app/icelandic-nouns-and-verbs/id1441344800?ls=1&mt=8" target="_blank" rel="noopener noreferrer">
                                                    <img alt='Download on the App Store' src="/assets/appStore.svg" /></a>
                                                </Col>
                                                <Col className="store-link"><a href='https://play.google.com/store/apps/details?id=is.habby.IcelandicNounsAndVerbsFullVersion&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' target="_blank" rel="noopener noreferrer">
                                                    <img alt='Get it on Google Play' src="/assets/googlePlay.svg" /></a>
                                                </Col>
                                            </Row>
                                                
                                                
                                            
                                        </div>              
                                    </div>
                                </div>
                            
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div id="education">
                        <h2 className="section-title"><Translate id="education.title">Education</Translate></h2>
                        <Col xs={12} sm={12} md={12}>
                            <h3 className="education-subtitle1"><Translate id="education.subtitle1">University education</Translate></h3>
                            <Row>
                                    <Col xs={5} md={3} mdOffset={2}>
                                        <h3 className="school"><Translate id="education.school1">Reykjavík University</Translate></h3>
                                        <p className="education-date"><Translate id="education.date1">Aug 2015 - Jun 2017</Translate></p>
                                    </Col>
                                    <Col xs={7} md={6}>
                                        <h3 className="study"><Translate id="education.study1">BSc. Computer Science</Translate></h3>
                                        <p className="description"><Translate id="education.description1">Final project: the aim of the project was to enrich a shopper’s experience by
                                            providing a web application that enables customers, as well as staff, to get access
                                            to product details using their web browser of choice.</Translate></p>
                                    </Col>
                            </Row>
                        </Col>
                        <Col xs={12} sm={12}  md={12}>
                            <h3 className="education-subtitle2"><Translate id="education.subtitle2">Certificates</Translate></h3>
                            <Row>
                                <Col xs={5} md={3} mdOffset={2}>
                                    <h3 className="school"><Translate id="education.school2">NTV</Translate></h3>
                                    <p className="education-date"><Translate id="education.date2">Nov 2018 - Dec 2018</Translate></p>
                                </Col>
                                <Col xs={7} md={6}>
                                    <h3 className="study"><Translate id="education.study2">Graphic design</Translate></h3>
                                    <p className="description"><Translate id="education.description2">Short course where I learned the basics in Adobe Photoshop and InDesign</Translate></p>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5} md={3} mdOffset={2}>
                                    <h3 className="school"><Translate id="education.school3">Michigan State University on Coursera</Translate></h3>
                                    <p className="education-date"><Translate id="education.date3">Feb 2018</Translate></p>
                                </Col>
                                <Col xs={7} md={6}>
                                    <h3 className="study"><Translate id="education.study3">Introduction to Game Development</Translate></h3>
                                    <p className="description"><Translate id="education.description3">Certificate earned at Wednesday, February 28, 2018 4:18 PM GMT</Translate></p>
                                </Col>
                            </Row>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <div id="contact">
                        <h4 className="section-title"><Translate id="contact.title">Contact me</Translate></h4>
                        <Col xs={12} md={6} mdOffset={1}>
                            <a href="www.linkedin.com/in/hrafnhildur-skuladottir" target="_blank" rel="noopener noreferrer">
                                <Row>
                                    <Col xs={1} md={1} mdOffset={1}>
                                        <FontAwesomeIcon icon={['fab', 'linkedin']} color="white" />
                                    </Col>
                                    <Col xs={8} md={4}>
                                        <p className="contact-info"><nobr>www.linkedin.com/in/hrafnhildur-skuladottir</nobr></p>
                                    </Col>
                                </Row>
                            </a>
                        </Col>
                        <Col xs={12} md={5}>
                            <a href="mailto:hrafnhildurskula@gmail.com">
                                <Row>
                                    <Col xs={1} md={1}>
                                        <FontAwesomeIcon icon='at' color='white' />
                                    </Col>
                                    <Col xs={8} md={4}>
                                        <p className="contact-info">hrafnhildurskula@gmail.com</p>
                                    </Col>
                                </Row>
                            </a>
                        </Col>
                    </div>  
                </Row>
            </Grid>
        )
    }
})