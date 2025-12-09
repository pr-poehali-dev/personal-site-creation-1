import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface VideoCardProps {
  id: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
  thumbnail?: string;
  onClick?: () => void;
}

const VideoCard = ({ 
  title, 
  channel, 
  views, 
  timestamp, 
  duration, 
  thumbnail,
  onClick 
}: VideoCardProps) => {
  return (
    <Card 
      className="bg-card border-border overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 group"
      onClick={onClick}
    >
      <div className="relative aspect-video bg-gradient-to-br from-primary via-secondary to-accent overflow-hidden">
        {thumbnail ? (
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon name="Play" size={48} className="text-white/80" />
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-semibold text-white">
          {duration}
        </div>
      </div>
      
      <div className="p-3">
        <div className="flex gap-3">
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-semibold">
            {channel.charAt(0)}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground line-clamp-2 mb-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{channel}</p>
            <p className="text-xs text-muted-foreground">
              {views} • {timestamp}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default VideoCard;
