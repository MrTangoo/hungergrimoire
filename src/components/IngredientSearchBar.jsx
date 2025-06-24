function IngredientSearchBar( {searchBarWidth} ) {
  return (
    <>
        <div className={searchBarWidth}>
          <div className='relative'>
            <input
              className='border-transparent bg-dark-grey w-full placeholder:text-white/70 text-white text-sm border border-slate-200 rounded-2xl pl-6 pr-24 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
              placeholder='Entre tes ingrédients ici' 
            />
            <button
              className='duration-1000 ease-in-out hover:scale-105 h-6 absolute top-[18%] right-5 flex items-center rounded-xl bg-light-grey py-1 px-2.5 border border-transparent text-center text-sm transition-all shadow-sm hover:bg-light-green active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
            >
              Search
            </button> 
          </div>
        </div>
    </>
  );
}

export default IngredientSearchBar;