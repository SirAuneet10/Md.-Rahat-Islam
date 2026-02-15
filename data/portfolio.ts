
import { CategoryType, Project, CategoryInfo, Experience } from '../types';

export const categories: CategoryInfo[] = [
  {
    type: CategoryType.FLYERS,
    label: 'Flyers',
    description: 'High-impact promotional prints designed to capture attention instantly.',
    icon: 'FileText',
    image: 'https://picsum.photos/seed/flyer/800/600'
  },
  {
    type: CategoryType.BROCHURES,
    label: 'Brochures',
    description: 'Professional multi-page layouts that tell your brand story effectively.',
    icon: 'BookOpen',
    image: 'https://picsum.photos/seed/brochure/800/600'
  },
  {
    type: CategoryType.SOCIAL_MEDIA,
    label: 'Social Media',
    description: 'Engagement-focused graphics for Instagram, Twitter, and LinkedIn.',
    icon: 'Share2',
    image: 'https://picsum.photos/seed/social/800/600'
  },
  {
    type: CategoryType.THUMBNAILS,
    label: 'YouTube Thumbnails',
    description: 'Click-optimized visual hooks for modern content creators.',
    icon: 'Youtube',
    image: 'https://picsum.photos/seed/thumb/800/600'
  },
  {
    type: CategoryType.POSTERS,
    label: 'Posters',
    description: 'Cinematic and bold large-scale prints for events and marketing.',
    icon: 'Image',
    image: 'https://picsum.photos/seed/poster/800/600'
  },
  {
    type: CategoryType.INFOGRAPHICS,
    label: 'Infographics',
    description: 'Complex data transformed into clear, digestible, and beautiful visuals.',
    icon: 'BarChart2',
    image: 'https://picsum.photos/seed/info/800/600'
  },
  {
    type: CategoryType.BILLBOARDS,
    label: 'Billboards & Banners',
    description: 'Large format outdoor advertising that commands presence.',
    icon: 'Monitor',
    image: 'https://picsum.photos/seed/billboard/800/600'
  },
  {
    type: CategoryType.AI_CONTENT,
    label: 'AI Content',
    description: 'Cutting-edge AI visuals refined with human strategy and artistic taste.',
    icon: 'Zap',
    image: 'https://picsum.photos/seed/ai/800/600'
  }
];

export const projects: Project[] = [
  {
    id: 'flyer-01',
    title: 'Corporate Event Flyer',
    category: CategoryType.FLYERS,
    image: 'https://picsum.photos/seed/f1/1200/1600',
    description: 'A modern, sleek flyer for a high-end corporate networking event.',
    tools: ['Photoshop', 'Illustrator'],
    goal: 'Increase event registration by 25% through visual appeal.',
    deliverables: ['Print-ready PDF', 'Social Media version'],
    featured: true,
    tags: ['Print', 'Corporate', 'Modern']
  },
  {
    id: 'social-01',
    title: 'Instagram Brand Campaign',
    category: CategoryType.SOCIAL_MEDIA,
    image: 'https://picsum.photos/seed/s1/1200/1200',
    description: 'A cohesive set of 12 posts for a lifestyle fashion brand.',
    tools: ['Photoshop', 'After Effects'],
    goal: 'Maintain brand consistency across all digital touchpoints.',
    deliverables: ['12 JPG posts', '3 Motion Reels'],
    featured: true,
    tags: ['Digital', 'Branding', 'Motion']
  },
  {
    id: 'ai-01',
    title: 'Cyberpunk Concept Art',
    category: CategoryType.AI_CONTENT,
    image: 'https://picsum.photos/seed/a1/1200/800',
    description: 'AI-generated environment refined with digital painting for a tech brand.',
    tools: ['Midjourney', 'Photoshop'],
    goal: 'Create unique atmospheric visuals for a product launch.',
    deliverables: ['High-res Concept Keyframe'],
    featured: true,
    tags: ['AI', 'Concept Art', 'Human-Refined']
  },
  {
    id: 'thumb-01',
    title: 'Tech Review Thumbnail',
    category: CategoryType.THUMBNAILS,
    image: 'https://picsum.photos/seed/t1/1200/675',
    description: 'High-CTR thumbnail for a major tech YouTuber.',
    tools: ['Photoshop'],
    goal: 'Achieve >10% click-through rate.',
    deliverables: ['WebP optimized thumbnail'],
    featured: true,
    tags: ['YouTube', 'Engagement']
  },
  {
    id: 'billboard-01',
    title: 'Cookie Crumble Outdoor',
    category: CategoryType.BILLBOARDS,
    image: 'https://picsum.photos/seed/b1/1600/900',
    description: 'Billboard design for a local bakery expansion.',
    tools: ['Illustrator', 'Photoshop'],
    goal: 'Drive foot traffic to the new store location.',
    deliverables: ['Large Format Print File'],
    featured: true,
    tags: ['Print', 'Outdoor']
  },
  {
    id: 'info-01',
    title: 'Market Trends Infographic',
    category: CategoryType.INFOGRAPHICS,
    image: 'https://picsum.photos/seed/i1/1200/1800',
    description: 'A comprehensive visual breakdown of 2024 marketing trends.',
    tools: ['Illustrator'],
    goal: 'Simplify complex data for an executive presentation.',
    deliverables: ['Vector PDF', 'Web SVG'],
    featured: true,
    tags: ['Data Viz', 'B2B']
  }
];

export const experiences: Experience[] = [
  {
    role: 'Content Creator & Senior Marketing Director',
    company: 'Skiff Technologies',
    period: '2021 - Present',
    description: [
      'Leading visual content strategy for international remote teams.',
      'Developing AI-supported marketing campaigns that increased reach by 40%.',
      'Overseeing production of graphics, ad creatives, and motion videos.',
      'Ensuring strict brand consistency across all marketing channels.'
    ]
  },
  {
    role: 'Graphic Designer',
    company: 'Ballywho? Consulting & FaceCoverUS',
    period: '2019 - 2021',
    description: [
      'Crafted high-performance social graphics and promotional ads.',
      'Collaborated directly with clients to translate brand values into visuals.',
      'Maintained design systems for multiple recurring client accounts.'
    ]
  },
  {
    role: 'Creative Designer',
    company: 'FiLLi Chicago',
    period: '2018 - 2019',
    description: [
      'Designed all print and digital menu systems.',
      'Produced localized social media content and promotional videos.',
      'Managed end-to-end print production for outdoor signage.'
    ]
  }
];
