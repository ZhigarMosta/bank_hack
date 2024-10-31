"use client";
import React from "react";
import { Button } from "@/components/shared/button";
import { getProfile } from "@/model/user-info";
import { $UserInfo } from "@/store/usesr-store";
import { useUnit } from "effector-react";
import { getAllProfile } from "@/model/all-user-info";
import { $AllUserInfo } from "@/store/all-usesr-store";
import { useForm } from "react-hook-form";
import { OperationCreate } from "@/model/operation-create";
import { findAllOperationByUserId } from "@/model/operation-getAllByUserId";
import { $Operationsinfo } from "@/store/list-operation-store";

export default function Home() {
  const copyTextToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Текст успешно скопирован в буфер обмена!");
    } catch (err) {
      console.error("Ошибка:", err);
    }
  };

  const userInfo = useUnit($UserInfo);
  const userALlInfo = useUnit($AllUserInfo);
  const operations = useUnit($Operationsinfo);

  return (
    <div className="p-6 flex gap-4 justify-between">
      <div className="flex flex-col items-center gap-4">
        {!userInfo ? (
          <div className="flex flex-col items-center p-2">
            <p className="text-[#0f213e] font-semibold text-[22px]">
              Авторизуйтель ПЖЛСТ)))
            </p>
          </div>
        ) : (
          <div className="p-3 bg-[#558df7] max-w-[450px] flex flex-col rounded-xl border-solid border-2 border-[#89aaf9]">
            <div className="flex flex-col items-center">
              <p className="text-[#0f213e] font-semibold text-[18px]">
                Информация об аккаунте
              </p>
            </div>
            <div className="p-3">
              <p
                className="block z-20 relative text-[#0f213e] font-semibold text-[15px] cursor-pointer hover:text-white"
                onClick={() => copyTextToClipboard(userInfo.id)}
              >
                <span className="text-white">Id:</span> {userInfo.id}
              </p>
              <p className="text-[#0f213e] font-semibold text-[15px]">
                <span className="text-white">Почта:</span> {userInfo.email}
              </p>
              <p className="text-[#0f213e] font-semibold text-[15px]">
                <span className="text-white">Баланс:</span> {userInfo.balance}{" "}
                {userInfo.balance > 1000000 ? (
                  <span className="text-[#360d0f]">ну ты богат)</span>
                ) : (
                  <span className="text-[#360d0f]">фу нищий</span>
                )}
              </p>
            </div>
          </div>
        )}

        {!userALlInfo ? null : (
          <div className="p-3 bg-[#558df7] max-w-[450px] flex flex-col rounded-xl border-solid border-2 border-[#89aaf9]">
            <div className="flex flex-col items-center">
              <p className="text-[#0f213e] font-semibold text-[18px]">
                Информация о всех аккаунтах
              </p>
            </div>
            {userALlInfo.map((user) => {
              return (
                <div key={user.id} className="p-3">
                  <p
                    className="text-[#0f213e] block z-20 relative font-semibold text-[15px] cursor-pointer hover:text-white"
                    onClick={() => copyTextToClipboard(user.id)}
                  >
                    <span className="text-white">Id:</span> {user.id}
                  </p>
                  <p className="text-[#0f213e] font-semibold text-[15px]">
                    <span className="text-white">Почта:</span> {user.email}
                  </p>
                  <p className="text-[#0f213e] font-semibold text-[15px]">
                    <span className="text-white">Баланс:</span> {user.balance}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {!operations ? null : (
        <div className="overflow-y-auto h-96 bg-[#558df7] max-w-[450px] flex flex-col rounded-xl border-solid border-2 border-[#89aaf9]">
          {operations.map((user) => {
            return (
              <div key={user.id} className="p-5">
                <p className="text-[#0f213e] font-semibold text-[15px]">
                  <span className="text-white">Id:</span> {user.id}
                </p>
                <p
                  className="text-[#0f213e] font-semibold text-[15px] cursor-pointer hover:text-white"
                  onClick={() => copyTextToClipboard(user.from)}
                >
                  <span className="text-white">From:</span> {user.from}
                </p>
                <p
                  className="text-[#0f213e] font-semibold text-[15px] cursor-pointer hover:text-white"
                  onClick={() => copyTextToClipboard(user.to)}
                >
                  <span className="text-white">To:</span> {user.to}
                </p>
                <p className="text-[#0f213e] font-semibold text-[15px]">
                  <span className="text-white">Amount:</span> {user.amount}
                </p>
                <p className="text-[#0f213e] font-semibold text-[15px]">
                  <span className="text-white">OperateAt:</span>{" "}
                  {user.operateAt}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
