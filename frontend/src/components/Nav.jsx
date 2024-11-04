import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="flex items-center p-4 bg-black shadow-[0px_4px_10px_rgba(0,0,0,0.25)] text-white">
      <img src={"/icons/logo.svg"} alt="Logo SportSee" />
      <div className="flex justify-around w-full font-[Roboto-Medium] text-lg">
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/a-propos">Profil</NavLink>
        <NavLink to="/reglages">Réglages</NavLink>
        <NavLink to="/communaute">Communauté</NavLink>
      </div>
    </nav>
  );
}
