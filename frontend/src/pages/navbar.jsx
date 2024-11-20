

function Navbar() {
  return (
    <nav className="bg-blue-800 p-4 flex justify-between items-center shadow-md">
      <div className="text-white text-xl font-bold flex-grow text-center">
        HEAVIETY
      </div>
 
      <button className="text-white text-2xl btn btn-ghost aria-label=Toggle navigation menu">
        &#9776;
      </button> 
    </nav>
  );
}

export default Navbar;
