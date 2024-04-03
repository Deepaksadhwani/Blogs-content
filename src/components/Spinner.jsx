const Spinner = () => {
  return (
    <div className="fixed left-1/2 top-1/2 ">
      <div className="h-16 w-16 animate-pulse overflow-hidden rounded-full">
        <div className="absolute h-full w-full  rounded-full border-t-4 border-blue-500"></div>
        <div className="absolute h-full w-full animate-spin rounded-full border-t-4 border-purple-500"></div>
      </div>
    </div>
  );
};

export default Spinner;
