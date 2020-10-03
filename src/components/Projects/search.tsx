import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { FILTER } from "../../constants/actionTypes";

import styles from "./styles.module.scss";

const Search = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  let dispatch = useDispatch();

  const handleOpenSearch = () => {
    setSearchIsOpen(true);
  };

  const handleCloseSearch = () => {
    setSearchIsOpen(false);

    dispatch({type: FILTER, payload: {'text': ''}})
  };

  const handleChange = (event: any) => {
        let value = event.target.value || '';
        
        dispatch({type: FILTER, payload: {'text': value}})
  }

  if (searchIsOpen) {
    return (
      <div className={styles.searchBox}>
        <BsSearch className={styles.iconSearch} />
        <input type="text" placeholder="Pesquisar por projeto ou cliente" onChange={handleChange} />
        <span className={styles.cancelButton} onClick={handleCloseSearch}>CANCELAR</span>
      </div>
    );
  }

  return (
    <div className={styles.projectsHead}>
      <div>Projetos</div>
      <div className={styles.searchArea}>
        <BsSearch className={styles.iconSearch} onClick={handleOpenSearch} />
      </div>
    </div>
  );
};

export default Search;
