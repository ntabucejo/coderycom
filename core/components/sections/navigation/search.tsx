import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const Search = () => {
  return (
    <div className="flex w-full items-center gap-2 overflow-hidden rounded border bg-white py-2 pl-4">
      <MagnifyingGlassIcon className="icon" />
      <input
        type="text"
        placeholder="Search here..."
        className="w-full bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default Search;
