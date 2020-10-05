import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { FILTER } from "../../constants/actionTypes";

import styles from "./styles.module.scss";

const Search = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [textFilter, setTextFilter] = useState('');

  let dispatch = useDispatch();

  const handleOpenSearch = () => {
    setSearchIsOpen(true);
  };

  const handleCloseSearch = () => {
    setSearchIsOpen(false);

    setTextFilter('');
    dispatch({ type: FILTER, payload: { text: "" } });
  };

  const handleChange = (event: any) => {
    let value = event.target.value || "";
    setTextFilter(value);

    dispatch({ type: FILTER, payload: { text: value } });
  };

  if (searchIsOpen) {
    return (
      <div className={styles.searchBox}>
        <div className={styles.searchInputGroup}>
          <BsSearch className={styles.iconSearch} />
          <input
            type="text"
            placeholder="Pesquisar por projeto ou cliente"
            onChange={handleChange}
            value={textFilter}
            autoFocus
          />
        </div>
        <span className={styles.cancelButton} onClick={handleCloseSearch}>
          CANCELAR
        </span>
      </div>
    );
  }

  return (
    <div className={styles.projectsHead}>
      <div><b>Projetos</b></div>
      <div className={styles.searchArea}>
        <BsSearch className={styles.iconSearch} onClick={handleOpenSearch} />
      </div>
    </div>
  );
};

export default Search;
