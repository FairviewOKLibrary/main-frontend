'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ThemeChange from '@components/themeChange';
import logo from '@assets/cityoffairview.png';
import { Container } from 'react-bootstrap';
// Icons
import { Facebook, Messenger, Book, Wallet2 } from 'react-bootstrap-icons';
// Styles
import style from '@styles/navigation.module.scss';

const Navigation = () => {

    useEffect(() => {


    }, []);
    return (
        <>
            <div className={style.top_navigation}>
                <Container>
                    <div className={style.left}>
                        {/* Facebook, blog,  catalog, public/local sites*/}
                        <a href="https://www.facebook.com/fairviewoklibrary/" target="_blank"><Facebook /></a>
                        <a href="https://m.me/174502519274692" target="_blank"><Messenger /></a>
                        <a href="https://catalog.fairviewoklibrary.org/" target="_blank"><Book /></a>
                        <a href="#" target="_blank"><Wallet2 /></a>
                    </div>
                </Container>

            </div>
            <nav className={style.navigation_body}>
                <Container className="d-flex">

                    {/* <Image src={logo.src} alt='Logo' width={250} height={250} className={style.logo} loading="eager" /> */}
                    <div className='d-flex justify-content-center align-items-center'>
                        <p className={style.libraryText}>Fairview City Library</p>
                        <ThemeChange />
                    </div>
                </Container>
                <ul>
                    <li>
                        Main Links
                        <ul>
                            <li>Home</li>
                            <li>Library Board</li>
                            <li>About</li>
                            <li>Contact</li>
                            <li>Join FOL</li>
                        </ul>
                    </li>
                    <li>
                        Resources
                        <ul>
                            <li>Book Club</li>
                            <li>Public Sites Links</li>
                            <li>Library FAQ</li>
                            <li>Major County Obituaries</li>
                            <li>eBooks From Overdrive</li>
                            <li>Our Card Catalogue</li>
                        </ul>
                    </li>
                    <li>
                        Blog
                    </li>
                </ul>
            </nav>
        </>

    )
}

export default Navigation;



/*
How to get a library card.
How to get and use Libby / Overdrive
FOL
Library Board
About
Contact
Staff
Book Club
Public Site Links
Library FAQ
Blog
Card Catalogue
*/