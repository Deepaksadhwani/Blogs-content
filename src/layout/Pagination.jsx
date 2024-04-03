import { useContext } from "react";
import { AppContext } from "../Context/AppContext";

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t-2 border-gray-400 bg-gray-100 py-2">
      <div className="max-w-11/12 mx-auto flex items-center justify-evenly px-4 sm:px-6 lg:px-8">
        <div>
          {page > 1 && (
            <button
              onClick={() => handlePageChange(page - 1)}
              className="mr-4 rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              onClick={() => handlePageChange(page + 1)}
              className="rounded-md bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
            >
              Next
            </button>
          )}
        </div>
        <p className="text-gray-600">
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  );
};

export default Pagination;
