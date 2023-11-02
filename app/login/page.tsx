import Image from "next/image";
export default function Login() {
  const content = (
    <section className="h-[100vh] flex justify-center">
      <div className="w-fit">
        <form className="rounded px-8 pt-6 pb-8 mb-4 mt-[30%]">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Email address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="johndoe@mail.com"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-neutral-600 hover:bg-neutral-700 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-stone-500 hover:text-stone-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-10 grid space-y-4">
            <button className="group h-12 px-8 border-2 border-gray-300 rounded-full transition duration-300 hover:border-stone-400 focus:bg-blue-50 active:bg-blue-100">
              <div className="relative flex items-center space-x-10 justify-center">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  className="absolute left-0 w-5"
                  alt="google logo"
                />
                <span className="block w-max font-medium tracking-wide text-gray-700 dark:text-neutral-700 text-sm transition duration-300 group-hover:text-neutral-900 sm:text-base">
                  Continue with Google
                </span>
              </div>
            </button>
            <button className="group h-12 px-8 border-2 border-gray-300 rounded-full transition duration-300 hover:border-stone-400 focus:bg-blue-50 active:bg-blue-100">
              <div className="relative flex items-center space-x-10 justify-center">
                <img
                  src="https://www.svgrepo.com/show/448224/facebook.svg"
                  className="absolute left-0 w-5"
                  alt="google logo"
                />
                <span className="block w-max font-medium tracking-wide text-gray-700 dark:text-neutral-700 text-sm transition duration-300 group-hover:text-neutral-900 sm:text-base">
                  Continue with Facebook
                </span>
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
  return content;
}
