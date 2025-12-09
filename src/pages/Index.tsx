import { useState } from "react";
import VideoCard from "@/components/VideoCard";
import VideoPlayer from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

interface Video {
  id: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
  likes: string;
  description: string;
  thumbnail?: string;
}

const Index = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const videos: Video[] = [
    {
      id: "1",
      title: "Как создать свой YouTube: Полное руководство для начинающих",
      channel: "TechGuru",
      views: "1.2M просмотров",
      timestamp: "2 дня назад",
      duration: "15:43",
      likes: "45K",
      description: "В этом видео я расскажу вам, как создать собственную видеоплатформу с нуля. Мы рассмотрим все этапы разработки, от дизайна до деплоя.",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=450&fit=crop"
    },
    {
      id: "2",
      title: "10 советов по созданию крутого контента",
      channel: "CreativeStudio",
      views: "850K просмотров",
      timestamp: "5 дней назад",
      duration: "12:30",
      likes: "32K",
      description: "Делюсь своим опытом создания вирусного контента. Эти советы помогли мне набрать миллион подписчиков!",
      thumbnail: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=450&fit=crop"
    },
    {
      id: "3",
      title: "Топ-5 трендов видеоконтента 2024",
      channel: "MediaInsider",
      views: "2.1M просмотров",
      timestamp: "1 неделю назад",
      duration: "18:22",
      likes: "67K",
      description: "Анализируем главные тренды видеоиндустрии в этом году. Что будет работать, а что уже устарело?",
      thumbnail: "https://images.unsplash.com/photo-1551817958-11e0f7bbea5c?w=800&h=450&fit=crop"
    },
    {
      id: "4",
      title: "Монтаж видео для начинающих: пошаговая инструкция",
      channel: "VideoAcademy",
      views: "650K просмотров",
      timestamp: "3 дня назад",
      duration: "22:15",
      likes: "28K",
      description: "Учимся монтировать видео с нуля. Разбираем основные инструменты и техники профессионального монтажа.",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop"
    },
    {
      id: "5",
      title: "Как я заработал первый миллион на YouTube",
      channel: "SuccessStories",
      views: "3.5M просмотров",
      timestamp: "2 недели назад",
      duration: "25:48",
      likes: "89K",
      description: "Моя история успеха на YouTube. Делюсь стратегиями монетизации и секретами роста канала.",
      thumbnail: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=450&fit=crop"
    },
    {
      id: "6",
      title: "Секреты SEO для YouTube: как попасть в рекомендации",
      channel: "GrowthHackers",
      views: "920K просмотров",
      timestamp: "4 дня назад",
      duration: "14:56",
      likes: "41K",
      description: "Разбираем алгоритмы YouTube и учимся оптимизировать видео для максимального охвата аудитории.",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
    },
    {
      id: "7",
      title: "Лучшие камеры для съёмки видео в 2024",
      channel: "TechReview",
      views: "1.8M просмотров",
      timestamp: "1 неделю назад",
      duration: "20:33",
      likes: "55K",
      description: "Обзор топовых камер для видеоблогеров. Сравниваем характеристики и выбираем лучшую для вашего бюджета.",
      thumbnail: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=450&fit=crop"
    },
    {
      id: "8",
      title: "Как писать сценарии для вирусных роликов",
      channel: "ContentMaster",
      views: "740K просмотров",
      timestamp: "6 дней назад",
      duration: "16:42",
      likes: "34K",
      description: "Учимся создавать захватывающие сценарии, которые удерживают внимание зрителей до конца видео.",
      thumbnail: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?w=800&h=450&fit=crop"
    }
  ];

  const categories = [
    { name: "Главная", icon: "Home" },
    { name: "В тренде", icon: "TrendingUp" },
    { name: "Подписки", icon: "UserCheck" },
    { name: "Библиотека", icon: "Library" },
    { name: "История", icon: "History" },
    { name: "Понравилось", icon: "ThumbsUp" },
  ];

  const filteredVideos = videos.filter(video => 
    video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    video.channel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card border-b border-border backdrop-blur-lg bg-card/80">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Icon name="Menu" size={24} />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-white" />
                </div>
                <h1 className="text-xl font-bold text-foreground hidden sm:block">MyTube</h1>
              </div>
            </div>

            <div className="flex-1 max-w-2xl">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Поиск видео..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-muted border-border pr-12"
                />
                <Button 
                  size="icon" 
                  variant="ghost" 
                  className="absolute right-0 top-0"
                >
                  <Icon name="Search" size={20} />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Icon name="Video" size={22} />
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <Icon name="Bell" size={22} />
              </Button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold text-sm">
                Я
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        <aside className="hidden lg:block w-64 h-[calc(100vh-73px)] sticky top-[73px] border-r border-border bg-card/50 backdrop-blur-sm">
          <div className="p-4 space-y-1">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "secondary" : "ghost"}
                className="w-full justify-start gap-3"
              >
                <Icon name={category.icon as any} size={20} />
                {category.name}
              </Button>
            ))}
          </div>
        </aside>

        <main className="flex-1 p-4 md:p-6">
          {selectedVideo ? (
            <div className="animate-fade-in">
              <VideoPlayer
                title={selectedVideo.title}
                channel={selectedVideo.channel}
                views={selectedVideo.views}
                likes={selectedVideo.likes}
                description={selectedVideo.description}
                onClose={() => setSelectedVideo(null)}
              />
            </div>
          ) : (
            <div className="animate-fade-in">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                {searchQuery ? `Результаты поиска: "${searchQuery}"` : 'Рекомендуем'}
              </h2>
              {filteredVideos.length === 0 ? (
                <div className="text-center py-20">
                  <Icon name="Search" size={64} className="mx-auto mb-4 text-muted-foreground" />
                  <p className="text-xl text-muted-foreground">Видео не найдены</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredVideos.map((video) => (
                    <div key={video.id} className="animate-scale-in">
                      <VideoCard
                        {...video}
                        onClick={() => setSelectedVideo(video)}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Index;