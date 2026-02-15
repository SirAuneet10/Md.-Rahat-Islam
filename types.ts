
export enum CategoryType {
  FLYERS = 'flyers',
  BROCHURES = 'brochures',
  SOCIAL_MEDIA = 'social-media',
  THUMBNAILS = 'thumbnails',
  POSTERS = 'posters',
  INFOGRAPHICS = 'infographics',
  BILLBOARDS = 'billboards-banners',
  AI_CONTENT = 'ai-content'
}

export interface Project {
  id: string;
  title: string;
  client?: string;
  category: CategoryType;
  image: string;
  description: string;
  tools: string[];
  goal: string;
  deliverables: string[];
  featured: boolean;
  tags: string[];
}

export interface CategoryInfo {
  type: CategoryType;
  label: string;
  description: string;
  icon: string;
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}
