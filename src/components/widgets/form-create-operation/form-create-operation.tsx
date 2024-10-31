import { ReactNode } from "react";
import { useForm } from "react-hook-form";

type ModalRootProps = {
  handleTransfer: any;
  isVarianModal: string;
};

export const CreateOperationForm = (props: ModalRootProps) => {
  const {
    register: registerTransfer,
    handleSubmit: handleSubmitTransfer,
    formState: { errors: errorsTransfer },
  } = useForm();

  return (
    <form
      id={props.isVarianModal}
      onSubmit={handleSubmitTransfer(props.handleTransfer)}
      className="min-w-72 max-w-96w-full"
    >
      <div className="mb-5">
        <label
          htmlFor="from"
          className="block mb-2 text-sm font-semibold text-blue-500"
        >
          From:
        </label>
        <input
          id="from"
          {...registerTransfer("from", {
            required: "From is required",
          })}
          className="bg-gray-50  text-gray-900 text-sm rounded-lg ring-2  border-indigo-300 focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:border-gray-600  dark:placeholder-gray-400  dark:text-white  dark:focus:ring-blue-500  dark:focus:border-blue-500"
        />
        {errorsTransfer.from && <p>{errorsTransfer.from.message}</p>}
      </div>
      <div className="mb-5">
        <label
          htmlFor="to"
          className="block mb-2 text-sm font-semibold text-blue-500"
        >
          To:
        </label>
        <input
          id="to"
          {...registerTransfer("to", {
            required: "To is required",
          })}
          className="bg-gray-50  text-gray-900 text-sm rounded-lg ring-2  border-indigo-300 focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:border-gray-600  dark:placeholder-gray-400  dark:text-white  dark:focus:ring-blue-500  dark:focus:border-blue-500"
        />
        {errorsTransfer.to && <p>{errorsTransfer.to.message}</p>}
      </div>
      <div className="mb-5">
        <label
          htmlFor="amount"
          className="block mb-2 text-sm font-semibold text-blue-500"
        >
          Amount:
        </label>
        <input
          id="amount"
          {...registerTransfer("amount", {
            required: "Amount is required",
          })}
          className="bg-gray-50  text-gray-900 text-sm rounded-lg ring-2  border-indigo-300 focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:border-gray-600  dark:placeholder-gray-400  dark:text-white  dark:focus:ring-blue-500  dark:focus:border-blue-500"
        />
        {errorsTransfer.amount && <p>{errorsTransfer.amount.message}</p>}
      </div>
    </form>
  );
};
