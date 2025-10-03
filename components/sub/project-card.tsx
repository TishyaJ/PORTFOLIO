import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  demoLink?: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  demoLink,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] bg-gray-900/50">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        
        <div className="mt-4 flex gap-3">
          <Link
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            GitHub
          </Link>
          {demoLink && (
            <Link
              href={demoLink}
              target="_blank"
              rel="noreferrer noopener"
              className="px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
            >
              ⭐ Live Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
