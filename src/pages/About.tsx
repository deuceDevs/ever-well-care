export default function About() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-10 bg-[url('../../public/assets/bgbg.jpg')] bg-cover bg-center">
      <div className="about-container flex flex-col gap-6 sm:gap-10 max-w-4xl w-full">
        <div className="p-3 w-full">
          <h1 className="font-poppins text-4xl sm:text-6xl lg:text-8xl text-white">
            Who We Are
          </h1>
          <p className="break-words font-poppinslight text-base sm:text-lg lg:text-xl mt-3 text-white">
            We are a group of seven passionate nursing students committed to
            promoting women’s and children’s health through education,
            awareness, and community support. This website is part of our
            academic project, created to serve as a learning hub for families,
            caregivers, and future health advocates.
          </p>
        </div>

        <div className="p-3 w-full">
          <h1 className="font-poppins text-4xl sm:text-6xl lg:text-8xl text-white">
            Our Academic Background
          </h1>
          <p className="break-words font-poppinslight text-base sm:text-lg lg:text-xl mt-3 text-white">
            This project was developed as part of our coursework in: Bachelor of
            Science in Nursing
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
  );
}
