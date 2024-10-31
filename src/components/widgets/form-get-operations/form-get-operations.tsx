import { useForm } from "react-hook-form";

type ModalRootProps = {
  handleAllTransfers: any;
  isVarianModal: string;
};

export const GetOperationsForm = (props: ModalRootProps) => {
  const {
    register: registerAllByUserIdTransfer,
    handleSubmit: handleSubmitAllByUserIdTransfer,
    formState: { errors: errorsAllByUserIdTransfer },
  } = useForm();

  return (
    <form
      id={props.isVarianModal}
      onSubmit={handleSubmitAllByUserIdTransfer(props.handleAllTransfers)}
    >
      <div>
        <label
          htmlFor="userId"
          className="block mb-2 text-sm font-semibold text-blue-500"
        >
          UserId:
        </label>
        <input
          id="userId"
          {...registerAllByUserIdTransfer("userId", {
            required: "UserId is required",
          })}
          className="bg-gray-50  text-gray-900 text-sm rounded-lg ring-2  border-indigo-300 focus:ring-blue-500  focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700  dark:border-gray-600  dark:placeholder-gray-400  dark:text-white  dark:focus:ring-blue-500  dark:focus:border-blue-500"
        />
        {errorsAllByUserIdTransfer.userId && (
          <p>{errorsAllByUserIdTransfer.userId.message}</p>
        )}
      </div>
    </form>
  );
};
