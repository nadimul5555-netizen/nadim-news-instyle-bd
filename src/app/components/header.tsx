


import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";

import { CategoryType } from "../AllTypes";
import DatePage from "./date";
import CategoryPage from "../Fetchs/category";
import ButtonPage from "./ButtonPage";


const HeaderPage = () => {


  return (
    <header className="border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3">

          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" className="transition-transform hover:scale-105">
              <Image
                src="/assets/Favicon.png"
                height={80}
                width={80}
                alt="News Instyle BD Logo"
                className="rounded-2xl object-cover shadow-md"
              />
            </Link>
          </div>

          {/* Nameplate + Date */}
          <div className="flex flex-col items-center text-center">
            <Link href="/">
              <Image
                src="/assets/NamePlate.png"
                height={100}
                width={400}
                alt="News Instyle BD"
                className="h-auto w-auto max-w-full"
              />
            </Link>

            <div className="mt-2 text-sm font-medium text-gray-500">
              <DatePage/>
            </div>
            <div>

             <CategoryPage/>
            </div>
            
            </div>
          {/* Authentication */}
          <div className="flex items-center justify-center gap-3 md:justify-end">
            <ButtonPage></ButtonPage>
          </div>

        
      </div>
 </div>
    </header>
);
};
export default HeaderPage;
