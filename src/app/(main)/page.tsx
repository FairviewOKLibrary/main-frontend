'use client';
import Image from "next/image";
// import style from '';
import home_pic from '@assets/home_pic.jpg';
import OurServices from '@components/OurServices';


const Home = () => {



  const looped = (arg: number) => {
    const n = Number(arg) || 0;
    const arr = [...Array(n)].map((_, i) => (<div key={i}>{i + 1} <br /></div>));
    return (arr);
  }
  return (
    <div className="">
      <div className='__home_main' >
        {/* <div className='__home_background_image' style={{ backgroundImage: `url(${home_pic.src})` }}> */}
        {/* {looped(50)} */}
        {/* </div> */}
        <OurServices />
      </div>
    </div>
  );
}

export default Home;