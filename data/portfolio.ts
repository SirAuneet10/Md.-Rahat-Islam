
import { CategoryType, Project, CategoryInfo, Experience } from '../types';

export const categories: CategoryInfo[] = [
  {
    type: CategoryType.FLYERS,
    label: 'Flyers',
    description: 'High-impact promotional prints designed to capture attention instantly for businesses and events.',
    icon: 'FileText',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bde7?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: CategoryType.BROCHURES,
    label: 'Brochures',
    description: 'Professional multi-page layouts that tell your complex brand story effectively.',
    icon: 'BookOpen',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: CategoryType.SOCIAL_MEDIA,
    label: 'Social Media',
    description: 'Engagement-focused graphics and campaign assets for major platforms.',
    icon: 'Share2',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: CategoryType.THUMBNAILS,
    label: 'YouTube Thumbnails',
    description: 'CTR-optimized visual hooks that drive growth for modern content creators.',
    icon: 'Youtube',
    image: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: CategoryType.POSTERS,
    label: 'Posters',
    description: 'Cinematic and bold large-scale prints for music, film, and corporate events.',
    icon: 'Image',
    image: 'https://images.unsplash.com/photo-1544333346-6466736a5676?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: CategoryType.INFOGRAPHICS,
    label: 'Infographics',
    description: 'Complex data transformed into clear, digestible, and beautiful data visualizations.',
    icon: 'BarChart2',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: CategoryType.BILLBOARDS,
    label: 'Billboards & Banners',
    description: 'Large format outdoor advertising that commands presence in the physical world.',
    icon: 'Monitor',
    image: 'https://images.unsplash.com/photo-1581333100576-b73bbe92c22e?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: CategoryType.AI_CONTENT,
    label: 'AI Content',
    description: 'Cutting-edge AI visuals refined with human artistic taste and brand strategy.',
    icon: 'Zap',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  }
];

export const projects: Project[] = [
  {
    id: 'behance-01',
    title: 'Elite Club Night Flyer',
    category: CategoryType.FLYERS,
    image: 'https://images.unsplash.com/photo-1571266028243-e4733b0f0bb1?auto=format&fit=crop&q=80&w=1200',
    description: 'A high-energy, vibrant flyer designed for a luxury nightclub event in Dhaka. Focused on typography and depth.',
    tools: ['Photoshop', 'Illustrator'],
    goal: 'Sold-out event within 48 hours of social media posting.',
    deliverables: ['Social Post', 'Story Version', 'Print-ready PDF'],
    featured: true,
    tags: ['Nightlife', 'Neon', 'Typography']
  },
  {
    id: 'behance-02',
    title: 'FinTech Corporate Brochure',
    category: CategoryType.BROCHURES,
    image: 'https://images.unsplash.com/photo-1515169067868-5387ec356754?auto=format&fit=crop&q=80&w=1200',
    description: 'A minimal, data-driven tri-fold brochure for an emerging FinTech startup. Focused on clarity and professional trust.',
    tools: ['InDesign', 'Illustrator'],
    goal: 'Communicate complex API features to non-technical investors.',
    deliverables: ['8-page Booklet', 'Interactive Digital PDF'],
    featured: true,
    tags: ['Corporate', 'Minimal', 'B2B']
  },
  {
    id: 'behance-03',
    title: 'Gaming Creator Thumbnail Pack',
    category: CategoryType.THUMBNAILS,
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200',
    description: 'Visual identity and high-CTR thumbnail system for a growing YouTube gaming channel.',
    tools: ['Photoshop'],
    goal: 'Increase channel average CTR from 4% to 12%.',
    deliverables: ['Custom Templates', 'Channel Art'],
    featured: true,
    tags: ['Gaming', 'YouTube', 'Engagement']
  },
  {
    id: 'behance-04',
    title: 'Neon Tokyo Concept Art',
    category: CategoryType.AI_CONTENT,
    image: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&q=80&w=1200',
    description: 'AI-generated atmosphere refined with manual digital painting to create a unique brand aesthetic.',
    tools: ['Midjourney', 'Photoshop'],
    goal: 'Create a unique social media hook that stands out from stock imagery.',
    deliverables: ['Key Visuals', 'Campaign Assets'],
    featured: true,
    tags: ['AI-Driven', 'Futuristic', 'Branding']
  },
  {
    id: 'behance-05',
    title: 'Luxury Watch Outdoor Billboard',
    category: CategoryType.BILLBOARDS,
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&q=80&w=1200',
    description: 'Large-scale advertising for a high-end horology brand. Focus on extreme detail and lighting.',
    tools: ['Photoshop', 'Lightroom'],
    goal: 'Drive awareness for a new seasonal collection launch.',
    deliverables: ['Large Format Print File', 'Store Window Vinyl'],
    featured: true,
    tags: ['Luxury', 'Billboard', 'Retail']
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
