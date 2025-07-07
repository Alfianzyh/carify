import { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'query-string';

const CallbackPage = () => {
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      const { code } = qs.parse(window.location.search);

      const res = await axios.post('https://auth.smartcar.com/oauth/token', {
        grant_type: 'authorization_code',
        code: code,
        client_id: '4d80d45a-0bd1-4368-a089-bbb2dbd33b28',
        client_secret: '3222f799-e8c9-4837-b268-bffbc20e9704',
        redirect_uri: 'http://localhost:5173/callback',
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const accessToken = res.data.access_token;

      const vehicleIdsRes = await axios.get('https://api.smartcar.com/v2.0/vehicles', {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      const vehicleId = vehicleIdsRes.data.vehicles[0];

      const vehicleInfo = await axios.get(`https://api.smartcar.com/v2.0/vehicles/${vehicleId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`
        }
      });

      setVehicle(vehicleInfo.data);
      localStorage.setItem('smartcarVehicle', JSON.stringify(vehicleInfo.data));
      window.location.href = '/Products';
    };

    fetchVehicle();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Data Kendaraan</h1>
      {vehicle ? (
        <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(vehicle, null, 2)}</pre>
      ) : (
        <p>Memuat data kendaraan...</p>
      )}
    </div>
  );
};

export default CallbackPage;
