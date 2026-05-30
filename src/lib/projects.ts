export type ProjectMedia = {
  src: string;
  type?: "image" | "video";
};

export type Project = {
  slug: string;
  n: string;
  title: string;
  category: string;
  year: string;
  client: string;
  role: string;
  intro: string;
  main: string;
  dominantColor: string;
  media: ProjectMedia[];
};

const makeMedia = (folder: string, files: string[]): ProjectMedia[] =>
  files.map((file) => ({
    src: `/images/${folder}/${file}`,
    type: file.endsWith(".mp4") ? "video" : "image",
  }));

export const projects: Project[] = [
  {
    slug: "project-1",
    n: "01",
    title: "Project 1",
    category: "Brand Identity",
    year: "2026",
    client: "Selected Work",
    role: "Art Direction, Visual System",
    intro:
      "A visual story built from atmosphere, rhythm, and detail. The project moves between quiet brand moments and bold compositions, letting each image reveal the next part of the system.",
    main: "/images/project-1/main.png",
    dominantColor: "#816E56",
    media: makeMedia("project-1", [
      "main.png",
      "second.png",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.mp4",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.mp4",
      "15.jpg",
      "16.jpg",
      "17.mp4",
      "18.jpg",
      "19.jpg",
    ]),
  },
  {
    slug: "project-2",
    n: "02",
    title: "Project 2",
    category: "Campaign Design",
    year: "2026",
    client: "Selected Work",
    role: "Creative Direction, Layout",
    intro:
      "A cinematic identity study shaped through wide frames, close details, and generous pauses. Each asset extends the same visual language across scale, motion, and print-minded composition.",
    main: "/images/project-2/main.png",
    dominantColor: "#533927",
    media: makeMedia("project-2", [
      "main.png",
      "second.png",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
    ]),
  },
  {
    slug: "project-3",
    n: "03",
    title: "Project 3",
    category: "Visual Identity",
    year: "2026",
    client: "Selected Work",
    role: "Brand, Motion, Direction",
    intro:
      "A compact story with a strong central mark and supporting frames. The sequence keeps the main idea visible while the surrounding images add texture, pace, and emotional context.",
    main: "/images/project-3/main.png",
    dominantColor: "#00063A",
    media: makeMedia("project-3", ["main.png", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.mp4"]),
  },
  {
    slug: "layers-coffe-shop",
    n: "04",
    title: "Layers Coffee Shop",
    category: "Cafe Branding",
    year: "2026",
    client: "Layers Coffee Shop",
    role: "Identity, Social Content",
    intro:
      "A warm cafe identity told through stacked textures, product moments, and social-first compositions. The story keeps the brand close, tactile, and easy to recognize at a glance.",
    main: "/images/Layers-coffe-shop/1.jpg",
    dominantColor: "#42210D",
    media: makeMedia("Layers-coffe-shop", [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.mp4",
    ]),
  },
  {
    slug: "maghrebwaves",
    n: "05",
    title: "Maghrebwaves",
    category: "Music Visuals",
    year: "2026",
    client: "Maghrebwaves",
    role: "Cover Art, Campaign System",
    intro:
      "A social and music-led visual system with repeated formats and shifting moods. The work moves like a feed: direct, memorable, and built to hold attention frame after frame.",
    main: "/images/Maghrebwaves/1.jpg",
    dominantColor: "#233C50",
    media: makeMedia("Maghrebwaves", [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
      "16.jpg",
    ]),
  },
  {
    slug: "orea-coastal-parfum",
    n: "06",
    title: "Orea Coastal Parfum",
    category: "Packaging",
    year: "2026",
    client: "Orea",
    role: "Brand, Packaging, Art Direction",
    intro:
      "A coastal fragrance story built from softness, clarity, and product presence. Each frame adds another sensory cue, from packaging details to calm editorial compositions.",
    main: "/images/orea-coastal-parfum/1.jpg",
    dominantColor: "#A5A486",
    media: makeMedia("orea-coastal-parfum", [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
    ]),
  },
  {
    slug: "plantino",
    n: "07",
    title: "Plantino",
    category: "Social Identity",
    year: "2026",
    client: "Plantino",
    role: "Content System, Visual Direction",
    intro:
      "A clean social identity designed around simple recognition and steady repetition. The project uses compact compositions to build a consistent voice across the whole set.",
    main: "/images/plantino/1.jpg",
    dominantColor: "#E5E3D6",
    media: makeMedia("plantino", [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
    ]),
  },
  {
    slug: "samba-surf-shop",
    n: "08",
    title: "Samba Surf Shop",
    category: "Retail Identity",
    year: "2026",
    client: "Samba Surf Shop",
    role: "Identity, Social Posts",
    intro:
      "A surf-shop identity with quick-read visuals and an easy coastal rhythm. The sequence balances practical brand pieces with moments that feel sunlit, active, and local.",
    main: "/images/Samba-surf-shop/1.jpg",
    dominantColor: "#F1F5D6",
    media: makeMedia("Samba-surf-shop", [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
    ]),
  },
  {
    slug: "tafoukt-surf-house",
    n: "09",
    title: "Tafoukt Surf House",
    category: "Hospitality Branding",
    year: "2026",
    client: "Tafoukt Surf House",
    role: "Brand, Social Direction",
    intro:
      "A hospitality story shaped around surf culture, light, and a relaxed sense of place. The images build a welcoming rhythm from first impression to final detail.",
    main: "/images/Tafoukt-surf-house/1.jpg",
    dominantColor: "#959F59",
    media: makeMedia("Tafoukt-surf-house", [
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
    ]),
  },
];

export const featuredProjects = projects.slice(0, 6);

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);
