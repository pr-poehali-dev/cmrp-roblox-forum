import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const forumSections = [
    {
      id: "updates",
      title: "Обновления",
      icon: "Lightbulb",
      description: "Последние новости и патчи",
      posts: 156,
      color: "bg-gradient-to-r from-orange-500 to-red-500",
    },
    {
      id: "guides",
      title: "Гайды",
      icon: "BookOpen",
      description: "Руководства по игре",
      posts: 89,
      color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    },
    {
      id: "bugs",
      title: "Баг-репорты",
      icon: "Shield",
      description: "Сообщения об ошибках",
      posts: 234,
      color: "bg-gradient-to-r from-red-500 to-pink-500",
    },
    {
      id: "suggestions",
      title: "Предложения",
      icon: "Lightbulb",
      description: "Идеи для улучшения",
      posts: 167,
      color: "bg-gradient-to-r from-green-500 to-teal-500",
    },
  ];

  const recentPosts = [
    {
      title: "Новая система экономики v2.5",
      author: "AdminCMRP",
      replies: 45,
      time: "2 часа назад",
      category: "Обновления",
      isHot: true,
    },
    {
      title: "Как стать полицейским: подробный гайд",
      author: "PoliceChief",
      replies: 23,
      time: "5 часов назад",
      category: "Гайды",
      isHot: false,
    },
    {
      title: "Баг с машинами в гараже",
      author: "Player123",
      replies: 12,
      time: "1 день назад",
      category: "Баги",
      isHot: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1
                className="text-5xl font-bold mb-4"
                style={{ fontFamily: "Orbitron, monospace" }}
              >
                CMRP FORUM
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Официальный форум сервера City Mobile RolePlay
              </p>
              <div className="flex gap-4 mb-8">
                <Button className="bg-white text-orange-500 hover:bg-gray-100 font-semibold">
                  <Icon name="Users" className="mr-2" size={20} />
                  Присоединиться
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-orange-500"
                >
                  <Icon name="MessageCircle" className="mr-2" size={20} />
                  Начать общение
                </Button>
              </div>
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={16} />
                  <span>2,456 игроков</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MessageSquare" size={16} />
                  <span>15,234 сообщений</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Activity" size={16} />
                  <span>234 онлайн</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/img/cae60509-f0ae-441b-9b48-1310c2259d7c.jpg"
                alt="CMRP Game"
                className="w-96 h-64 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="main" className="w-full">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl mx-auto mb-8">
            <TabsTrigger value="main">Главная</TabsTrigger>
            <TabsTrigger value="updates">Обновления</TabsTrigger>
            <TabsTrigger value="guides">Гайды</TabsTrigger>
            <TabsTrigger value="bugs">Баг-репорты</TabsTrigger>
            <TabsTrigger value="suggestions">Предложения</TabsTrigger>
          </TabsList>

          <TabsContent value="main" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {forumSections.map((section) => (
                <Card
                  key={section.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <CardHeader className="pb-3">
                    <div
                      className={`w-12 h-12 rounded-full ${section.color} flex items-center justify-center mb-3`}
                    >
                      <Icon
                        name={section.icon}
                        className="text-white"
                        size={24}
                      />
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {section.title}
                    </CardTitle>
                    <CardDescription>{section.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {section.posts} постов
                      </span>
                      <Badge variant="secondary" className="bg-gray-100">
                        <Icon name="ArrowRight" size={14} />
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="MessageSquare" size={20} />
                      Последние обсуждения
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {recentPosts.map((post, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-4 rounded-lg border hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 flex items-center justify-center">
                          <Icon name="User" className="text-white" size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-gray-900">
                              {post.title}
                            </h3>
                            {post.isHot && (
                              <Badge className="bg-red-500">🔥 Горячее</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            от {post.author} • {post.time}
                          </p>
                          <div className="flex items-center gap-4 mt-2">
                            <Badge variant="outline">{post.category}</Badge>
                            <span className="text-sm text-gray-500">
                              <Icon
                                name="MessageCircle"
                                className="inline mr-1"
                                size={14}
                              />
                              {post.replies} ответов
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} />
                      Статистика сервера
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Игроков онлайн</span>
                      <Badge className="bg-green-500">234 / 500</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Всего игроков</span>
                      <span className="font-semibold">2,456</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Версия сервера</span>
                      <Badge variant="outline">v2.5.1</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Crown" size={20} />
                      Топ игроков
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      { name: "PoliceChief", rank: "Комиссар", level: 45 },
                      { name: "CriminalBoss", rank: "Авторитет", level: 42 },
                      { name: "MedicHero", rank: "Главврач", level: 38 },
                    ].map((player, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{player.name}</p>
                          <p className="text-sm text-gray-500">
                            {player.rank} • {player.level} lvl
                          </p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="updates">
            <Card>
              <CardHeader>
                <CardTitle>Обновления сервера</CardTitle>
                <CardDescription>
                  Последние изменения и нововведения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Здесь будут отображаться все обновления сервера...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="guides">
            <Card>
              <CardHeader>
                <CardTitle>Руководства и гайды</CardTitle>
                <CardDescription>
                  Полезные материалы для игроков
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Здесь будут размещены гайды по игре...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bugs">
            <Card>
              <CardHeader>
                <CardTitle>Сообщения об ошибках</CardTitle>
                <CardDescription>Помогите нам улучшить сервер</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Здесь можно сообщить о найденных багах...
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="suggestions">
            <Card>
              <CardHeader>
                <CardTitle>Предложения игроков</CardTitle>
                <CardDescription>
                  Ваши идеи для развития сервера
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Здесь можно предложить новые идеи...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
