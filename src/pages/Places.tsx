import { KmlFileList } from "@/components/KmlFileList";

export default function Map() {
  return (
    <div className="bg-gradient-to-tl from-purple-50 to-fuchsia-100 min-h-screen p-10">
      <div className="container mx-auto py-8 font-poppins ">
        <h1 className="text-3xl font-bold mb-6 text-purple-950">
          Community Resource Maps
        </h1>
        <p className="text-purple-900 mb-8">
          Download KML files to view in Google Earth or other mapping
          applications
        </p>

        <KmlFileList />
      </div>
    </div>
  );
}
