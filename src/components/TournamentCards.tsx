import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const TournamentCards = () => {
  const tournaments = [
    {
      id: 1,
      title: "Турнир Весенней Сакуры",
      description: "Традиционный весенний турнир под цветущими вишнями",
      date: "15 апреля",
      participants: 64,
      prize: "500,000 ¥",
      status: "Регистрация открыта",
      statusColor: "bg-green-500",
    },
    {
      id: 2,
      title: "Битва Осенних Листьев",
      description: "Турнир мастеров меча в период момидзи",
      date: "20 октября",
      participants: 32,
      prize: "300,000 ¥",
      status: "Скоро",
      statusColor: "bg-amber-500",
    },
    {
      id: 3,
      title: "Новогодний Турнир Драконов",
      description: "Главный турнир года с участием лучших воинов",
      date: "1 января",
      participants: 128,
      prize: "1,000,000 ¥",
      status: "Планируется",
      statusColor: "bg-purple-500",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-montserrat">
            Предстоящие Турниры
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Испытайте свои навыки в турнирах, вдохновленных традициями самураев
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <Card
              key={tournament.id}
              className="bg-slate-800/50 border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <Badge
                    className={`${tournament.statusColor} text-white text-xs`}
                  >
                    {tournament.status}
                  </Badge>
                  <div className="text-pink-300 text-2xl">🌸</div>
                </div>
                <CardTitle className="text-xl text-white font-montserrat">
                  {tournament.title}
                </CardTitle>
                <CardDescription className="text-gray-300">
                  {tournament.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Icon
                      name="Calendar"
                      size={16}
                      className="mr-2 text-amber-400"
                    />
                    {tournament.date}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Icon
                      name="Users"
                      size={16}
                      className="mr-2 text-amber-400"
                    />
                    {tournament.participants} участников
                  </div>
                  <div className="flex items-center text-gray-300 col-span-2">
                    <Icon
                      name="Trophy"
                      size={16}
                      className="mr-2 text-amber-400"
                    />
                    Приз: {tournament.prize}
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 font-semibold">
                  <Icon name="Sword" size={16} className="mr-2" />
                  Принять участие
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TournamentCards;
