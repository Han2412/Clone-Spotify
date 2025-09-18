const NavItem = ({ icon, label }) => {
  return (
    <div className="w-10 h-10 flex items-center px-2 space-x-2  hover:bg-gray-800 rounded-full cursor-pointer">
      {icon}
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default NavItem;
