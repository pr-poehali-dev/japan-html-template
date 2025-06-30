import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 text-pink-300/20 text-8xl">
          🌸
        </div>
        <div className="absolute bottom-20 left-10 text-pink-300/20 text-6xl">
          🌸
        </div>
        <div className="absolute top-32 left-1/4 text-pink-300/10 text-4xl">
          🌸
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-300 text-sm font-medium">
            <Icon name="Trophy" size={16} className="mr-2" />
            Турнирная организация
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-montserrat">
          Путь{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-400">
            Самурая
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Присоединяйтесь к традиционным турнирам в духе древней Японии. Честь,
          мастерство и красота сакуры ждут достойных воинов.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold px-8"
          >
            <Icon name="Sword" size={20} className="mr-2" />
            Начать путь
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-amber-500/30 text-amber-300 hover:bg-amber-500/10"
          >
            <Icon name="Calendar" size={20} className="mr-2" />
            Расписание турниров
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
