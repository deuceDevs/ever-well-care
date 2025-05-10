export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="bg-gradient-to-tl from-purple-50 to-fuchsia-100  py-16 px-4 border-b border-gray-200">
        <div className="max-w-4xl mx-auto text-center ">
          <h1 className="text-4xl font-bold text-purple-950 mb-4 font-poppins">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Connect with us through these contact infos.
          </p>
        </div>
      </header>

      <main className="flex-grow py-12 px-4 mx-auto w-full">
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              icon: "📞",
              title: "Phone",
              details: ["+63 968 698 3010"],
            },
            {
              icon: "✉️",
              title: "Email",
              details: ["alexamayenbernardo@gmail.com"],
            },
            {
              icon: "📍",
              title: "Location",
              details: ["San Roque, San Rafael, Bulacan"],
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-6 p-6 hover:bg-gray-50 rounded-lg transition"
            >
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h2 className="text-2xl font-semibold text-purple-950 mb-2 font-poppins">
                  {item.title}
                </h2>
                <div className="space-y-1">
                  {item.details.map((detail, i) => (
                    <p key={i} className="text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
