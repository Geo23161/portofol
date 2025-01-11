export interface Project {
  id: number;
  title: string;
  description: string;
  images: {
    url: string;
    alt: string;
    device: 'mobile' | 'desktop' | 'tablet';
  }[];
  demoUrl: string;
  github?: string;
}