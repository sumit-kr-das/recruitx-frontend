export type TInfo = {
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

export type TINITIAL_JOB_DATA = {
	title: string;
	category: string;
	description: string;
	tags: string[]; // left
	active: boolean;
	info: TInfo;
};
