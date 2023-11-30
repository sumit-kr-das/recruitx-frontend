const Visitors = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted by Jobseekers & Companies
          </h2>

          <p className="mt-4 text-gray-500 sm:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            dolores laborum labore provident impedit esse recusandae facere
            libero harum sequi.
          </p>
        </div>

        <div className="mt-8 sm:mt-12">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Total Visitors
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                1200
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Weekly Visitors
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                24
              </dd>
            </div>

            <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
              <dt className="order-last text-lg font-medium text-gray-500">
                Daily Visitors
              </dt>

              <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                10
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Visitors;
