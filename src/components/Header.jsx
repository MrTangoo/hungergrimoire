import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DropDownNav from './DropDownNav';

const recettes = [
  "Poulet rôti",
  "Poulet curry au riz et à la crème de curry",
  "Lasagnes à la bolognaise",
  "Curry aux légumes",
  "Gratin dauphinois",
  "Omelette",
  "Pizza Margherita",
  "Quiche lorraine",
  "Soupe au melon",
  "Tajine",
  "Chili Con Carne"
];

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;
    const formattedQuery = searchQuery.trim().toLowerCase().replace(/[^a-z0-9]/gi, "-");
    navigate(`/recette/${formattedQuery}`);
    setSearchQuery("");
    setSuggestions([]);
  };

  const onChangeSearch = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (value.length > 0) {
      const filtered = recettes.filter(r =>
        r.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (recette) => {
    const formatted = recette.toLowerCase();
    navigate(`/recette/${formatted}`);
    setSearchQuery("");
    setSuggestions([]);
  };

  return (
      <div className="h-16 absolute top-0 z-10 w-full flex items-center justify-start bg-light-grey px-5">
        <DropDownNav />
        <div className="absolute xl:right-52 right-36 bg-dark-grey rounded-xl">
          <input
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm rounded-xl pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Recherche de recettes"
          />
          <button
            className="absolute top-1 right-1 flex items-center rounded bg-light-grey py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-dark2-grey focus:shadow-none active:bg-dark2-grey hover:bg-dark2-grey active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
              <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
            </svg>
            Rechercher
          </button>
        </div>
        {/* Tes liens About / Recettes */}

      <div className="relative basis-1/2 max-w-lg">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Rechercher une recette..."
            value={searchQuery}
            onChange={onChangeSearch}
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2"
          />
          <button
            type="submit"
            className="absolute top-1 right-1 flex items-center rounded bg-dark-grey py-1 px-2.5 text-white text-sm"
          >
            Rechercher
          </button>
        </form>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border border-slate-200 w-full mt-1 max-h-48 overflow-auto rounded shadow z-10">
            {suggestions.map((recette, idx) => (
              <li
                key={idx}
                onClick={() => handleSuggestionClick(recette)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-200"
              >
                {recette}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
