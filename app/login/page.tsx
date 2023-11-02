export default function Login() {
  const content = (
    <section className="h-[100vh] flex justify-center">
      <div className="w-full max-w-xs">
        <form className="rounded px-8 pt-6 pb-8 mb-4 mt-[50%]">
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
              className="bg-neutral-600 hover:bg-neutral-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
        </form>
      </div>
    </section>
  );
  return content;
}
