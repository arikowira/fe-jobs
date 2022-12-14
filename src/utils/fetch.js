import axios from 'axios';

export async function getData(params) {
  try {
    return await axios.get(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions.json`,
      {
        params,
      }
    );
  } catch (err) {
    return console.log('error fetching');
  }
}
