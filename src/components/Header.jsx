import DropDownNav from './DropDownNav';

function Header() {
  return (
    <>
      <div className="absolute top-0 z-10 w-full flex items-center gap-x-4 pt-3 pl-5 pb-3 bg-light-grey">
        
        <div className="flex items-center gap-x-4 flex-grow">

          <div className="flex gap-x-5">
            <a href="./About">About</a>
            <a href="./Recettes">Recettes</a>
          </div>

          <div className="relative basis-1/2 max-w-lg">
            <input
              className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Recherche de recettes"
            />
            <button
              className="absolute top-1 right-1 flex items-center rounded bg-dark-grey py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-dark2-grey focus:shadow-none active:bg-dark2-grey hover:bg-dark2-grey active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
              </svg>
              Rechercher
            </button>
          </div>

        <DropDownNav />
        </div>
      </div>
    </>
  );
}

export default Header;
