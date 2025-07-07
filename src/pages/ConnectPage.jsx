const ConnectPage = () => {
  const CLIENT_ID = '4d80d45a-0bd1-4368-a089-bbb2dbd33b28';
  const REDIRECT_URI = 'http://localhost:5173/callback';
  const scope = 'read_vehicle_info';

  const connect = () => {
    const authUrl = `https://connect.smartcar.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&scope=${scope}&redirect_uri=${REDIRECT_URI}&mode=test&state=random123`;
    window.location.href = authUrl;
  };

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold mb-4">Hubungkan Kendaraan Anda</h1>
      <button onClick={connect} className="bg-blue-600 text-white px-6 py-2 rounded">
        Connect to Smartcar
      </button>
    </div>
  );
};

export default ConnectPage;
