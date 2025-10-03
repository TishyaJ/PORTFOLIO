export const Achievements = () => {
  const achievements = [
    {
      title: "Top 250 Finalist Nationwide | Odoo Hackathon 2025",
      year: "2025",
      description: "Finalist in the prestigious Odoo Hackathon 2025, competing among top developers nationwide."
    },
    {
      title: "Contributor @GSSOC 2025",
      year: "2025", 
      description: "Active contributor in GirlScript Summer of Code 2025, contributing to open source projects."
    },
    {
      title: "Round 2 Qualifier | Flipkart Grid Software Development Track",
      year: "2025",
      description: "Qualified to Round 2 in Flipkart Grid Software Development Track, showcasing technical expertise."
    },
    {
      title: "Winner at CodeClash Hackathon by Let's Code Community",
      year: "2025",
      description: "Winner of CodeClash Hackathon organized by Let's Code Community, demonstrating problem-solving skills."
    },
    {
      title: "Rank 1 | DSA Quiz and Coding Competition | Technocrat Institute of Technology Bhopal",
      year: "2025",
      description: "Secured Rank 1 in DSA Quiz and Coding Competition at Technocrat Institute of Technology Bhopal."
    },
    {
      title: "Qualified to Round 2 | Flipkart Grid Robotics Track",
      year: "2024",
      description: "Advanced to Round 2 in Flipkart Grid Robotics Track, showcasing interdisciplinary skills."
    },
    {
      title: "Selected as Finalists at IIT Bombay Techfest | Meshmerize",
      year: "2024",
      description: "Finalist at IIT Bombay Techfest in Meshmerize competition, competing among top engineering students."
    },
    {
      title: "Qualified JEE Mains and JEE Advanced as top 2 percent | CUET 99.98 percentile in Maths",
      year: "2022-23",
      description: "Achieved top 2% in JEE Mains and JEE Advanced, with 99.98 percentile in Mathematics in CUET."
    },
    {
      title: "NTSE UP 2023 Scholar | Participated and Won several Olympiads",
      year: "2018-21",
      description: "NTSE UP 2023 Scholar with multiple Olympiad achievements during 2018-2021."
    }
  ];

  return (
    <section
      id="achievements"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Achievements & Recognition
      </h1>
      <div className="h-full w-full flex flex-col gap-8 px-10 max-w-4xl">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:bg-gray-800/70 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 className="text-xl font-semibold text-white mb-2 md:mb-0">
                {achievement.title}
              </h3>
              <span className="text-purple-400 font-medium text-sm">
                {achievement.year}
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

