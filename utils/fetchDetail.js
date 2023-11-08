export const fetchDetail = async (country) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer MpJse6A1pKlLteGs254kNycOkFIS1BMVZsa96PCq`
        }
      });
    if(!res.ok) throw new Error('Try again');
    return res.json();
}