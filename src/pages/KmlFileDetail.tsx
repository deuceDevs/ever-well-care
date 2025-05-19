// components/KmlFileDetail.tsx
import { useParams,  } from "react-router-dom";
import familySafety from '/assets/familySafety.jpg'
import mappingHealth from '/assets/mappingHealthCare.jpg'
import medicalCenters from '/assets/medicalCenters.jpg'
import nearestEmergency from '/assets/nearestEmergency.jpg'
import nutritionAndHealthAccess from '/assets/nutritionAndHealthAccess.jpg'
import safePlayAreas from '/assets/safePlayAreas.jpg'
import womenAndChildHealth from '/assets/womenAndChildHealth.jpg'
const mockDetails: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    placemarkCount: number;
    topicOverview: string;
    placemarkLinks: { label: string; href: string }[];
  }
> = {
  "NutritionAndHealth.kml": {
    title: "Nutrition and Health Access",
    description: "Locations related to nutrition and health services",
    image: `${nutritionAndHealthAccess}`,
    placemarkCount: 1,
    topicOverview:
      "This map outlines access points to nutrition and health services, helping families locate clinics, food distribution centers, and wellness programs.",
    placemarkLinks: [{ label: "Nutrition and Health Access Office", href: "https://earth.google.com/web/@14.99942444,120.95326344,25.33276207a,450.69982688d,34.99999911y,0h,0t,0r/data=CgRCAggBMikKJwolCiExczBqdVBrQWtHR3NyQ2NhTnRpckplQVFRLTcwQmZDNDggAToDCgEwQgIIAEoICLGNmbQHEAE" }],
  },
  "Medical_centers_and_hospitals_in_the_region.kml": {
    title: "Health Centers for Cancer Exams & Advanced Services",
    description: "Medical centers and hospitals in the region",
    image: `${medicalCenters}`,
    placemarkCount: 5,
    topicOverview:
      "This map displays the locations of hospitals and diagnostic centers offering cancer screening, exams, and advanced medical services.",
    placemarkLinks: [
      { label: "Carpa Hospital", href: "https://earth.google.com/web/@14.88263696,120.86460794,5.35246842a,33510.36450861d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRUQ3ei1EV3F0WDgyV0ozRzJkZ1lIWlhxRW9tM2VTZ20gAToDCgEwQgIIAEoICO7imPcFEAE" },
      { label: "LN Laboratory & Diagnostic Center", href: "https://earth.google.com/web/@14.88263696,120.86460794,5.35246842a,33510.36450861d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRUQ3ei1EV3F0WDgyV0ozRzJkZ1lIWlhxRW9tM2VTZ20gAToDCgEwQgIIAEoICO7imPcFEAE" },
      { label: "Bulacan Medical Center", href: "https://earth.google.com/web/@14.88263696,120.86460794,5.35246842a,33510.36450861d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRUQ3ei1EV3F0WDgyV0ozRzJkZ1lIWlhxRW9tM2VTZ20gAToDCgEwQgIIAEoICO7imPcFEAE" },
      { label: "Sacred Heart Hospital of Malolos", href: "https://earth.google.com/web/@14.88263696,120.86460794,5.35246842a,33510.36450861d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRUQ3ei1EV3F0WDgyV0ozRzJkZ1lIWlhxRW9tM2VTZ20gAToDCgEwQgIIAEoICO7imPcFEAE" },
      { label: "Klinika Bulakan Multispecialty Clinic & Laboratory", href: "https://earth.google.com/web/@14.88263696,120.86460794,5.35246842a,33510.36450861d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRUQ3ei1EV3F0WDgyV0ozRzJkZ1lIWlhxRW9tM2VTZ20gAToDCgEwQgIIAEoICO7imPcFEAE" },
    ],
  },
  "Safe_Play_Areas_and_Outdoor_Wellness_Spots.kml": {
    title: "Safe Play Areas and Outdoor Wellness Spots",
    description: "Recreational areas and wellness locations",
    image: `${safePlayAreas}`,
    placemarkCount: 7,
    topicOverview:
      "This file highlights outdoor locations designed for family recreation and wellness, including parks, playgrounds, and green spaces.",
    placemarkLinks: [
      { label: "Hacienda Angelita Nature Farm and Resort", href: "https://earth.google.com/web/@15.06069883,120.982575,45.01342786a,42211.82420472d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExTXRLSUFMZXVsWGtlcG1yWExOa3d3Tl8tLVhVZ1Jxdm0gAToDCgEwQgIIAEoICKvv6cMBEAE" },
      { label: "Kidzoona Sm City Baliwag", href: "https://earth.google.com/web/@15.06069883,120.982575,45.01342786a,42211.82420472d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExTXRLSUFMZXVsWGtlcG1yWExOa3d3Tl8tLVhVZ1Jxdm0gAToDCgEwQgIIAEoICKvv6cMBEAE" },
      { label: "Starzone Badminton Court", href: "https://earth.google.com/web/@15.06069883,120.982575,45.01342786a,42211.82420472d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExTXRLSUFMZXVsWGtlcG1yWExOa3d3Tl8tLVhVZ1Jxdm0gAToDCgEwQgIIAEoICKvv6cMBEAE" },
      { label: "Malangaan Cave and Spring/Mount Secret", href: "https://earth.google.com/web/@15.06069883,120.982575,45.01342786a,42211.82420472d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExTXRLSUFMZXVsWGtlcG1yWExOa3d3Tl8tLVhVZ1Jxdm0gAToDCgEwQgIIAEoICKvv6cMBEAE" },
      { label: "San Rafael Team Building Venue", href: "https://earth.google.com/web/@15.06069883,120.982575,45.01342786a,42211.82420472d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExTXRLSUFMZXVsWGtlcG1yWExOa3d3Tl8tLVhVZ1Jxdm0gAToDCgEwQgIIAEoICKvv6cMBEAE" },
      { label: "San Rafael River Adventure", href: "https://earth.google.com/web/@15.06069883,120.982575,45.01342786a,42211.82420472d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExTXRLSUFMZXVsWGtlcG1yWExOa3d3Tl8tLVhVZ1Jxdm0gAToDCgEwQgIIAEoICKvv6cMBEAE" },
      { label: "Jump-Off of Mt.Manalmon And Mt.Gola", href: "https://earth.google.com/web/@15.06069883,120.982575,45.01342786a,42211.82420472d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExTXRLSUFMZXVsWGtlcG1yWExOa3d3Tl8tLVhVZ1Jxdm0gAToDCgEwQgIIAEoICKvv6cMBEAE" },
    ],
  },
  "Family_Safety_and_Risk_Areas_Maps.kml": {
    title: " Family Safety and Risk Areas",
    description: "Safety information and risk areas for families ",
    image: `${familySafety}`,
    placemarkCount: 9,
    topicOverview:
      "This KML file outlines zones of potential risk and safety for families in the region, including flood-prone areas and recommended evacuation routes.",
    placemarkLinks: [
      { label: "Hagonoy, Bulacan", href: "https://earth.google.com/web/@15.02483779,120.93450157,32.94611124a,56046.14387889d,35y,0.00000012h,4.72974945t,360r/data=CgRCAggBMikKJwolCiExYkxWb1JiMTBndEgxUWhJRXpmQWRJMDBEY05sRUxVdjggAToDCgEwQgIIAEoICIalt8UBEAEv" },
      { label: "Paombong, Bulacan", href: "https://earth.google.com/web/@15.02483779,120.93450157,32.94611124a,56046.14387889d,35y,0.00000012h,4.72974945t,360r/data=CgRCAggBMikKJwolCiExYkxWb1JiMTBndEgxUWhJRXpmQWRJMDBEY05sRUxVdjggAToDCgEwQgIIAEoICIalt8UBEAE" },
      { label: "Malolos, Bulacan", href: "https://earth.google.com/web/@15.02483779,120.93450157,32.94611124a,56046.14387889d,35y,0.00000012h,4.72974945t,360r/data=CgRCAggBMikKJwolCiExYkxWb1JiMTBndEgxUWhJRXpmQWRJMDBEY05sRUxVdjggAToDCgEwQgIIAEoICIalt8UBEAE" },
      { label: "Bulacan Provincial Health Office", href: "https://earth.google.com/web/@15.02483779,120.93450157,32.94611124a,56046.14387889d,35y,0.00000012h,4.72974945t,360r/data=CgRCAggBMikKJwolCiExYkxWb1JiMTBndEgxUWhJRXpmQWRJMDBEY05sRUxVdjggAToDCgEwQgIIAEoICIalt8UBEAE" },
      { label: "San Rafael Police Station", href: "https://earth.google.com/web/@15.02483779,120.93450157,32.94611124a,56046.14387889d,35y,0.00000012h,4.72974945t,360r/data=CgRCAggBMikKJwolCiExYkxWb1JiMTBndEgxUWhJRXpmQWRJMDBEY05sRUxVdjggAToDCgEwQgIIAEoICIalt8UBEAE" },
      { label: "Carpa Hospital", href: "https://earth.google.com/web/@15.02483779,120.93450157,32.94611124a,56046.14387889d,35y,0.00000012h,4.72974945t,360r/data=CgRCAggBMikKJwolCiExYkxWb1JiMTBndEgxUWhJRXpmQWRJMDBEY05sRUxVdjggAToDCgEwQgIIAEoICIalt8UBEAE" },
      { label: "San Rafael Fire Station", href: "https://earth.google.com/web/@15.02483779,120.93450157,32.94611124a,56046.14387889d,35y,0.00000012h,4.72974945t,360r/data=CgRCAggBMikKJwolCiExYkxWb1JiMTBndEgxUWhJRXpmQWRJMDBEY05sRUxVdjggAToDCgEwQgIIAEoICIalt8UBEAE" },
      { label: "San Rafael Rural Health Unit 1", href: "https://earth.google.com/web/@15.02483779,120.93450157,32.94611124a,56046.14387889d,35y,0.00000012h,4.72974945t,360r/data=CgRCAggBMikKJwolCiExYkxWb1JiMTBndEgxUWhJRXpmQWRJMDBEY05sRUxVdjggAToDCgEwQgIIAEoICIalt8UBEAE" },
      { label: "R. De. C. Galvez Medical Center", href: "https://earth.google.com/web/@15.02483779,120.93450157,32.94611124a,56046.14387889d,35y,0.00000012h,4.72974945t,360r/data=CgRCAggBMikKJwolCiExYkxWb1JiMTBndEgxUWhJRXpmQWRJMDBEY05sRUxVdjggAToDCgEwQgIIAEoICIalt8UBEAE" },
    ],
  },
  "Women_and_Child_health_Map.kml": {
    title: "Women and Child Health Centers",
    description: "Healthcare services for women and children",
    image: `${womenAndChildHealth}`,
    placemarkCount: 10,
    topicOverview:
      "Locations of specialized healthcare centers focused on maternal and child health services including prenatal care, pediatric clinics, and vaccination spots.",
    placemarkLinks: [
      { label: "OB Gyne and Children's Clinic", href: "https://earth.google.com/web/@14.98868942,120.90949235,15.12448378a,15475.31150925d,30y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVEhlRlFqaFF5ZVZTWVd0aXVoZ18tZnhEb045blAzb0QgAToDCgEwQgIIAEoICL2eiO8FEAE" },
      { label: "Dr. Sheila Crosshealth", href: "https://earth.google.com/web/@14.98868942,120.90949235,15.12448378a,15475.31150925d,30y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVEhlRlFqaFF5ZVZTWVd0aXVoZ18tZnhEb045blAzb0QgAToDCgEwQgIIAEoICL2eiO8FEAE" },
      { label: "Mother Therese Mothers Clinic", href: "https://earth.google.com/web/@14.98868942,120.90949235,15.12448378a,15475.31150925d,30y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVEhlRlFqaFF5ZVZTWVd0aXVoZ18tZnhEb045blAzb0QgAToDCgEwQgIIAEoICL2eiO8FEAE" },
      { label: "JDG Maternity and Lying-in clinic", href: "https://earth.google.com/web/@14.98868942,120.90949235,15.12448378a,15475.31150925d,30y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVEhlRlFqaFF5ZVZTWVd0aXVoZ18tZnhEb045blAzb0QgAToDCgEwQgIIAEoICL2eiO8FEAE" },
      { label: "Little Miracles Children's Clinic", href: "https://earth.google.com/web/@14.98868942,120.90949235,15.12448378a,15475.31150925d,30y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVEhlRlFqaFF5ZVZTWVd0aXVoZ18tZnhEb045blAzb0QgAToDCgEwQgIIAEoICL2eiO8FEAE" },
      { label: "Pediatric Specialty Clinic", href: "https://earth.google.com/web/@14.98868942,120.90949235,15.12448378a,15475.31150925d,30y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVEhlRlFqaFF5ZVZTWVd0aXVoZ18tZnhEb045blAzb0QgAToDCgEwQgIIAEoICL2eiO8FEAE" },
      { label: "Florendo-Cruz Pediatric Clinic", href: "https://earth.google.com/web/@14.98868942,120.90949235,15.12448378a,15475.31150925d,30y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVEhlRlFqaFF5ZVZTWVd0aXVoZ18tZnhEb045blAzb0QgAToDCgEwQgIIAEoICL2eiO8FEAE" },
      { label: "SMLC Behavioral Theraphy", href: "https://earth.google.com/web/@14.98868942,120.90949235,15.12448378a,15475.31150925d,30y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVEhlRlFqaFF5ZVZTWVd0aXVoZ18tZnhEb045blAzb0QgAToDCgEwQgIIAEoICL2eiO8FEAE" },
      { label: "Marinny Center for Hope Developmental Theraphy", href: "https://earth.google.com/web/@14.98868942,120.90949235,15.12448378a,15475.31150925d,30y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVEhlRlFqaFF5ZVZTWVd0aXVoZ18tZnhEb045blAzb0QgAToDCgEwQgIIAEoICL2eiO8FEAE" },
      { label: "Marian College", href: "https://earth.google.com/web/@14.98868942,120.90949235,15.12448378a,15475.31150925d,30y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVEhlRlFqaFF5ZVZTWVd0aXVoZ18tZnhEb045blAzb0QgAToDCgEwQgIIAEoICL2eiO8FEAE" },
    ],
  },
  "Nearest_Emergency_Rescue_and_First_Aid_Centers.kml": {
    title: "Emergency Rescue and First Aid Centers",
    description: "Emergency services and first aid locations",
    image: `${nearestEmergency}`,
    placemarkCount: 8,
    topicOverview:
      "This map identifies nearest emergency rescue stations and first aid centers across the region to ensure quick access during emergencies.",
    placemarkLinks: [
      { label: "Maguinao Barangay Hall", href: "https://earth.google.com/web/@15.03241132,120.91019821,11.48277561a,19127.78372794d,34.99981696y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVTkxN0M4RXZxNUdQMzZaNTdGMWlJbHBNNGVOT2JVWDYgAToDCgEwQgIIAEoICLb-q_8BEAE" },
      { label: "San Rafael Fire Station", href: "https://earth.google.com/web/@15.03241132,120.91019821,11.48277561a,19127.78372794d,34.99981696y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVTkxN0M4RXZxNUdQMzZaNTdGMWlJbHBNNGVOT2JVWDYgAToDCgEwQgIIAEoICLb-q_8BEAE" },
      { label: "San Ildefonso Fire Station", href: "https://earth.google.com/web/@15.03241132,120.91019821,11.48277561a,19127.78372794d,34.99981696y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVTkxN0M4RXZxNUdQMzZaNTdGMWlJbHBNNGVOT2JVWDYgAToDCgEwQgIIAEoICLb-q_8BEAE" },
      { label: "San Rafael Rural Health Unit 1", href: "https://earth.google.com/web/@15.03241132,120.91019821,11.48277561a,19127.78372794d,34.99981696y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVTkxN0M4RXZxNUdQMzZaNTdGMWlJbHBNNGVOT2JVWDYgAToDCgEwQgIIAEoICLb-q_8BEAE" },
      { label: "Maguinao Rural Health Unit II San Rafael Bulacan", href: "https://earth.google.com/web/@15.03241132,120.91019821,11.48277561a,19127.78372794d,34.99981696y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVTkxN0M4RXZxNUdQMzZaNTdGMWlJbHBNNGVOT2JVWDYgAToDCgEwQgIIAEoICLb-q_8BEAE" },
      { label: "Medicus Diagnostic Center - San Rafael Branch", href: "https://earth.google.com/web/@15.03241132,120.91019821,11.48277561a,19127.78372794d,34.99981696y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVTkxN0M4RXZxNUdQMzZaNTdGMWlJbHBNNGVOT2JVWDYgAToDCgEwQgIIAEoICLb-q_8BEAE" },
      { label: "Capihan Barangay Health Center", href: "https://earth.google.com/web/@15.03241132,120.91019821,11.48277561a,19127.78372794d,34.99981696y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVTkxN0M4RXZxNUdQMzZaNTdGMWlJbHBNNGVOT2JVWDYgAToDCgEwQgIIAEoICLb-q_8BEAE" },
      { label: "Diliman I Health Center", href: "https://earth.google.com/web/@15.03241132,120.91019821,11.48277561a,19127.78372794d,34.99981696y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExVTkxN0M4RXZxNUdQMzZaNTdGMWlJbHBNNGVOT2JVWDYgAToDCgEwQgIIAEoICLb-q_8BEAE" },
     
    ],
  },
  "Mapping_Health_Facilities_with_Immunization_Services.kml": {
    title: "Health Facilities with Immunization Services",
    description: "Clinics offering immunization services",
    image: `${mappingHealth}`,
    placemarkCount: 5,
    topicOverview:
      "This KML file maps clinics and facilities providing immunization services to the community, crucial for disease prevention programs.",
    placemarkLinks: [
      { label: "Carpa Hospital", href: "https://earth.google.com/web/@14.88263696,120.86460794,5.35246842a,33510.36450861d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRUQ3ei1EV3F0WDgyV0ozRzJkZ1lIWlhxRW9tM2VTZ20gAToDCgEwQgIIAEoICO7imPcFEAE" },
      { label: "LN Laboratory & Diagnostic Center", href: "https://earth.google.com/web/@14.88263696,120.86460794,5.35246842a,33510.36450861d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRUQ3ei1EV3F0WDgyV0ozRzJkZ1lIWlhxRW9tM2VTZ20gAToDCgEwQgIIAEoICO7imPcFEAE" },
      { label: "Bulacan Medical Center", href: "https://earth.google.com/web/@14.88263696,120.86460794,5.35246842a,33510.36450861d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRUQ3ei1EV3F0WDgyV0ozRzJkZ1lIWlhxRW9tM2VTZ20gAToDCgEwQgIIAEoICO7imPcFEAE" },
      { label: "Sacred Heart Hospital of Malolos", href: "https://earth.google.com/web/@14.88263696,120.86460794,5.35246842a,33510.36450861d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRUQ3ei1EV3F0WDgyV0ozRzJkZ1lIWlhxRW9tM2VTZ20gAToDCgEwQgIIAEoICO7imPcFEAE" },
      { label: "Klinika Bulakan Multispecialty Clinic & Laboratory", href: "https://earth.google.com/web/@14.88263696,120.86460794,5.35246842a,33510.36450861d,30y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRUQ3ei1EV3F0WDgyV0ozRzJkZ1lIWlhxRW9tM2VTZ20gAToDCgEwQgIIAEoICO7imPcFEAE" },
    ],
  },
};

export default function KmlFileDetail() {
  const { fileName } = useParams<{ fileName: string }>();
  if (!fileName) return <p>No file selected.</p>;

  const decodedFileName = decodeURIComponent(fileName);
  const detail = mockDetails[decodedFileName];
  return (
    <div className="p-15  mx-auto">
      <h1 className="text-4xl font-poppins  font-bold mb-2 text-purple-950">{detail.title}</h1>
      <p className="mb-4 text-purple-900 text-lg">{detail.description}</p>
      <img
        src={detail.image}
        alt={detail.title}
        className="w-full h-auto rounded-lg mb-6"
      />
      <section className="mb-6">
        <h2 className="text-2xl text-purple-950 font-bold font-poppins mb-2">Topic Overview</h2>
        <p className="text-purple-800">{detail.topicOverview}</p>
      </section>

      <section>
        <h2 className="text-xl text-purple-800 font-semibold mb-2">Links to Locations</h2>
        <ul className="list-disc list-inside text-blue-700">
          {detail.placemarkLinks.map(({ label, href }, i) => (
            <li key={i}>
              <a href={href} className="underline hover:text-blue-900 text-ourok"  target="_blank">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </section>

     
    </div>
  );
}
