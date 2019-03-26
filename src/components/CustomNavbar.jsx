import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { HashLink as Link } from 'react-router-hash-link';
import './CustomNavbar.css'; 
import { withLocalize } from "react-localize-redux";
import { Translate } from "react-localize-redux";
import navTranslations from "../translations/navTranslations.json";
import LanguageToggle from './LanguageToggle';

export default withLocalize(class CustomNavbar extends Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    state = {
        isTop: true,
      };
    
      componentDidMount() {
        document.addEventListener('scroll', () => {
          var isTop = window.scrollY < 550;
          var w = window.innerWidth;
          if(w <768) {
              isTop = window.scrollY < 170;
          }
          if (isTop !== this.state.isTop) {
              this.setState({ isTop })
          }
        });
      }

    render() {
        return (
            <Navbar collapseOnSelect fixedTop className={this.state.isTop ? '' : 'solid'}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link smooth to="/#home"></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <LanguageToggle />
                    <Nav pullRight>
                        <NavItem eventKey={1} componentClass={Link} href="/" smooth to="/#about">
                            <Translate id="about">About me</Translate>
                        </NavItem>
                        <NavItem eventKey={2} componentClass={Link} href="/" smooth to="/#projects">
                            <Translate id="projects">Projects</Translate>
                        </NavItem>
                        <NavItem eventKey={3} componentClass={Link} href="/" smooth to="/#education">
                            <Translate id="education">Education</Translate>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
})