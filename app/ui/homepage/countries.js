import { BiChevronDown, BiSearch } from 'react-icons/bi';
import Card from './card';
import { useMemo, useState } from 'react';
import Link from 'next/link';

const Countries = ({ data }) => {

    const [searchTerm, setSearchTerm] = useState('');
    const [ showOptions, setShowOptions ] = useState(false);
    const [filterOptions, setFilterOptions] = useState({
        africa: {name: 'africa', isActive: false},
        americas: {name: 'americas', isActive: false},
        asia: {name: 'asia', isActive: false},
        europe: {name: 'europe', isActive: false},
        oceania: {name: 'oceania', isActive: false},
    });

    // Function to handle the search input change
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };


    const handleToggleFilter = (region) => {
        setFilterOptions(prevOptions => {
            return {
                ...prevOptions,
                [region]: {
                    ...prevOptions[region],
                    isActive: !prevOptions[region].isActive,
                }
            };
        });
    };

    // Filtering based on search term and active filters
    const filteredOptions = useMemo(() => {
        if (!data) {
            return []; // Return an empty array if data is null
        }
        return data.filter(option => {
            const isMatchingSearch = !searchTerm || (option.name.official && option.name.official.toLowerCase().includes(searchTerm.toLowerCase()));
            const selectedRegions = Object.keys(filterOptions).filter(key => filterOptions[key].isActive);

            if (selectedRegions.length === 0) {
                return isMatchingSearch;
            }

            return selectedRegions.some(selectedRegion =>
                option.region.toLowerCase() === filterOptions[selectedRegion].name.toLowerCase() && isMatchingSearch
            );
        });
    }, [data, searchTerm, filterOptions]);

    // Check if the array exists and is an array before mapping through it
    if (!data || !Array.isArray(data)) {
        return <div className="text-center text-white font-bold text-3xl">Loading....</div>;
    }

    return (
        <div className="w-full px-10" onClick={() => setShowOptions(false)}>
            <div className="lg:flex flex flex-col lg:flex-row py-8 mt-12 lg:mt-7 fixed w-full items-start lg:items-center justify-between top-10 left-0   bg-dgray px-12 ">
                <div className="rounded-xl mb-5 lg:mb-0 text-white w-[22rem] space-x-5 bg-lgray pl-3 flex items-center">
                    <BiSearch className='peer' />
                    <input
                    value={searchTerm}
                    onChange={handleSearch}
                    type="text"
                    placeholder='Search for a country...' className='bg-inherit w-full rounded-xl py-3 pr-5 outline-none peer' />
                </div>
                <div className="relative" onClick={(e) => e.stopPropagation()}>
                    <div onClick={() => {
                        setShowOptions(!showOptions)
                    }} className="w-[12rem] py-3 cursor-pointer justify-center bg-lgray flex items-center space-x-3 text-white rounded-xl">
                        <span>Filter by Region</span>
                        <BiChevronDown />
                    </div>
                    {
                        showOptions &&
                        <div className="w-[12rem] mt-3 rounded-xl px-5 py-3 bg-lgray z-20 absolute top-10 text-white shadow-md transition-all duration-300">
                            <ul className="flex-col space-y-2">
                                <li tabIndex={0} onClick={() => handleToggleFilter('africa')} className={`${filterOptions.africa.isActive === true ? 'bg-gray-600 p-1 rounded-md cursor-pointer' : 'bg-inherit p-1 cursor-pointer'}`}>Africa</li>
                                <li tabIndex={0} onClick={() => handleToggleFilter('americas')} className={`${filterOptions.americas.isActive === true ? 'bg-gray-600 p-1 rounded-md cursor-pointer' : 'bg-inherit p-1 cursor-pointer'}`}>America</li>
                                <li tabIndex={0} onClick={() => handleToggleFilter('asia')} className={`${filterOptions.asia.isActive === true ? 'bg-gray-600 p-1 rounded-md cursor-pointer' : 'bg-inherit p-1 cursor-pointer'}`}>Asia</li>
                                <li tabIndex={0} onClick={() => handleToggleFilter('europe')} className={`${filterOptions.europe.isActive === true ? 'bg-gray-600 p-1 rounded-md cursor-pointer' : 'bg-inherit p-1 cursor-pointer'}`}>Europe</li>
                                <li tabIndex={0} onClick={() => handleToggleFilter('oceania')} className={`${filterOptions.oceania.isActive === true ? 'bg-gray-600 p-1 rounded-md cursor-pointer' : 'bg-inherit p-1 cursor-pointer'}`}>Oceania</li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
            <div className="mx-auto justify-between gap-y-10 space-y-4 flex flex-col  lg:grid lg:grid-cols-4">
                {filteredOptions.map((item, itemIndex) => (
                    <Link href={`/countries/${item.name.official.toLowerCase()}`} key={itemIndex}> 
                    <Card
                        name={item.name.official}
                        population={item.population}
                        region={item.region}
                        capital={item.capital}
                        image={item.flags.png} />
                    </Link>
                ))
                }
            </div>
        </div>
    )
}

// country.name.official
// country.population
// country.region
// country.capital[0]
// country.flags.png

export default Countries;