import Image from "next/image";
import { HeadlineType, NirbachitoType } from "../AllTypes";

export type SelectedProps = {
  Data: NirbachitoType;
}

const SelectedPage = ({ Data }: SelectedProps) => {
  
  return (
    <div>
<h1 className="my-5">{Data.title}</h1>
      <hr className="p-5"/>
    <div className="grid grid-cols-3">
      
              {
                Data.articles.map((data:HeadlineType,ind:number)=>(
                  <div key={ind} >

                        <div className="card w-80 bg-base-100  shadow-lg my-5">
                <figure>
                  <Image src={data.imageUrl} height={600} width={600} alt={data.imageAlt}></Image>
                </figure>
                <div className="card-body">
                  <p>{data.category}</p>
                  <h2 className="card-title">{data.title}</h2>
                  <p>{data.description}</p>
                  <div className="card-actions justify-end">
                    
                  </div>
              </div>
                </div>
              </div>
          ))
        }
    </div>
        </div>
  )
}

export default SelectedPage;