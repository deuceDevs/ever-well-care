// components/KmlFileList.tsx
import { KmlFileCard } from "./KmlFileCard";

export function KmlFileList() {
  const kmlFiles = [
    {
      fileName: "NutritionAndHealth.kml",
      displayName: "Family Safety and Risk Areas",
      description: "Locations related to nutrition and health services",
      downloadPath: "/kml-files/NutritionAndHealth.kml",
      placemarkCount: 1,
    },
    {
      fileName: "Medical_centers_and_hospitals_in_the_region.kml",
      displayName: "Health Centers for Cancer Exams & Advanced Services",
      description: "Medical centers and hospitals in the region",
      downloadPath:
        "/kml-files/Medical_centers_and_hospitals_in_the_region.kml",
      placemarkCount: 5,
    },
    {
      fileName: "Safe_Play_Areas_and_Outdoor_Wellness_Spots.kml",
      displayName: "Safe Play Areas and Outdoor Wellness Spots",
      description: "Recreational areas and wellness locations",
      downloadPath: "/kml-files/Safe_Play_Areas_and_Outdoor_Wellness_Spots.kml",
      placemarkCount: 7,
    },
    {
      fileName: "Family_Safety_and_Risk_Areas_Maps.kml",
      displayName: "Nutrition and Health Access",
      description: "Safety information and risk areas for families",
      downloadPath: "/kml-files/Family_Safety_and_Risk_Areas_Maps.kml",
      placemarkCount: 9,
    },
    {
      fileName: "Women_and_Child_health_Map.kml",
      displayName: "Women and Child Health Centers",
      description: "Healthcare services for women and children",
      downloadPath: "/kml-files/Women_and_Child_health_Map.kml",
      placemarkCount: 10,
    },
    {
      fileName: "Nearest_Emergency_Rescue_and_First_Aid_Centers.kml",
      displayName: "Emergency Rescue and First Aid Centers",
      description: "Emergency services and first aid locations",
      downloadPath:
        "/kml-files/Nearest_Emergency_Rescue_and_First_Aid_Centers.kml",
      placemarkCount: 12,
    },
    {
      fileName: "Mapping_Health_Facilities_with_Immunization_Services.kml",
      displayName: "Health Facilities with Immunization Services",
      description: "Clinics offering immunization services",
      downloadPath:
        "/kml-files/Mapping_Health_Facilities_with_Immunization_Services.kml",
      placemarkCount: 7,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {kmlFiles.map((file, index) => (
        <KmlFileCard
          key={index}
          fileName={file.fileName}
          displayName={file.displayName}
          description={file.description}
          downloadPath={file.downloadPath}
          placemarkCount={file.placemarkCount}
        />
      ))}
    </div>
  );
}
