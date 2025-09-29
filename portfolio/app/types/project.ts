export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  technologies: string[];
  images: {
    desktop: string;
    mobile: string;
  };
  liveUrl?: string;
  githubUrl?: string;
}