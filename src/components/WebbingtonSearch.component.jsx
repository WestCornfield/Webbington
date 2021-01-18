import React from 'react';
import { useDispatch } from "react-redux";
import { updateShowModal } from '../actions/webbingtonActions';

const WebbingtonSearch = () => {
  const dispatch = useDispatch();

  function onSearchChange(e) {
    dispatch(updateShowModal(true));
  }

  function onSearchFocus(e) {

  }

  return (<div className="index__search">
          <form className="index__form" action="serp.htm" methode="GET">
            <div>
              <input name="q" type="search" value=""
                     onFocus={(e) => onSearchFocus(e)}
                     onChange={(e) => onSearchChange(e)}
                     className="index__query"
                     maxLength="512"
                     autoComplete="off"
                     title="Search"
                     aria-label="Search"
                     dir="ltr"
                     spellCheck="false"
                     autoFocus="autofocus"
              ></input>
            </div>
            <button className="index__button" aria-label="Search" type="submit">
              <div className="index__ico"></div>
            </button>
          </form>
        </div>);
}

export default WebbingtonSearch;
