

const Header = ({ username }) => (

  <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
    <h1 className="text-3xl font-bold">Faturti</h1>
    <div className="flex space-x-8 items-center">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded bg-gray-700 text-white placeholder-gray-300 focus:outline-none" />
      <span className="mr-4">{username}</span>
      <button className="bg-white text-slate-700 px-4 py-2 rounde">
        Logout
      </button>
    </div>
  </header>
);
export default Header;