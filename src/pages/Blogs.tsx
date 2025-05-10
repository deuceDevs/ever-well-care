import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; // Import your Button component
import { Link } from "react-router-dom";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title:
        "Empowering Health: Raising Awareness About Cervical and Breast Cancer",
      excerpt:
        "Early detection and education can significantly improve survival rates for breast and cervical cancer.",
      date: "May 5, 2025",
      author: "Joana De Guzman",
      image: "/assets/joanaBlog.jpg",
    },
    {
      id: 2,
      title: "Immunization Awareness for Children and Mothers",
      excerpt:
        "Routine vaccination protects children, infants, and even unborn babies from life-threatening diseases.",
      date: "May 5, 2025",
      author: "Alexa Mayen Bernardo",
      image: "/assets/alexaBlog.jpg",
    },
    {
      id: 3,
      title: "Balance for Two: Healthy Habits for Moms and Kids",
      excerpt:
        "Daily routines like sleep, activity, and screen-free bonding build long-term wellness for families.",
      date: "May 5, 2025",
      author: "Angeline Nicole Ortega",
      image: "/assets/nicoleBlog.jpg",
    },
    {
      id: 4,
      title: "Preventing and Addressing Childhood Obesity",
      excerpt:
        "Childhood obesity affects physical and emotional well-being — prevention starts with small healthy steps.",
      date: "May 5, 2025",
      author: "Dannah Morales",
      image: "/assets/dannahBlog.jpg",
    },
    {
      id: 5,
      title: "Promoting Dignity, Education, and Well-being",
      excerpt:
        "Menstrual health is vital for public health, education, and gender equity — yet stigma persists.",
      date: "May 5, 2025",
      author: "Rei Tominaga",
      image: "/assets/reiBlog.jpg",
    },
    {
      id: 6,
      title:
        "Common Childhood Illnesses and First Aid Every Parent Should Know",
      excerpt:
        "Understanding illnesses like colds, fever, and chickenpox helps parents respond effectively and calmly.",
      date: "May 5, 2025",
      author: "Crizzel San Gabriel",
      image: "/assets/crizelBlog.jpg",
    },
    {
      id: 7,
      title: "Safety at Home: Injury Prevention and Creating Healthy Spaces",
      excerpt:
        "Injury risks at home — from falls to fires — are preventable with awareness and small changes.",
      date: "May 5, 2025",
      author: "Zoe Landayan",
      image: "/assets/zoeBlog.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tl from-purple-50 to-fuchsia-100 ">
      <div className=" py-16 px-6 text-center">
        <h1 className="text-6xl font-bold mb-4 tracking-tight text-purple-950 font-poppins">
          Blog Archive
        </h1>
        <p className="text-purple-900 max-w-xl mx-auto font-poppinslight">
          Discover essential health topics tailored to support moms and children
          — from hygiene and safety to nutrition and disease prevention.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 py-12">
        {blogs.map((post) => (
          <Card
            key={post.id}
            className="rounded-2xl border border-gray-200 hover:shadow-md transition-shadow duration-200 ease-in-out bg-white flex flex-col overflow-hidden pt-0"
          >
            <div className="h-56 w-full">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6 flex flex-col justify-between flex-1">
              <div className="mb-4 flex-1">
                <div className="text-xs text-gray-500 mb-2">
                  {post.date} · {post.author}
                </div>
                <h2 className="text-lg font-semibold text-gray-900 leading-snug mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600">{post.excerpt}</p>
              </div>
              <div className="mt-4 flex justify-center">
                <Link to={`/blog/${post.id}`}>
                  <Button variant="outline" className="text-sm px-4 py-2">
                    Read More
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
