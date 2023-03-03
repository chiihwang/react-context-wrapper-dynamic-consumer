import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

import horoscopesObj from "../data/horoscopes";

const Navbar = () => {
  const horoscopes = Object.keys(horoscopesObj);
  const { setCurrentSign, setMatch } = useContext(HoroscopeContext);

  console.log("Navbar is Rendering");

  return (
    <nav>
      {horoscopes.map((sign) => (
        <span
          key={sign}
          onClick={() => {
            setCurrentSign(sign);
            setMatch(false);
          }}
        >
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
