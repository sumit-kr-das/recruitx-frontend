import React from 'react'

const a = () => {
  return (
    <div className="max-w-screen-xl mx-auto pb-10 flex justify-between">
      <section className="mt-32 w-full flex justify-between">
        <div>
          <p className="text-center text-sm font-semibold text-cyan-500">
            NAUKRI HIRING SUITE FOR EMPLOYERS
          </p>
          <h2 className="text-center text-2xl font-semibold mt-2">
            From Campus to Senior Level Hiring
          </h2>
          <h2 className="text-center text-sm mb-8 mt-2">
            Bouquet of solutions to meet all your hiring needs
          </h2>
          <img src={RegisterImg} width={400} height={400} alt="register img" />
        </div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-12 lg:px-8">
          <div className="text-center sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-2xl font-semibold">Login Account</h1>
            <p className="text-sm text-gray-500">
              Are you a new client?{" "}
              <Link
                to="/cRegister"
                className="font-semibold leading-6 text-cyan-500 hover:text-cyan-600"
              >
                Register now
              </Link>
            </p>
          </div>
          <div>
            <div
              className="shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-sky-600"
              aria-current="page"
            >
              Company
            </div>
            <div
              className="shrink-0 rounded-lg bg-sky-100 p-2 text-sm font-medium text-sky-600"
              aria-current="page"
            >
              Admin
            </div>
          </div>
          <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    value={user.email}
                    onChange={handleUserValue}
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    name="password"
                    value={user.password}
                    onChange={handleUserValue}
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cyan-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {isLoading ? (
                <button
                  disabled={true}
                  className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Loading...
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-cyan-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Login
                </button>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default a
