"use client";
import { Button } from "@/components/shared/button";
import { getAllProfile } from "@/model/all-user-info";
import { logoutUser } from "@/model/logout";
import { getProfile } from "@/model/user-info";
import { clearAllUserData } from "@/store/all-usesr-store";
import { clearOperationsData } from "@/store/list-operation-store";
import { clearUserData } from "@/store/usesr-store";
import { useEffect, useState } from "react";
import { Modal } from "../modal/modal";
export const Header = () => {
  const [isAuthorize, SetIsAuthorize] = useState(false);
  const [isVarianModal, setIsVarianModal] = useState<
    "auth" | "createOperation" | "getOperations" | "closeModal"
  >("closeModal");
  const handleProfile = async () => {
    try {
      const response = await getProfile();
      console.log("Logout successful:", response);
      if (response == 200) {
        SetIsAuthorize(true);
      }
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await logoutUser();
      if (response == 200) {
        clearUserData();
        clearAllUserData();
        clearOperationsData();
        SetIsAuthorize(false);
      }
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };
  const handleAllProfile = async () => {
    try {
      const response = await getAllProfile();
      console.log("Logout successful:", response);
      if (response == 200) {
        SetIsAuthorize(true);
      }
    } catch (error) {
      console.log("Logout failed:", error);
    }
  };

  useEffect(() => {
    try {
      handleProfile();
      handleAllProfile();
    } catch {
      console.log("вы не зарег");
    }
  }, []);
  return (
    <header className="flex items-center justify-center w-full h-36 px-5 bg-blue-500 shadow-xl">
      <div className="header-container flex items-center justify-between max-w-7xl w-full h-fit">
        <div className="flex gap-4 basis-1/3 text-white font-bold text-[30px]">
          NoSkamBank <div className="square">Chestno</div>
        </div>
        {isAuthorize ? (
          <div className="flex gap-5">
            <div className="flex flex-col gap-2">
              <Button onClick={() => setIsVarianModal("createOperation")}>
                Перевести деньги
              </Button>
              <Button onClick={() => setIsVarianModal("getOperations")}>
                Получить список операций
              </Button>
            </div>
            <Button onClick={handleLogout}>Выход</Button>
          </div>
        ) : (
          <Button onClick={() => setIsVarianModal("auth")}>
            Авторизоваться
          </Button>
        )}
      </div>
      <Modal
        isVarianModal={isVarianModal}
        onIsOpenChange={setIsVarianModal}
        SetIsAuthorize={SetIsAuthorize}
      />
    </header>
  );
};
