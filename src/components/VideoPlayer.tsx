import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface VideoPlayerProps {
  title: string;
  channel: string;
  views: string;
  likes: string;
  description: string;
  videoUrl?: string;
  onClose?: () => void;
}

const VideoPlayer = ({ 
  title, 
  channel, 
  views, 
  likes, 
  description,
  videoUrl,
  onClose 
}: VideoPlayerProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  return (
    <div className="max-w-6xl mx-auto">
      <Card className="bg-card border-border overflow-hidden mb-4">
        <div className="relative aspect-video bg-gradient-to-br from-primary via-secondary to-accent">
          {videoUrl ? (
            <video 
              className="w-full h-full"
              controls
              src={videoUrl}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Icon name="Play" size={80} className="text-white/80" />
            </div>
          )}
        </div>
      </Card>

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">{title}</h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
                  {channel.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{channel}</p>
                  <p className="text-sm text-muted-foreground">{views}</p>
                </div>
              </div>
              <Button 
                className={`rounded-full ${isSubscribed ? 'bg-muted hover:bg-muted/80' : 'bg-primary hover:bg-primary/90'}`}
                onClick={() => setIsSubscribed(!isSubscribed)}
              >
                {isSubscribed ? 'Подписан' : 'Подписаться'}
              </Button>
            </div>

            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                className={`rounded-full ${isLiked ? 'bg-primary/20 border-primary' : ''}`}
                onClick={() => setIsLiked(!isLiked)}
              >
                <Icon name={isLiked ? "ThumbsUp" : "ThumbsUp"} size={18} className="mr-2" />
                {likes}
              </Button>
              <Button variant="outline" className="rounded-full">
                <Icon name="Share2" size={18} className="mr-2" />
                Поделиться
              </Button>
            </div>
          </div>
        </div>

        <Card className="bg-card border-border p-4">
          <p className="text-sm text-muted-foreground whitespace-pre-wrap">
            {description}
          </p>
        </Card>

        {onClose && (
          <Button 
            variant="outline" 
            className="w-full"
            onClick={onClose}
          >
            <Icon name="ArrowLeft" size={18} className="mr-2" />
            Вернуться к главной
          </Button>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
