import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import styles from '../../styles/header/MobileSearch.module.css'

const MobileSearch = ({search}) => {
    return (
        <div className={search ? styles.container : styles.closeSearch}>
            <input type='text' placeholder='جستجو...'/>
            <RiSearchLine className={styles.search}/>
        </div>
    );
};

export default MobileSearch;