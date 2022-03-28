import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face: {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2');
    format('woff2');
    font-weight: normal;
    font-style: normal;
  } 

  html {
    --red: #ff0000;
    --black: #BADA55;
    --grey: #3A3A3A;
    --lightGrey: #e1e1e1;
    --offwhite: #ededed;
    --maxWidth: 1000px;
    --bs: 0 12px 0 rgba(0,0,0,0.09);    
  }

  body {
    font-family: 'radnika_next';
  }
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <h2>Hi, I am the page components</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
