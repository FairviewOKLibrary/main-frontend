import React from 'react';
import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "FCLp",
//   description: "yehaww description",
// };


const Head = () => {
    return (
        <head>
            <title>Fairview City Library</title>
            
            <link rel="icon" type="image/x-icon" href="/public/favicon.ico"></link>
        </head>
    )
}

export default Head;