import card1 from "../../assets/images/logos/logo_roya_wine.png";
import card2 from "../../assets/images/brochure&others/brochure_solfej.png";
import card3 from "../../assets/images/site/site_1.png";
import card4 from "../../assets/images/app/app_subTrack.png";
import card5 from "../../assets/images/brochure&others/heinz_3d_pr.png";
import card6 from "../../assets/images/site/website_art_school_2.jpg";
import ProjectCard from "./ProjectCard";
import ProjectsFilter from "./ProjectsFilter";
import ProjectModal from "./ProjectModal";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Graphic design",
    title: "Logos",
    description:
      "I create brand logos that look modern, feel recognizable, and match the personality of the brand. I focus on clean design and strong typography so the logo works just as well everywhere—from websites and social media to business cards and print..",
    link: "#!",
    filterId: 'design'
  },
  {
    id: 2,
    image: card2,
    category: "Graphic design",
    title: "Brochures",
    description:
      "I create brochures for different purposes, with a clean design and well-structured text that’s easy to read.",
    link: "#!",
    filterId: 'design'
  },
  {
    id: 3,
    image: card3,
    category: "Web design",
    title: "Websites",
    description:
      "I build different websites—such as for an art school and other projects—with a modern design and easy navigation.",
    link: "#!",
    filterId: 'ui'
  },
  {
    id: 4,
    image: card4,
    category: "UI-UX DESIGN",
    title: "Mobile Apps",
    description:
      "I design mobile apps with a user-friendly interface and a clear structure that looks great on different screen sizes.",
    link: "#!",
    filterId: 'ui'
  },
  {
    id: 5,
    image: card5,
    category: "3D Design",
    title: "3D Product Visualization",
    description:
      "I made a polygon-based 3D model and a realistic visualization of a Heinz packaging.",
    link: "#!",
    filterId: 'design'
  },
  {
    id: 6,
    image: card6,
    category: "Development",
    title: "Web Development",
    description:
      "I develop websites with clean code and easy navigation, tailored to the needs of the project — you can see more here.",
    link: "#!",
    filterId: 'development'
  },
];

export default function Projects() {

  const [filter, setFilter] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const cardRefs = useRef(new Map());
  const previousPositionsRef = useRef(new Map());

  const filteredProjects = projectData.filter(
    element => element.filterId === filter || filter === ''
  );

  function saveCurrentCardPositions() {
    const positions = new Map();

    cardRefs.current.forEach((cardElement, projectId) => {
      positions.set(projectId, cardElement.getBoundingClientRect());
    });

    previousPositionsRef.current = positions;
  }

  function onFilterButtonPressed(categoryFilter) {
    const nextFilter = filter === categoryFilter ? '' : categoryFilter;
    saveCurrentCardPositions();
    setFilter(nextFilter);
  }

  useLayoutEffect(() => {
    cardRefs.current.forEach((cardElement, projectId) => {
      const previousPosition = previousPositionsRef.current.get(projectId);
      const currentPosition = cardElement.getBoundingClientRect();

      if (previousPosition) {
        const deltaX = previousPosition.left - currentPosition.left;
        const deltaY = previousPosition.top - currentPosition.top;

        if (deltaX || deltaY) {
          cardElement.style.transition = "none";
          cardElement.style.transform = `translate(${deltaX}px, ${deltaY}px)`;

          requestAnimationFrame(() => {
            cardElement.style.transition = "transform 420ms ease";
            cardElement.style.transform = "translate(0, 0)";
          });
        }
      } else {
        cardElement.style.transition = "none";
        cardElement.style.opacity = "0";
        cardElement.style.transform = "translateY(18px) scale(0.98)";

        requestAnimationFrame(() => {
          cardElement.style.transition = "transform 420ms ease, opacity 320ms ease";
          cardElement.style.opacity = "1";
          cardElement.style.transform = "translateY(0) scale(1)";
        });
      }
    });

    previousPositionsRef.current = new Map();
  }, [filter]);

  useEffect(() => {
    if (!selectedProject) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2 bg-gray-100 rounded-3xl py-10 md:py-14"
      id="projects"
    >
      <div className="xl:mb-3 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here’s a selection of my recent work, showcasing graphic, web design
            and front-end projects I’ve built from concept to final result.
          </p>
        </div>
      </div>

      <ProjectsFilter value={filter} onFilterPressed={onFilterButtonPressed} />

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {filteredProjects.map((data, index) => (
            <div
              key={data.id}
              ref={(element) => {
                if (element) {
                  cardRefs.current.set(data.id, element);
                } else {
                  cardRefs.current.delete(data.id);
                }
              }}
              style={{ transitionDelay: `${index * 45}ms` }}
              className="will-change-transform h-full"
            >
              <ProjectCard data={data} onOpen={setSelectedProject} />
            </div>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};
