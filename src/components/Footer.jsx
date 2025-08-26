// Footer.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // для навигации внутри SPA
import { Globe, Facebook, Instagram, Youtube } from "lucide-react"; // иконки соцсетей

function Footer() {
  // ---------- Состояния ----------
  const [email, setEmail] = useState(""); // состояние для поля email
  const [openSections, setOpenSections] = useState({
    shop: false, // открыта ли секция "Магазин" на мобильном
    help: false, // открыта ли секция "Помощь" на мобильном
  });

  // ---------- Функция подписки на рассылку ----------
  const handleSubscribe = (e) => {
    e.preventDefault(); // предотвращаем перезагрузку страницы при submit
    if (!email.includes("@")) {
      alert("Введи нормальный email, а не что попало"); // базовая валидация
      return;
    }
    alert(`Подписка оформлена для ${email}`); // имитация успешной подписки
    setEmail(""); // очищаем поле после отправки
  };

  // ---------- Функция открытия/закрытия секций на мобилках ----------
  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section], // меняем состояние на противоположное
    }));
  };

  // ---------- Ссылки для "Магазина" ----------
  const linksShop = [
    { to: "/catalog", label: "Каталог" },
    { to: "/sales", label: "Скидки" },
    { to: "/new", label: "Новинки" },
    { to: "/bestsellers", label: "Хиты" },
  ];

  // ---------- Ссылки для "Помощи" ----------
  const linksHelp = [
    { to: "/faq", label: "FAQ" },
    { to: "/shipping", label: "Доставка" },
    { to: "/returns", label: "Возврат" },
    { to: "/contact", label: "Контакты" },
  ];

  // ---------- JSX футера ----------
  return (
    <footer className="bg-gray-100 text-gray-600 px-6 py-12 mt-10">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-4 md:gap-10">

        {/* 1. Бренд */}
        <div className="pb-6 md:pb-0 md:border-none border-b border-gray-300">
          <h2 className="text-2xl font-bold text-black">
            Arz<span className="text-2xl font-bold text-green-400">o</span>n Market
          </h2>
          <p className="mt-2 text-sm">
            Интернет-магазин будущего. Доставка космической скорости, цены из параллельной вселенной.
          </p>
        </div>

        {/* 2. Секция "Магазин" */}
        <div className="pb-6 md:pb-0 md:border-none border-t md:border-t-0 border-gray-300 pt-6 md:pt-0">
          <h3
            className="text-lg font-semibold text-black cursor-pointer md:cursor-auto flex justify-between items-center"
            onClick={() => toggleSection("shop")} // открытие/закрытие на мобилке
          >
            Магазин
            <span className="md:hidden">{openSections.shop ? "−" : "+"}</span>
          </h3>
          <ul
            className={`mt-2 space-y-1 transition-max-height duration-300 overflow-hidden md:overflow-visible
              ${openSections.shop ? "max-h-96" : "max-h-0 md:max-h-full"}`} // плавное раскрытие
          >
            {linksShop.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className="hover:text-gray-900 transition block py-1"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Секция "Помощь" */}
        <div className="pb-6 md:pb-0 md:border-none border-t md:border-t-0 border-gray-300 pt-6 md:pt-0">
          <h3
            className="text-lg font-semibold text-black cursor-pointer md:cursor-auto flex justify-between items-center"
            onClick={() => toggleSection("help")}
          >
            Помощь
            <span className="md:hidden">{openSections.help ? "−" : "+"}</span>
          </h3>
          <ul
            className={`mt-2 space-y-1 transition-max-height duration-300 overflow-hidden md:overflow-visible
              ${openSections.help ? "max-h-96" : "max-h-0 md:max-h-full"}`}
          >
            {linksHelp.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  className="hover:text-gray-900 transition block py-1"
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Newsletter / Подписка */}
        <div className="pt-6 md:pt-0 border-t md:border-t-0 border-gray-300 md:border-none">
          <h3 className="text-lg font-semibold text-black">Будь в теме</h3>
          <p className="mt-2 text-sm text-gray-600">
            Подпишись на рассылку и получай акции быстрее, чем их видят обычные смертные.
          </p>
          <form onSubmit={handleSubscribe} className="mt-3 flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Твой email"
              className="w-full rounded-l-md px-3 py-2 border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-black px-4 py-2 rounded-r-md text-white font-semibold hover:bg-gray-800 transition"
            >
              →
            </button>
          </form>

          {/* Соцсети */}
          <div className="flex gap-4 mt-4 text-gray-600">
            <a href="#" className="hover:text-black transition">
              <Globe size={20} />
            </a>
            <a href="#" className="hover:text-black transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-black transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-black transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* 5. Bottom / Подвал с правами и ссылками */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-sm flex flex-col md:flex-row justify-between items-center text-gray-600">
        <p>© 2025 Arzon Market. Все права защищены.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <NavLink to="/privacy" className="hover:text-black transition">
            Политика
          </NavLink>
          <NavLink to="/terms" className="hover:text-black transition">
            Условия
          </NavLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;