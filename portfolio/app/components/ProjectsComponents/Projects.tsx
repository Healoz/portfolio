import React, { useEffect, useState } from "react";
import ContentContainer from "../ContentContainer";
import Title from "../Title";
import Image from "next/image";
import ProjectDisplay from "./ProjectDisplay";
import ProjectInfo from "./ProjectInfo";
import { Project } from "@/app/types/project";
import { getProjects } from "@/app/utils/projects";

// Test data
const testProjects: Project[] = [
  {
    id: "1",
    name: "glam-garage",
    title: "Glam Garage",
    description:
      "A modern e-commerce platform for automotive accessories with a sleek design and intuitive user experience. Features include product filtering, cart management, and responsive design.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    images: {
      desktop: "/project-screenshots/glam-garage-desktop.png",
      mobile: "/project-screenshots/glam-garage-mobile.png",
    },
    liveUrl: "https://glam-garage.vercel.app",
    githubUrl: "https://github.com/username/glam-garage",
  },
  {
    id: "2",
    name: "task-manager",
    title: "Task Manager Pro",
    description:
      "A comprehensive task management application with team collaboration features, deadline tracking, and progress visualization. Built with modern web technologies.",
    technologies: ["React", "Node.js", "PostgreSQL", "Express", "Socket.io"],
    images: {
      desktop: "/project-screenshots/sketch-grind-desktop.png",
      mobile: "/project-screenshots/sketch-grind-mobile.png",
    },
    liveUrl: "https://taskmanager-pro.vercel.app",
    githubUrl: "https://github.com/username/task-manager",
  },
  {
    id: "3",
    name: "weather-app",
    title: "Weather Dashboard",
    description:
      "Real-time weather monitoring dashboard with beautiful visualizations, location-based forecasts, and weather alerts. Integrates with multiple weather APIs.",
    technologies: ["Vue.js", "JavaScript", "Chart.js", "Weather API", "CSS3"],
    images: {
      desktop: "/project-screenshots/glam-garage-desktop.png",
      mobile: "/project-screenshots/glam-garage-mobile.png",
    },
    liveUrl: "https://weather-dash.vercel.app",
    githubUrl: "https://github.com/username/weather-dashboard",
  },
];

const Projects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
      if (fetchedProjects.length > 0) {
        setSelectedProjectId(fetchedProjects[0].id);
        console.log(fetchedProjects);
      }

      console.log(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  const navigateProject = (direction: "next" | "previous") => {
    const currentIndex = projects.findIndex(
      (project) => project.id === selectedProjectId
    );

    if (currentIndex === -1) return;

    let newIndex: number;

    if (direction === "next") {
      newIndex = currentIndex + 1 >= projects.length ? 0 : currentIndex + 1;
    } else {
      newIndex = currentIndex - 1 < 0 ? projects.length - 1 : currentIndex - 1;
    }

    setSelectedProjectId(projects[newIndex].id);
  };

  return (
    <ContentContainer backgroundColour="sand">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <Title>Projects</Title>
        </div>
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-5">
          <div className="lg:col-span-4">
            <ProjectDisplay
              project={selectedProject}
              navigateProject={navigateProject}
            />
          </div>
          <div className="lg:col-span-1">
            <ProjectInfo project={selectedProject} />
          </div>
        </div>
      </div>
    </ContentContainer>
  );
};

export default Projects;
