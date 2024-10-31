import { apiInstance } from "../server/server";
import { $AllUserInfo, AllUserData } from "@/store/all-usesr-store";
export const getAllProfile = async () => {
  try {
    const response = await apiInstance.get("/user/resolvers", {
      withCredentials: true,
    });

    const profile = response.data;
    AllUserData(profile); // Обновляем состояние стора
    // console.log(profile);
    console.log(response.status); // Получаем текущее состояние стора
    return response.status;
  } catch (error) {
    console.log("Ошибка при получении профиля:", error);
  }
};
