'use client';
import ThemeProvider, { ThemeContext } from '../context/display'
import Countries from './ui/homepage/countries'
import { useState, useEffect } from 'react';

const url = 'https://restcountries.com/v3.1/all';


export default function Home() {

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

useEffect(() => {
  getCountries();
}, [])

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


