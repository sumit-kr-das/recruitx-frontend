type TInfo = {
	vacancies: number;
	workplaceType: string;
	jobType: string;

	startDate: string;
	endDate: string;
	roles: string;

	skills: string[]; //left

	minExprience: number;
	maxExprience?: number;

	minSalary?: number;
	maxSalary?: number;

	location?: string;

	maxQualification: string;
	degree: string;
};

type TINITIAL_JOB_DATA = {
	title: string;
	category: string;
	description: string;
	tags: string[]; // left
	active: boolean;
	info: TInfo;
};

const Info = {
	vacancies: 0,
	workplaceType: "",
	jobType: "",
	startDate: "",
	endDate: "",
	roles: "",
	skills: [],
	minExprience: 0,
	maxExprience: 0,
	minSalary: 0,
	maxSalary: 0,
	location: "",
	maxQualification: "",
	degree: "",
};

export const INITIAL_JOB_DATA:TINITIAL_JOB_DATA = {
	title: "",
	category: "",
	description: "",
	tags: [],
	active: true,
	info: Info,
};
