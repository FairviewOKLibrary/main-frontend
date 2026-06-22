'use client';
import Image from "next/image";
// import style from '';
import home_pic from '@assets/home_pic.jpg';



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

        {/* </div> */}

      </div>

    </div>
  );
}

export default Home;