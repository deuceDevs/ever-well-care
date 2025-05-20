import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, BookOpen,Newspaper } from "lucide-react";
import alexa from "/assets/1.jpg";
import rei from "/assets/5.jpg";
import angeline from "/assets/6.jpg";
import dannah from "/assets/7.jpg";
import zoe from "/assets/4.jpg";
import crizzel from "/assets/3.jpg";
import joana from "/assets/2.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";
import {
  Droplet,
  ShieldCheck,
  Syringe,
  Stethoscope,
  HeartPulse,
  House,
  Apple,
} from "lucide-react";
import { Link } from "react-router-dom";
import VideoGallery from "@/components/Video";

export default function Home() {
  const topRow = [
    {
      role: "Editor/ Layout and Design",
      src: alexa,
      name: "Bernardo, Alexa Mayen B.",
    },
    {
      role: "Researcher and Writer",
      src: dannah,
      name: "Morales, Dannah Angellene P.",
    },
    {
      role: "Team Leader / Content Manager",
      src: angeline,
      name: "Ortega, Angeline Nicole V.",
    },
    {
      role: "Researcher and Writer",
      src: rei,
      name: "Tominaga, Patricia Rei F.",
    },
  ];

  const bottomRow = [
    {
      role: "Researcher and Writer",
      src: zoe,
      name: "Landayan, Juliene Zoe E.",
    },
    {
      role: "Researcher and Writer",
      src: crizzel,
      name: "San Gabriel, Crizzel R.",
    },
    {
      role: "Researcher and Writer",
      src: joana,
      name: "De Guzman, Joana S.",
    },
  ];

  const topics = [
    {
      id: 5,
      title: "Promoting Dignity, Education, and Well-being",
      description:
        "Menstrual health is vital for public health, education, and gender equity — yet stigma persists.",
      icon: <Droplet className="h-10 w-10 text-pink-600" />,
      route: "menstrual-health-and-hygiene",
    },
    {
      id: 1,
      title: "Cervical & Breast Cancer Awareness",
      description:
        "Early detection, screening methods, and awareness to protect women's health.",
      icon: <ShieldCheck className="h-10 w-10 text-rose-600" />,
      route: "cervical-and-breast-cancer-awareness",
    },
    {
      id: 2,
      title: "Immunization Awareness",
      description:
        "Understand the importance of vaccines for both mothers and children.",
      icon: <Syringe className="h-10 w-10 text-blue-600" />,
      route: "immunization-awareness-for-mothers-and-children",
    },
    {
      id: 6,
      title: "Childhood Illnesses & First Aid",
      description:
        "Recognize common illnesses and apply quick, effective first aid at home.",
      icon: <Stethoscope className="h-10 w-10 text-green-600" />,
      route: "common-childhood-illnesses-and-first-aid",
    },
    {
      id: 3,
      title: "Healthy Habits for Moms & Kids",
      description:
        "Build strong routines in nutrition, exercise, and sleep for lasting wellness.",
      icon: <HeartPulse className="h-10 w-10 text-teal-600" />,
      route: "healthy-habits-for-moms-and-kids",
    },
    {
      id: 7,
      title: "Safety at Home",
      description:
        "Prevent injuries and create a safe, nurturing environment for children.",
      icon: <House className="h-10 w-10 text-yellow-600" />,
      route: "safety-at-home-injury-prevention-and-healthy-spaces",
    },
    {
      id: 4,
      title: "Preventing Childhood Obesity",
      description:
        "Promote balanced diets and physical activity to ensure healthy development.",
      icon: <Apple className="h-10 w-10 text-red-600" />,
      route: "preventing-and-addressing-childhood-obesity",
    },
  ];
  const navigate = useNavigate();
  return (
    <div className="">
      {/* Hero */}
      <section className="min-h-screen border flex flex-col lg:flex-row justify-around items-center bg-[url('/assets/heroBg2.jpg')] bg-cover bg-center bg-no-repeat p-4 sm:p-8">
        <div className="heading max-w-full lg:max-w-[50%] text-center lg:text-start">
          <h1 className="text-6xl mt-10 md:text-6xl lg:text-7xl xl:text-8xl font-poppins text-purple-950 font-bold">
            Women's and{" "}
          </h1>
          <h1 className="text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins text-purple-950 font-bold">
            Children's Health
          </h1>
          <p className="w-full font-semibold mt-20 max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-full lg:w-[90%] xl:w-[700px] font-poppinslight text-xl text-start ms-0 lg:ms-3 lg:mt-3 text-purple-900">
            This website is your trusted space for learning, growing, and taking
            action toward a healthier future for women, mothers, and children.
            Whether you're a parent, student, health worker, or someone
            passionate about family well-being, you'll find beginner-friendly
            resources to support your journey. <br />
            <br />
            We believe that healthy habits begin at home—and that the right
            knowledge can build stronger, safer, and healthier communities. From
            menstrual health to child safety, we're here to help you make
            informed choices every day.{" "}
          </p>
        </div>
        <div className="image-container w-full sm:w-[90%] md:w-[80%] lg:w-[50%] max-w-[500px] lg:max-w-[680px] aspect-square rounded-full object-cover overflow-clip mt-8 lg:mt-0"></div>
      </section>
      {/* main feature */}
      <section className="min-h-screen bg-white py-24 px-6">
        {/* Headings */}
        <div className="text-center font-poppins mb-20">
          <h1 className="text-6xl md:text-6xl font-bold text-purple-950">
            Wellness Made Easy
          </h1>
          <h2 className="text-xl md:text-3xl text-purple-900 mt-4">
            Nearby Care & Helpful Blogs for Women and Kids
          </h2>
        </div>
        {/* Video Container */}
        <div className="mx-auto  md:w-[1000px] lg:w-[1300px]">
          {" "}
          <VideoGallery />
        </div>
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Blog Card */}
          <Card className="bg-white shadow-xl rounded-2xl flex flex-col justify-between text-center">
            <CardHeader className="flex flex-col items-center gap-4 pt-10">
              <BookOpen className="w-12 h-12 text-purple-700" />
              <CardTitle className="text-2xl font-semibold text-purple-900">
                Wellness Blogs
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6">
              <p className="text-gray-600 text-lg">
                Explore expert articles on women's health, parenting, and child
                wellness. Stay informed and empowered.
              </p>
            </CardContent>
            <CardFooter className="pb-10 mt-4 flex justify-center">
              <Button
                className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-6 py-2"
                onClick={() => {
                  navigate("/blogs");
                }}
              >
                View Blogs
              </Button>
            </CardFooter>
          </Card>

          {/* Maps Card */}
           <Card className="bg-white shadow-xl rounded-2xl flex flex-col justify-between text-center">
            <CardHeader className="flex flex-col items-center gap-4 pt-10">
              <MapPin className="w-12 h-12 text-purple-700" />
              <CardTitle className="text-2xl font-semibold text-purple-900">
                Nearby Healthcare
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6">
              <p className="text-gray-600 text-lg">
                Find trusted healthcare providers near you using our Google
                Earth-powered map. Wellness is just a click away.
              </p>
            </CardContent>
            <CardFooter className="pb-10 mt-4 flex justify-center">
              <Button
                className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-6 py-2"
                onClick={() => {
                  navigate("/map");
                }}
              >
                View Map
              </Button>
            </CardFooter>
          </Card>
            <Card className="bg-white shadow-xl rounded-2xl flex flex-col justify-between text-center">
            <CardHeader className="flex flex-col items-center gap-4 pt-10">
              <Newspaper className="w-12 h-12 text-purple-700" />
              <CardTitle className="text-2xl font-semibold text-purple-900">
               Reflection
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6">
              <p className="text-gray-600 text-lg">
                This section offers a thoughtful evaluation of the journey, highlighting key takeaways, personal growth, and areas for future improvement. It serves as an opportunity to critically assess what was learned and how those insights can inform future efforts.
              </p>
            </CardContent>
            <CardFooter className="pb-10 mt-4 flex justify-center">
              <Button
                className="bg-purple-600 text-white hover:bg-purple-700 rounded-full px-6 py-2"
                onClick={() => {
                  navigate("/reflection");
                }}
              >
                View Reflection
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
      {/* About Section */}
      <section className="min-h-screen w-full flex items-center justify-center px-4 py-10 bg-[url('/assets/bgbg.jpg')] bg-cover bg-center">
        <div className="about-container flex flex-col gap-6 sm:gap-10 max-w-4xl w-full">
          <div className="p-3 w-full">
            <h1 className="font-poppins text-6xl sm:text-6xl lg:text-8xl text-white">
              Who We Are
            </h1>
            <p className="break-words  font-poppins text-base sm:text-lg lg:text-xl mt-3 text-white">
              We are a group of seven passionate nursing students committed to
              promoting women’s and children’s health through education,
              awareness, and community support. This website is part of our
              academic project, created to serve as a learning hub for families,
              caregivers, and future health advocates.
            </p>
          </div>

          <div className="p-3 w-full">
            <h1 className="font-poppins text-6xl lg:text-8xl text-white">
              Our Academic Background
            </h1>
            <p className="break-words font-poppins text-base sm:text-lg lg:text-xl mt-3 text-white ">
              This project was developed as part of our coursework in: Bachelor
              of Science in Nursing
              <br />
              Subject: MST 101D: Information Technology Era
              <br />
              Institution: Bulacan State University San Rafael Campus
              <br />
              School Year: 2024–2025
            </p>
          </div>
        </div>
      </section>

      {/* teams section */}
      <section className="px-6 md:px-12 lg:px-24 py-12">
        <div className="p-5">
          {" "}
          <h1 className="text-center text-5xl md:text-8xl font-poppins text-purple-950">
            Meet The Team
          </h1>
          <p className="text-center font-poppinslight text-xl text-purple-900">
            Each of us brought our unique strengths and nursing knowledge
            together to build this platform with care and purpose.
          </p>
        </div>

        {/* Top Grid Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-10 place-items-center">
          {topRow.map((doc, i) => (
            <div
              key={i}
              className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={doc.src}
                alt={doc.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm text-white p-4">
                <h3 className="font-semibold text-lg">{doc.name}</h3>
                <p className="text-sm mt-1">{doc.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Centered Row */}
        <div className="flex justify-center gap-3 flex-wrap">
          {bottomRow.map((doc, i) => (
            <div
              key={i}
              className="relative w-[380px] h-[450px] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={doc.src}
                alt={doc.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 w-full bg-black/40 backdrop-blur-sm text-white p-4">
                <h3 className="font-semibold text-lg">{doc.name}</h3>
                <p className="text-sm mt-1">{doc.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Topic Highlights */}
      <section className="min-h-screen flex flex-col justify-center p-4 bg-gradient-to-tl from-purple-50 to-fuchsia-100">
        <div className="container mx-auto">
          <h2 className="text-5xl   md:text-8xl  mb-2 text-center font-poppins text-purple-950 mt-20">
            Empowering Health & Wellness for Every Mother and Child
          </h2>
          <p className="text-center mb-8 max-w-6xl mx-auto font-poppinslight text-3xl mt-10 text-purple-900">
            Discover essential health topics tailored to support moms and
            children — from hygiene and safety to nutrition and disease
            prevention.
          </p>

          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {topics.map((topic, index) => {
                return (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-[85%] sm:basis-1/2 lg:basis-1/3"
                  >
                    <Link to={`/blog/${topic.id}`}>
                      <Card className="hover:shadow-lg transition h-full w- text-center px-15 py-10 flex flex-col items-center justify-start">
                        <div className="mb-4">{topic.icon}</div>
                        <h3 className="font-semibold text-lg text-purple-950 mb-2 font-poppins">
                          {topic.title}
                        </h3>
                        <p className="text-sm text-purple-900">
                          {topic.description}
                        </p>
                      </Card>
                    </Link>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="min-h-[50vh] flex flex-col justify-center items-center text-center text-sm text-gray-500 border-t mt-8 p-4">
        <div>
          <p>
            &copy; {new Date().getFullYear()} EverWellCare. All rights reserved.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            <Link to="/about" className="hover:text-blue-600">
              About
            </Link>

            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
