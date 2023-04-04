export type SideProject = {
  title: string;
  codeUrl: string;
  modalInfo: {
    imageUrl: string;
    description: string;
  };
  cardInfo: {
    imageUrl: string;
    description: string;
  };
  webAppURL?: string;
};

export type WorkExperience = {
  jobTitle: string;
  imageUrl: string;
  imageAlt: string;
  company: string;
  location: string;
  dateRange: string;
  notableAccomplishments: string[];
};

export type EducationItem = {
  dateRange: string;
  title: string;
  institution: string;
  location: string;
  accomplishment: string;
};
