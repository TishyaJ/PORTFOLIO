export const SpecialLinks = () => {
  const specialLinks = [
    {
      title: "Certifications & Credentials",
      links: [
        {
          name: "IIT Bombay Quantum Computing Workshop",
          url: "https://cert-files.konfhub.com/4988/8f21e10e-c8f5-11ef-975b-9506a95560fd.pdf",
          icon: "🎓",
          description: "Certificate in Quantum Computing"
        },
        {
          name: "Credly Profile",
          url: "https://www.credly.com/users/tishya-jha",
          icon: "🏆",
          description: "Digital badges and certifications"
        }
      ]
    },
    {
      title: "Professional Profiles",
      links: [
        {
          name: "Unstop Profile",
          url: "https://unstop.com/u/tishyjha8354",
          icon: "🚀",
          description: "Competition and hackathon profile"
        },
        {
          name: "Google Developer Profile",
          url: "https://g.dev/tishyajha",
          icon: "💻",
          description: "Google Developer community profile"
        },
        {
          name: "Codeforces",
          url: "https://codeforces.com/profile/emeraldeyes",
          icon: "⚔️",
          description: "Competitive programming profile"
        },
        {
          name: "LeetCode",
          url: "https://leetcode.com/u/TISHYA_JHA_04/",
          icon: "💡",
          description: "Algorithm and data structure practice"
        }
      ]
    }
  ];

  return (
    <section
      id="special-links"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Certifications & Profiles
      </h1>
      <div className="h-full w-full flex flex-col gap-8 px-10 max-w-6xl">
        {specialLinks.map((section, sectionIndex) => (
          <div key={sectionIndex} className="w-full">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:border-purple-500"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{link.icon}</span>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {link.name}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {link.description}
                  </p>
                  <div className="mt-3 flex items-center text-purple-400 text-sm font-medium">
                    <span>View Details</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
