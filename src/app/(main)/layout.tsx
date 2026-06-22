'use client';
import React, { useEffect, useState } from 'react';
import type { Metadata } from "next";
import Navigation from '@components/Navigation';
import Footer from '@components/Footer';

import FirstLoad from '@components/FirstLoad';
// export const metadata: Metadata = {
//   title: "FCLp",
//   description: "yehaww description",
// };


const HomeLayout = ({ children }: any) => {

    const [firstLoad, setFirstLoad] = useState(true);
    useEffect(() => {
        // setTimeout(() => setFirstLoad(false), 1000)
    })
    return (
        <>
            {/* <FirstLoad /> */}
            <Navigation />
            {children}
            <Footer />
        </>
    )
}



export default HomeLayout;