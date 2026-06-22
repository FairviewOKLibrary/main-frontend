'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import ThemeChange from '@components/themeChange';
import logo from '@assets/cityoffairview.png';
import { Container } from 'react-bootstrap';
import style from '@styles/footer.module.scss';

const Footer = () => {

    useEffect(() => {


    }, []);
    return (
        <div className={style.footer}>
            <Container>
                Footer
            </Container>
        </div>
    )
}

export default Footer;

// Local business sites 