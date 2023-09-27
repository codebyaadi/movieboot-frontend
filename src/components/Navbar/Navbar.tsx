const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center fixed top-0 left-0 z-10 px-20 py-6">
      <div id="logo" className="text-red-500 font-syne font-bold text-2xl">MovieBoot</div>
      <div className="flex flex-row justify-center items-center gap-3">
        <button className="px-3 py-2 text-center text-white font-opensans font-semibold">Log In</button>
        <button className="bg-red-500 px-3 py-2 text-center text-white font-opensans font-semibold">Sign Up</button>
      </div>
    </nav>
  )
}

export default Navbar