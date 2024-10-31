import { apiInstance } from "../server/server";
import { $UserInfo, UserData } from "@/store/usesr-store";
export const getProfile = async () => {
  try {
    const response = await apiInstance.get("/user/profile", {
      withCredentials: true,
    });

    const profile = response.data;
    UserData(profile); // Обновляем состояние стора
    // console.log(profile);
    console.log(response.status); // Получаем текущее состояние стора
    return response.status;
  } catch (error) {
    console.log("Ошибка при получении профиля:", error);
  }
};
