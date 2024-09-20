  const Sidbar = () => {
    return (
      <div className="bg-gray-800 text-white min-h-screen p-6 w-64 shadow-lg">
        <h1 className="text-2xl font-semibold mb-6">Sidebar1</h1>
        {/* Add more sidebar content here */}
        <ul className="space-y-4">
          <li className="hover:text-gray-300 cursor-pointer transition duration-300">Dashboard</li>
          <li className="hover:text-gray-300 cursor-pointer transition duration-300">Settings</li>
          <li className="hover:text-gray-300 cursor-pointer transition duration-300">Profile</li>
          <li className="hover:text-gray-300 cursor-pointer transition duration-300">Logout</li>
        </ul>
      </div>
    );
  };
  
  export default Sidbar;
  
