import Link from "next/link";
import { CategoryType } from "../AllTypes";

const CategoryPage = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories",
    {
      cache: "force-cache",
    }
  );

  const data = await res.json();

  const categorie:CategoryType[] = data.data;
  const categories = categorie.filter((data)=> data.scrapable)

  return (
    <div className="mt-3 flex flex-wrap justify-center gap-2">
      <Link href={'/'} className="rounded-md px-3 py-1 text-sm font-medium text-gray-700 transition hover:bg-[#8B4513] hover:text-white" ><p>হোম</p></Link>
      {categories.map((category:CategoryType,ind:number) => (
        

        
        <Link
          key={ind}
          href={category.slug}
          className="rounded-md px-2 py-1 text-sm font-medium text-gray-700 transition hover:bg-[#8B4513] hover:text-white"
          >
          {category.title}
        </Link>
          
      ))}
    </div>
  );
};

export default CategoryPage;