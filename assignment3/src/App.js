import React, { Component } from 'react';
import './reset.css';
import './App.css';

// import {Jumbotron} from 'react-bootstrap';
// import SearchForm from './components/SearchForm';
// import Results from './components/Results';


class App extends Component {
  render() {
    return (
      // <div>
      //   <Jumbotron>
      //     <h1>Search App<h1/>
      //     <p>This is a simple search app.<p/>
      //     <SearchForm/>

      //   <Jumbotron/>
      //   <Results/>
      // <div/>
<div className="wrapper">
  {/* Start Header */}
  <header className="navbarwrapper bg-color-light-grey">
    <div className="container">
      <div className="navbar u-clearfix">
        <div className="logo navbar__logo">
          <div className="logo__title">Website Title</div>
          <a className="logo__image u-shadow-minor" />
        </div>
        <div className="nav navbar__nav">
          <a href="#popup-menu" className="menu-toggle">
            <span />
            <span />
            <span />
          </a>
          <ul id="popup-menu" className="menu menu--horizontal u-clearfix responsive-popup">
            <a href="#!" className="popup-menu__close">
              <span />
              <span />
            </a>              
            <li><a className="menu__item" href="#">Item 1</a></li>
            <li><a className="menu__item" href="#">Item 2</a></li>
            <li><a className="menu__item" href="#">Item 3</a></li>
            <li><a className="menu__item" href="#">Item 4</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  {/* End Header */}
  {/* Start Section */}
  <section className="main">
    {/* Start Welcome Message */}
    <div className="welcome givePadding bg-color-blue">
      <div className="container">
        <h1 id="welcome-text-change" onclick="changeText()" className="u-text-center welcome-text u-pointer">Welcome Message</h1>
      </div>
    </div>
    {/* End Welcome Message */}
    {/* Start Section */}
    <div className="section">
      <div className="container">
        <h2 className="u-text-center titlePadding">Section Title</h2>
        <div className="row">
          <div className="col-1-2">
            <div className="contentbox u-shadow bg-color-deep-blue u-text-center u-margin-16 u-padding-bt-120 u-padding-tp-8 ">Content Box 1</div>
          </div>
          <div className="col-1-2">
            <div className="contentbox u-shadow bg-color-deep-blue u-text-center u-margin-16 u-padding-bt-120 u-padding-tp-8 ">Content Box 2</div>
          </div>
        </div>
        <div className="row">
          <div className="col-1-2">
            <div className="contentbox u-shadow bg-color-deep-blue u-text-center u-margin-16 u-padding-bt-120 u-padding-tp-8 ">Content Box 3</div>
          </div>
          <div className="col-1-2">
            <div className="contentbox u-shadow bg-color-deep-blue u-text-center u-margin-16 u-padding-bt-120 u-padding-tp-8 ">Content Box 4</div>
          </div>
        </div>
      </div>
    </div>
    {/* End Section*/}
    {/* Start CallButton */}
    <div className="callbutton">
      <div className="container">
        <div className="u-text-center  titlePadding">
          <div id="btn-show" className="btn btn--lg u-shadow-minor">Call to Action</div>
        </div>
        <div id="show-box">
          <div className="row">
            <div className="col-1-2">
              <div className="contentbox u-shadow bg-color-deep-blue u-text-center u-margin-16 u-padding-bt-120 u-padding-tp-8 ">Content Box 5</div>
            </div>
            <div className="col-1-2">
              <div className="contentbox u-shadow bg-color-deep-blue u-text-center u-margin-16 u-padding-bt-120 u-padding-tp-8 ">Content Box 6</div>
            </div>
          </div>
          <div className="row">
            <div className="col-1-2">
              <div className="contentbox u-shadow bg-color-deep-blue u-text-center u-margin-16 u-padding-bt-120 u-padding-tp-8 ">Content Box 7</div>
            </div>
            <div className="col-1-2">
              <div className="contentbox u-shadow bg-color-deep-blue u-text-center u-margin-16 u-padding-bt-120 u-padding-tp-8 ">Content Box 8</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Button */}
  </section>
  {/* End Section */}
  {/* Start Footer */}
  <footer className="footer">
  </footer>
  {/* End Footer */}
</div>

    );
  }
}

export default App;
