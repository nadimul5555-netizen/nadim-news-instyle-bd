import { HeadlineType } from "../AllTypes";

export type OthersNewsProps = {
  otherNews: HeadlineType[];
}

const OthersNews = ({ otherNews }: OthersNewsProps) => {
  
  return (
    <div>
      {
        otherNews.slice(0,4).map((News:HeadlineType,ind:number)=>(
                <div key={ind} className="card bg-base-100  shadow-lg my-5">
            
            <div className="card-body">
              <h2 className="card-title">{News.title}</h2>
              <p>{News.description}</p>
              <div className="card-actions justify-end">
                
              </div>
            </div>
          </div>
        )
      )
      }
    </div>
  )
}

export default OthersNews;