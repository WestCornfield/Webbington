import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import WebbingtonModal from './WebbingtonModal.component';
import WebbingtonSearch from './WebbingtonSearch.component';
import './Webbington.styles.scss';

const Webbington = () => {
  const showModal = useSelector((state) => state.webbington.showModal);

  return (  <>
    <WebbingtonModal show={showModal} title={"Exciting Offer!"}/>
    <div className="index">
      <section className="index__header">
        <div className="index__logo"></div>
        <ul className="index__nav">
          <li className="index__active"><a>Web</a></li>
          <li><a href="serp.htm">Images</a></li>
          <li><a href="serp.htm">Videos</a></li>
          <li><a href="serp.htm">News</a></li>
        </ul>
        <WebbingtonSearch />
      </section>
      <footer className="index__footer">
        <div className="index__bottom">
          <ul className="index__links">
            <li><a href="#about">Business</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#about">Privacy</a></li>
            <li><a href="#about">Terms</a></li>
            <li><a href="#about">Settings</a></li>
          </ul>
          <p className="index__copyright">&copy; 20XX The Present Future</p>
        </div>
      </footer>
    </div>
  </>
);

}

export default Webbington;
