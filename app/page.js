'use client';
import Image from 'next/image'
import Navbar from './ui/nav'
import ThemeProvider, { ThemeContext } from '../context/display'
import Countries from './ui/homepage/countries'
import { useEffect, useState } from 'react';
import Link from 'next/link';

const url = 'https://restcountries.com/v3.1/all';


export default function Home() {
  return (
    <div className='w-full text-white flex flex-col justify-center items-center'>
      
        <h1 className='text-3xl font-bold mb-4'>Welcome to CountryView Web Application Built using Next js</h1>
        <p>Search and view details about countries in the world</p>
        <button className='bg-lgray rounded-md py-3 px-6 mt-6'>
          <Link href="signup">Register to continue</Link>
        </button>
    </div>
  )
}


