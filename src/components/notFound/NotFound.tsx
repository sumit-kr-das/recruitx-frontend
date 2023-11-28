import NotFoundData from "../../assets/nothing-found.png";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img className="w-[30%]" src={NotFoundData} alt="not_found" />
      <h1 className="font-semibold text-xl">No data found</h1>
    </div>
  );
};

export default NotFound;
