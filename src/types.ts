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
  startDate: string;
  endDate: string;
  notableAccomplishments: string[];
};
