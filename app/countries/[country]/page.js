import Navbar from "@/app/ui/nav";
import { fetchDetail } from "@/utils/fetchDetail"
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function CountryPage({ params }) {
    const countryData = fetchDetail(params.country)

    const data = await countryData;
    console.log(data)
    return (
      <Suspense fallback={<h2>Loading...</h2>}>
        <div className="h-full w-full px">
          <div className="px-10 flex-col justify-center h-full items-center">
          <Link href='/' className="rounded-xl bg-lgray px-5 mt-10 py-3 mb-6 lg:mb-0 text-white"><button>Back</button></Link>
          <div className="container mx-auto h-full flex flex-col lg:flex-row items-center py-r space-y-7 lg:justify-between">
            <Image src={data[0].flags.png} width={600} height={700} alt={data[0].name.common} />
            <div className="text-white w-1/2 ml-5">
              <h3 className="text-xl font-bold mb-7">{data[0].name.common}</h3>
              <div>
                <p>Population: <span>{data[0].population}</span></p>
                <p>Region: {data[0].region}</p>
                <p>Capital: {data[0].capital}</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </Suspense>
    )
  }