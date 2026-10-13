import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@styles/globals.scss";
import Head from "@components/Head";


export const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html
      lang="en"
      className={``}
    >
      <Head />

      <body>
        {children}
      </body>
    </html>
  );
}

export default RootLayout;



/*
Earthquake data
Tornado/Storm data
Reported people sickness data
Obiturary
yearbooks
microfilm
horoscope
event schedule
fairview newspaper
*/