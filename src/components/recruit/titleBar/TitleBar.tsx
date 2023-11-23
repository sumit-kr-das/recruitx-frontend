
type TRecruitTitle = {
	title?: string;
	path?: string;
};

const TitleBar = ({ title, path }: TRecruitTitle) => {
	return (
		<div className="mt-5 mb-10">
			<h1 className="text-2xl font-semibold">{title}</h1>
			<p className="text-slate-500 text-sm mt-2">{path}</p>
		</div>
	);
};

export default TitleBar;
