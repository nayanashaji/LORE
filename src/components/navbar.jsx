const Navbar = () => {
  return (
    <nav className="bg-amber-950 p-4 text-white flex justify-between items-center">
      <div className="text-xl font-bold fontFamily:">LORE</div>
      <ul className="flex space-x-4">
        <li>
          <a href="#home" className="hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">About</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
