import { HeadlineType } from "../AllTypes";

export type MostReadProps = {
  MainData: HeadlineType[]
}

const MostRead = ({ MainData }: MostReadProps) => {
  
  return (
        <div className=" bg-base-100  shadow-lg rounded-lg">
          <h1 className="text-2xl m-5">সর্বাধিক পঠিত</h1>
      {
        MainData.map((News:HeadlineType,ind:number)=>(
                <div key={ind} >
            
            <div className="card-body">
              <h2 className="card-title"><span>{ind+1} </span>{News.title}</h2>
              
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

export default MostRead;