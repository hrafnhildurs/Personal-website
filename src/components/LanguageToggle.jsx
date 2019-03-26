import React from "react";
import { ButtonGroup, Button  } from 'react-bootstrap'
import { withLocalize } from "react-localize-redux";
import "./LanguageToggle.css";


const LanguageToggle = ({ languages, setActiveLanguage }) => (
    <ButtonGroup className="language-buttons">

      {languages.map(lang => (
        <Button bsStyle="primary" className="button" key={lang.code} onClick={() => setActiveLanguage(lang.code)}>
            {lang.name}
        </Button >
      ))}
    </ButtonGroup>
    
);

export default withLocalize(LanguageToggle);
