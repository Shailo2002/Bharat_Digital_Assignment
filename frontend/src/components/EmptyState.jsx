import React from "react";

function EmptyState({ loading, hasData }) {
  return (
   <div className=" flex h-screen justify-center items-center pb-32 mx-4">
  <div className="flex flex-col justify-center items-center bg-white p-4 rounded-xl shadow-sm w-96 h-72 text-center">
    {hasData && !loading ? (
      <>
        <h3 className="text-gray-700 font-medium text-lg">No Data Available</h3>
        <p className="text-gray-400 text-sm mt-1">
          Try selecting another year to view results.
        </p>
      </>
    ) : (
      <>
        <h3 className="text-gray-700 font-medium text-lg">
          No district selected
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Please choose a state and district to view dashboard data.
        </p>
      </>
    )}
  </div>
</div>
  );
}

export default EmptyState;

