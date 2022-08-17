import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import React from 'react';
import styles from '../../styles/header/SocialIcons.module.css'

const SocialIcons = () => {
    return (
        <ul className={styles.container}>
            <li>
                <Link to='/'>
                    <FaGooglePlusG />
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <FaInstagram />
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <FaTwitter />
                </Link>
            </li>
            <li>
                <Link to='/'>
                    <FaFacebookF />
                </Link>
            </li>
        </ul>
    );
};

export default SocialIcons;