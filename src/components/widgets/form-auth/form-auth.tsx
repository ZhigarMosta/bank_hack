"use client";
import { useForm } from "react-hook-form";

type ModalRootProps = {
  handleLogin: any;
  isVarianModal: string;
};

export const AuthForm = (props: ModalRootProps) => {
  const {
    register: registerLogin,
    handleSubmit: handleSubmitLogin,
    formState: { errors: errorsLogin },
  } = useForm();
  return (
    <form
      id={props.isVarianModal}
      onSubmit={handleSubmitLogin(props.handleLogin)}
      className="min-w-72 max-w-96w-full"
    >
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-semibold  text-blue-500"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          className=" bg-gray-50  text-gray-900 text-sm rounded-lg ring-2  border-indigo-300 focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:border-gray-600  dark:placeholder-gray-400  dark:text-white  dark:focus:ring-blue-500  dark:focus:border-blue-500"
          placeholder="name@mail.com"
          required
          {...registerLogin("email", {
            required: "Email is required",
          })}
        />
        {errorsLogin.email && <p>{errorsLogin.email.message}</p>}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-semibold text-blue-500"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="bg-gray-50  text-gray-900 text-sm rounded-lg ring-2  border-indigo-300 focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:border-gray-600  dark:placeholder-gray-400  dark:text-white  dark:focus:ring-blue-500  dark:focus:border-blue-500"
          placeholder="qwerty123"
          required
          {...registerLogin("password", {
            required: "Password is required",
          })}
        />
        {errorsLogin.password && <p>{errorsLogin.password.message}</p>}
      </div>
    </form>
  );
};
