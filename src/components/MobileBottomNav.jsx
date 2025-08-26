import { NavLink } from "react-router-dom";
import { Home, Grid, ShoppingCart, Heart, User } from "lucide-react";

export default function MobileBottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t z-50 shadow-md md:hidden ">
      <ul className="flex justify-around items-center h-14">
        <li>
          <NavLink to="/" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
            <Home className="w-7 h-7" />
            <span className="text-xs">Домой</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
            <Grid className="w-7 h-7" />
            <span className="text-xs">Категории</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
            <ShoppingCart className="w-7 h-7" />
            <span className="text-xs">Корзина</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
            <Heart className="w-7 h-7" />
            <span className="text-xs">Избранное</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className="flex flex-col items-center justify-center text-gray-600 hover:text-blue-600">
            <User className="w-7 h-7" />
            <span className="text-xs">Профиль</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}