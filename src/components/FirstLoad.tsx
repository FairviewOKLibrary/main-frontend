'use client';
import { useEffect, useState } from 'react';
import { animate, utils } from 'animejs';

const FirstLoad = () => {
    const animation = () => {
        animate('.screenRefresh', {
            delay: 3000,
            duration: 5000,
            scale: () => utils.random(.25, 1.5, 3),
            onComplete: () => console.log('done!')
        })
    }
    useEffect(() => {
        animation()
    }, []);
    return (
        <div className={'screenRefresh'}>Loading...</div>
    )
}

export default FirstLoad;