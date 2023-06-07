import React from 'react';
import styles from './Searchbar.module.css'

const SearchBar = ({keyword}) => {
    const id검색값조회하기 = () => {

    }

    return (
        <section className={styles.searchBar}>
            <form>
                <input className={styles.idInput} type='text' placeholder='id로 검색하세요!'/>
                <button onClick={id검색값조회하기}>검색!</button>
            </form>
        </section>
    );
};

export default SearchBar;