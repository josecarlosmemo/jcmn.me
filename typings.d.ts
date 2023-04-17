export type Social = {
    name: string;
    link: string;
};

export type GeneralData = {
  name: string;
  role: string;
  heroImage: string;
  about: string;
  profilePicture: string;
  phoneNumber: string;
  email: string;
  address: string;
  resume: string;
  heroTexts: string[];
};

export type Skill = {
  title: string;
  icon: string;
};

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: Skill[];
  githubLink?: string;
  demoLink?: string;
  isFeatured: boolean;
};



