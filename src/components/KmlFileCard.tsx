// components/KmlFileCard.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface KmlFileCardProps {
  fileName: string;
  displayName: string;
  description: string;
  placemarkCount?: number;
}

export function KmlFileCard({
  fileName,
  displayName,
  description,
  placemarkCount = 0,
}: KmlFileCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/kml/${encodeURIComponent(fileName)}`);
  };

  return (
    <Card
      onClick={handleClick}
      className="w-full hover:shadow-md transition-shadow cursor-pointer"
    >
      <CardHeader>
        <CardTitle className="flex items-center gap-2 font-poppins text-purple-950">
          <MapPin className="h-5 w-5 text-purple-950" />
          {displayName}
        </CardTitle>
        <CardDescription className="font-poppinslight text-purple-900">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-2 text-sm">
          <span className="font-semibold text-purple-900">Contains:</span>
          <span className="text-purple-900">{placemarkCount} locations</span>
        </div>
      </CardContent>
    </Card>
  );
}
