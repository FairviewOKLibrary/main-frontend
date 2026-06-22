'use client';
import { useEffect, useState } from 'react';

import darkmode from '@assets/darkmode.png';
import lightmode from '@assets/lightmode.png';


// export const metadata: Metadata = {
//   title: "FCLp",
//   description: "yehaww description",
// };


const ThemeChange = () => {
    const [toggle, setToggle]: any = useState(false);
    const [firstPageLoad, setFirstPageLoad] = useState(false);
    const [isDarkmode, setIsDarkmode] = useState(false);
    const switchTheme = (colorToggle: any) => {
        if (colorToggle) {
            document.documentElement.setAttribute('data-theme', 'light');
            setIsDarkmode(false)
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDarkmode(true)
        }
    }

    useEffect(() => {
        switchTheme(toggle)
        if (!firstPageLoad) {
            setFirstPageLoad(true)
            if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.setAttribute("data-theme", "dark")
                setIsDarkmode(true)
            }
            else {
                document.documentElement.setAttribute("data-theme", "light");
                setIsDarkmode(false)

            }
        }
    }, [toggle]);
    return <button onClick={() => { setToggle(!toggle) }}><img src={!isDarkmode ? darkmode.src : lightmode.src} /></button>;
}

export default ThemeChange;