const Buildings = () => {
  return (
    <>
      <div className="mt-5 flex justify-center text-4xl font-semibold">
        <h1 className="text-NavyBlue">Buildings</h1>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-sm mt-5">
        <table className="w-full text-left text-sm sm:text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                #
              </th>
              <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                Name
              </th>
              <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                NO. of rooms
              </th>
              <th className="p-2 sm:p-3 text-center text-xs sm:text-sm md:text-base">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300">
              <td className="py-2 sm:py-3 text-center">1</td>
              <td className="py-2 sm:py-3 text-center">SPA</td>
              <td className="py-2 sm:py-3 text-center">20</td>
              <td className="py-2 sm:py-3 text-center">View Details</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export { Buildings };
