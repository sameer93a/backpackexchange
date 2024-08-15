// flex h-14 w-full flex-col justify-center pl-[21px] pr-4
export const AppBar = () => {
  return (
    <div className=" h-[50px]">
      <div className=" flex h-14 w-full flex-col justify-center pl-[21px] pr-4">
        <div className="flex flex-row justify-between">
          <div className="flex items-center flex-row">
            <LogoWithName />
            <Route />
            <SearchBar />
          </div>
          <div className="flex flex-row mr-3">
            <SignUpAndIn />
          </div>
        </div>
      </div>
    </div>
  );
};

function LogoWithName() {
  return (
    <div className="flex flex-row gap-2">
      <div className="bg-red-300">☺️</div>
      <div className="font-bold text-lg text-white">Backpack</div>
    </div>
  );
}

function Route() {
  return (
    <div className="ml-10">
      <div className="ml-[20px] mr-[20px] flex flex-row items-center justify-center font-semibold text-sm gap-4 text-white">
        <div>Markets</div>
        <div>Trade</div>
        <div>More</div>
      </div>
    </div>
  );
}

function SearchBar() {
  return (
    <div className="ml-10">
      <form className="flex items-center max-w-lg mx-auto">
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-3 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="">
            <input
              type="text"
              id="voice-search"
              className="bg-[#202127] text-gray-900 text-sm rounded-xl  block ps-10 p-[3px] w-55"
              placeholder="Search markets"
              required
            />
          </div>
        </div>
      </form>
    </div>
  );
}

function SignUpAndIn() {
  return (
    <div className="flex flex-row">
      <div className="my-auto ml-10 text-nowrap rounded-lg bg-green-100 px-3 py-1.5 text-sm font-semibold text-green-500 hover:opacity-90 ">
        Sign up
      </div>
      <div className="my-auto ml-10 text-nowrap rounded-lg bg-blue-100 px-3 py-1.5 text-sm font-semibold text-blue-500 hover:opacity-90 ">
        Sign in
      </div>
    </div>
  );
}
