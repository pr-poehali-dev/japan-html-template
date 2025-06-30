import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-amber-500/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Swords" className="text-amber-500" size={28} />
            <span className="text-xl font-bold text-white font-montserrat">
              Турниры Самураев
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-white hover:text-amber-400 transition-colors font-medium"
            >
              Главная
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              Блог
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              Фотогалерея
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-amber-400 transition-colors font-medium"
            >
              О нас
            </a>
          </nav>

          <Button className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
            Участвовать
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
