export type TJobs = {
  active?: boolean;
  category: string;
  companyId: {
    companyName: string;
    companyProfileId: {
      _id: string;
      logo?: string;
    };
    _id: string;
  };
  createdAt: string;
  description: string;
  info: {
    degree: string;
    endDate: string;
    jobType: string;
    location: string;
    maxExprience: number;
    maxQualification: string;
    maxSalary: number;
    minExprience: number;
    minSalary: number;
    roles: string;
    skills: string[];
    startDate: string;
    vacancies: number;
    workplaceType: string;
};
  title: string;
  _id: string;
};
