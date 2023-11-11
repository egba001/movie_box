'use client';
import ThemeProvider, { ThemeContext } from '../../context/display'
import Countries from '../ui/homepage/countries'
import { useEffect, useState } from 'react';
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const url = 'https://restcountries.com/v3.1/all';


export default function Home() {

  const router = useRouter();
  const { status, data } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") router.replace("/signin");
    getCountries();
  }, [status]);

  const [ countries, setCountries ] = useState(null)
  

  const getCountries = async() => {
    try {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });

      if (result.ok) {
        const data = await result.json();
        setCountries(data);
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
}


  console.log(countries);

  return (
    <div className='w-full'>
      <ThemeProvider>
        <div className='w-full'>
          <Countries data={countries}/>
        </div>
      </ThemeProvider>
    </div>
  )
}


