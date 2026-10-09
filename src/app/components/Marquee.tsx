import React from 'react';
import { HeadlineType } from '../AllTypes';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


const Marquee = async () => {
  const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10',{cache :'force-cache'})
  const data = await res.json();
  const Data:HeadlineType[] = data.data;
  console.log(Data)
  return ( 
    <div className='bg-red-700'>

        <div className='flex container mx-auto'>
      <div className='bg-red-800 text-2xl text-white px-2 py-2'>
        সর্বশেষ
      
      </div>
    <MarqueeText duration={10} direction='right'>

    <div className='bg-red-700 text-2xl text-white py-2'>

      {
        Data.map((dat:HeadlineType,ind:number)=>(
          
          
          <span key={ind}>
              <span>{dat.description}</span>
              <span className='mx-5'>•</span>
            </span>
          
          
        ))
      }
      </div>
      </MarqueeText>
    </div>
      </div>
  );
};

export default Marquee;