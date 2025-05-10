// components/KmlFileCard.tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, MapPin } from "lucide-react";
import { useState } from "react";

interface KmlFileCardProps {
  fileName: string; // Original filename for download
  displayName: string; // Pretty name for UI display
  description: string;
  downloadPath: string; // Exact path to file in public folder
  placemarkCount?: number;
}

export function KmlFileCard({
  fileName,
  displayName,
  description,
  downloadPath,
  placemarkCount = 0,
}: KmlFileCardProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      // Verify file exists first
      const response = await fetch(downloadPath);
      if (!response.ok) throw new Error("File not found");

      // Create download link with original filename
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName; // Preserve original filename
      document.body.appendChild(link);
      link.click();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        setIsDownloading(false);
      }, 100);
    } catch (error) {
      console.error("Download failed:", error);
      alert("Failed to download file. Please try again.");
      setIsDownloading(false);
    }
  };

  return (
    <Card className="w-full hover:shadow-md transition-shadow">
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
      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={handleDownload}
          disabled={isDownloading}
        >
          <Download className="mr-2 h-4 w-4" />
          {isDownloading ? "Downloading..." : "Download KML"}
        </Button>
      </CardFooter>
    </Card>
  );
}
