import { HeadlineType, NirbachitoType } from "../AllTypes";

export type NirbachitoProps = {
  Data : NirbachitoProps[];
}

const Nirbachito = ({ Data }: NirbachitoProps) => {
 
  return (
    <div>
      <div>
        <h1>{}</h1>
        <hr  />
        {
          selected.map((data:HeadlineType,ind:number)=>(
            <div>

            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Nirbachito;