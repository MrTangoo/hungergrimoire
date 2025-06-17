function IngredientSearchBar() {
  return (
    <>
        <div className="w-full max-w-sm min-w-[200px]">
          <div className="relative">
            <input
              className="border-transparent bg-dark-grey w-full placeholder:text-white/70 text-white text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Entre tes ingrédients ici" 
            />
            <button
              className="absolute top-1 right-1 flex items-center rounded bg-light-grey py-1 px-2.5 border border-transparent text-center text-sm transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Search
            </button> 
          </div>
        </div>
    </>
  );
}

export default IngredientSearchBar;