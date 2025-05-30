import { useEffect } from "react";
import { useBuildingStore } from "../../store/Buildings";

const Buildings = () => {
  const { buildingData, buildings } = useBuildingStore();

  useEffect(() => {
    buildingData();
  }, []);
  return (
    <>
      <div className="mt-5 flex justify-center text-4xl font-semibold">
        <h1 className="text-NavyBlue">Buildings</h1>
      </div>

      <div className="overflow-x-auto rounded-lg shadow-sm mt-5">
        <table className="w-full text-left text-base">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 sm:p-3 text-center">#</th>
              <th className="p-2 sm:p-3 text-center">Name</th>
              <th className="p-2 sm:p-3 text-center">NO. of rooms</th>
              <th className="p-2 sm:p-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {buildings?.length > 0 &&
              buildings.map((building, i) => (
                <tr key={i} className="border-b border-gray-300">
                  <td className="py-2 sm:py-3 text-center">{i + 1}</td>
                  <td className="py-2 sm:py-3 text-center">
                    {building.buildingName}
                  </td>
                  <td className="py-2 sm:py-3 text-center">
                    {building.rooms.length}
                  </td>
                  <td className="py-2 sm:py-3 text-center text-DeepBlue">
                    View Details
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export { Buildings };
