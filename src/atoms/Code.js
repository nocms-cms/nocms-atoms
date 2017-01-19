import React, { PropTypes } from 'react';
import Prism from 'prismjs';

const Code = (props) => {
  const {
    code,
    placeholder,
    language,
  } = props;

  const prismLang = Prism.languages[language] || Prism.languages.javascript;
  const html = Prism.highlight(code, prismLang);

  return (
    <pre>
      { code ?
        <code dangerouslySetInnerHTML={{ __html: html }} />
        : placeholder }
    </pre>
  );
};

Code.propTypes = {
  code: PropTypes.string,
  placeholder: PropTypes.string,
  language: PropTypes.string,
};

export default Code;
