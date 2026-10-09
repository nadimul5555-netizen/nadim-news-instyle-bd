import Image from "next/image";
import { HeadlineType } from "../AllTypes";

export type MainNewsProps = {
  firstNews: HeadlineType;
}

const MainNews = ({ firstNews }: MainNewsProps) => {
  
  return (
    <div>
   
          <div className="card bg-base-100  shadow-lg">
  <figure>
    <Image src={firstNews.imageUrl} height={600} width={600} alt={firstNews.imageAlt} className=""></Image>
  </figure>
  <div className="card-body">
    <p>{firstNews.category}</p>
    <h2 className="card-title">{firstNews.title}</h2>
    <p>{firstNews.description}</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
     
    
    </div>
  )
}

export default MainNews;