const Bookings = () => {
  return (
    <>
      <div className="mt-5 flex justify-center text-4xl font-semibold">
        <h1 className="text-NavyBlue">Bookings</h1>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-sm mt-5">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 sm:p-3 text-center">#</th>
              <th className="p-2 sm:p-3 text-center">ROOM</th>
              <th className="p-2 sm:p-3 text-center">BUILDING</th>
              <th className="p-2 sm:p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-2 sm:py-3 text-center">1</td>
              <td className="py-2 sm:py-3 text-center">SPA 101</td>
              <td className="py-2 sm:py-3 text-center">SPA</td>
              <td className="py-2 sm:py-3 text-center text-DeepBlue">
                View Details
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 sm:py-3 text-center">2</td>
              <td className="py-2 sm:py-3 text-center">CLB 002</td>
              <td className="py-2 sm:py-3 text-center">CLB</td>
              <td className="py-2 sm:py-3 text-center text-DeepBlue">
                View Details
              </td>
            </tr>
            <tr className="border-b border-gray-300">
              <td className="py-2 sm:py-3 text-center">3</td>
              <td className="py-2 sm:py-3 text-center">NCLB 011</td>
              <td className="py-2 sm:py-3 text-center">NCLB</td>
              <td className="py-2 sm:py-3 text-center text-DeepBlue">
                View Details
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export { Bookings };
