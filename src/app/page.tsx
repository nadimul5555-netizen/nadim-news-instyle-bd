import Image from "next/image";
import Marquee from "./components/Marquee";
import MainNews from "./components/MainNews";
import OthersNews from "./components/OthersNews";
import { HeadlineType, NirbachitoType } from "./AllTypes";
import SelectedPage from "./components/Selected";
import MostRead from "./components/MostRead";

  const  Home= async()=> {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections" , {cache: 'force-cache'});
  const data = await res.json();
  const Data = data.data;
  const MainData = Data[0].articles
  const [firstNews,...otherNews]= MainData
  console.log(Data)
  const Selected = Data.slice(1);

  return (
    <div >
     <Marquee/>

     <div className="grid grid-cols-3 container mx-auto my-10 gap-5">
      <div className="col-span-2 " >
        <div className="grid grid-cols-2 gap-5">
        <div>
          
        <MainNews firstNews = {firstNews} key={firstNews.id}></MainNews>
        
        </div>
        <div>
          <OthersNews otherNews={otherNews} key={otherNews.length}></OthersNews>
        </div>
        </div >
        <div >
        {
          Selected.map((Data:NirbachitoType,ind:number)=> <SelectedPage key={ind} Data ={Data}></SelectedPage>)
        }
        </div>
      </div>
      <div className="col-span-1 ">
<MostRead key={MainData.id} MainData={MainData}></MostRead>
      </div>
     </div>
     
    </div>
  );
}
export default Home;