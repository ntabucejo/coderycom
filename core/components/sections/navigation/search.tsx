import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  return (
    <div className="clearance flex w-full items-center gap-2 overflow-hidden rounded bg-white">
      <MagnifyingGlassIcon className="icon" />
      <input
        type="text"
        placeholder="Search here..."
        className="w-full py-2 bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default Search;
