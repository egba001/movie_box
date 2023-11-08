import Image from 'next/image'

const Card = ({ name, population, region, capital, image }) => {
    return (
        <div className="h-[16.5rem] text-white px-6 rounded-md">
            <div className='h-1/2 overflow-hidden'>
                <Image
                    src={image}
                    alt={`${name}'s flag`}
                    width={500}
                    height={500}
                    className='object-cover'
                />
            </div>
            <div className='w-full px-2 py-2 text-sm bg-lgray h-1/2'>
                <h2 className='font-semibold  mb-2'>{name}</h2>
                <p>Population: {population}</p>
                <p>Region: {region}</p>
                <p className='w-full block'>Capital: {capital}</p>
            </div>
        </div>
    )
}

export default Card;