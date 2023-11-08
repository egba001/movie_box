const url = 'https://countryapi.io/api/all';

export const fetchCountries = async () => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer MpJse6A1pKlLteGs254kNycOkFIS1BMVZsa96PCq`
      }
    })
    const data = await res.json();
    return data;
}