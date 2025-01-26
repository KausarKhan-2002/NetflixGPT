const Header = () => {
  return (
    <div>
      {/* Shadow */}
      <div
        className="customShadow"
      />

      {/* Logo */}
      <div className="absolute top-0 left-0 w-full z-20 flex items-center px-32 py-2">
        <img
          className="w-44"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
    </div>
  );
};

export default Header;
