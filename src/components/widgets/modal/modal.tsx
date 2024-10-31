import { Button } from "@/components/shared/button";
import { loginUser } from "@/model/login";
import { $UserInfo } from "@/store/usesr-store";
import { getProfile } from "@/model/user-info";
import { getAllProfile } from "@/model/all-user-info";
import { $AllUserInfo } from "@/store/all-usesr-store";
import { type ReactNode } from "react";
import { OperationCreate } from "@/model/operation-create";
import { findAllOperationByUserId } from "@/model/operation-getAllByUserId";
import { AuthForm } from "../form-auth/form-auth";
import { CreateOperationForm } from "../form-create-operation/form-create-operation";
import { GetOperationsForm } from "../form-get-operations/form-get-operations";

type ModalRootProps = {
  children?: ReactNode;
  isVarianModal: "auth" | "createOperation" | "getOperations" | "closeModal";
  onIsOpenChange: (
    isVarianModal: "auth" | "createOperation" | "getOperations" | "closeModal"
  ) => void;
  SetIsAuthorize: (isAuthorize: boolean) => void;
};

export const Modal = (props: ModalRootProps) => {
  const handleFindAllOperationByUserId = async (data: any) => {
    try {
      await findAllOperationByUserId(data.userId);
    } catch (error) {
      console.log("не удалось получить операции");
    }
  };

  const handleProfile = async () => {
    try {
      const response = await getProfile();
      console.log("Logout successful:", response);
      console.log($UserInfo);
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  const handleAllProfile = async () => {
    try {
      const response = await getAllProfile();
      console.log("Logout successful:", response);
      console.log($AllUserInfo);
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };
  const handleOperationCreate = async (data: any) => {
    try {
      const response = await OperationCreate(data);
      handleProfile();
      handleAllProfile();
      console.log(response);
    } catch (error) {
      console.log("операция не создалась");
    }
  };
  const handleLogin = async (data: any) => {
    try {
      const response = await loginUser(data);
      if (response == 200) {
        handleProfile();
        handleAllProfile();
        props.SetIsAuthorize(true);
        props.onIsOpenChange("closeModal");
      }
    } catch (error) {
      console.log("Login failed:", error);
    }
  };
  if (props.isVarianModal === "closeModal") return null;
  return (
    <div className="absolute flex justify-center inset-0 items-end sm:bg-opacity-50 sm:items-center bg-black bg-opacity-50 h-screen z-10">
      <div className="modal-window flex flex-col justify-between p-5 rounded-lg rin border-indigo bg-blue-200  shadow-xl">
        <div className="modal-header flex flex-row gap-5 justify-between mb-5">
          {(() => {
            switch (props.isVarianModal) {
              case "auth":
                return (
                  <h2 className="text-xl font-semibold text-blue-500">
                    Авторизация
                  </h2>
                );
              case "createOperation":
                return (
                  <h2 className="text-xl font-semibold text-blue-500">
                    Перевести деньги
                  </h2>
                );
              case "getOperations":
                return (
                  <h2 className="text-xl font-semibold text-blue-500">
                    Получить список операций
                  </h2>
                );
            }
          })()}

          <button onClick={() => props.onIsOpenChange("closeModal")}>
            <svg
              className="ease-in-out duration-300 hover:scale-95"
              width="22"
              height="22"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.85791 30.1421L30.1422 1.85785M30.1422 30.1421L1.85791 1.85785"
                stroke="black"
                strokeWidth="4"
              />
            </svg>
          </button>
        </div>

        <div className="modal-body">
          {(() => {
            switch (props.isVarianModal) {
              case "auth":
                return (
                  <AuthForm
                    handleLogin={handleLogin}
                    isVarianModal={props.isVarianModal}
                  />
                );
              case "createOperation":
                return (
                  <CreateOperationForm
                    isVarianModal={props.isVarianModal}
                    handleTransfer={handleOperationCreate}
                  />
                );

              case "getOperations":
                return (
                  <GetOperationsForm
                    handleAllTransfers={handleFindAllOperationByUserId}
                    isVarianModal={props.isVarianModal}
                  />
                );
            }
          })()}
        </div>
        <div className="modal-footer flex mt-5">
          <Button form={props.isVarianModal} type="submit">
            Отправить
          </Button>
        </div>
      </div>
    </div>
  );
};
