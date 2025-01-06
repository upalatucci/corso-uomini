"use client";

import { login, LoginState } from "@/lib/login";
import { useFormState } from "react-dom";

const Login = () => {
  const [state, formAction] = useFormState<LoginState, FormData>(login, {
    error: "",
  });

  return (
    <section
      id="home"
      className=" relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[800px] text-center"
              data-wow-delay=".2s"
            >
              <h1 className="mb-5 text-3xl font-bold leading-tight text-black  sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                Accedi
              </h1>

              <form action={formAction}>
                <div className="sm:col-span-4 mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                      />
                    </div>
                  </div>
                </div>

                {state.error && (
                  <div
                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
                    role="alert"
                  >
                    <strong className="font-bold">Errore: </strong>{" "}
                    <span className="block sm:inline">{state.error}</span>
                  </div>
                )}

                <button className="shadow-submit rounded-md bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                  Accedi
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
