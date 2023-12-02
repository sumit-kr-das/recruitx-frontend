import { useGetWebStatsQuery } from "../../features/statics/getWebStatsApiSlice";

const Visitors = () => {
  const { data } = useGetWebStatsQuery();
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Jobseekers & Companies
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Recruitx has a greate achivement of stats and proudly show it how we are chaning the hiring industry.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Companies
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                {data?.companies}
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Jobs
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                {data?.jobs}
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Users
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                {data?.users}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Visitors;
