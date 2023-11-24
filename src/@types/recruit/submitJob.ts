type TINITIAL_JOB_DATA = {
	title: string;
	category: string;
	description: string;
	tags: string[];
	vacancies: string;
	jobType: string;
	workplaceType: string;
	startDate: string;
	endDate: string;
	roles: string;
	skills: string[];
	minExprience: string;
	maxExprience?: string;
	minSalary?: string;
	maxSalary?: string;
	location?: string;
	maxQualification: string;
	degree: string;
};

export const INITIAL_JOB_DATA: TINITIAL_JOB_DATA = {
	title: "",
	category: "",
	description: "",
	tags: [],
	vacancies: "",
	workplaceType: "",
	jobType: "",
	startDate: "",
	endDate: "",
	roles: "",
	skills: [],
	minExprience: "",
	maxExprience: "",
	minSalary: "",
	maxSalary: "",
	location: "",
	maxQualification: "",
	degree: "",
};
