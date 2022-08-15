import { Link } from 'react-router-dom';
import React from 'react';
import styles from '../../styles/header/SocialIcons.module.css'

const SocialIcons = () => {
    return (
        <ul className={styles.container}>
            <li>
                <Link to='/'>
                    
                </Link>
            </li>
            <li>
                <Link to='/'>
                    
                </Link>
            </li>
            <li>
                <Link to='/'>
                    
                </Link>
            </li>
            <li>
                <Link to='/'>
                    
                </Link>
            </li>
        </ul>
    );
};

export default SocialIcons;