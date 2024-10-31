import { apiInstance } from "../server/server";

export const loginUser = async (credentials: any) => {
  try {
    const response = await apiInstance.post("/auth/login", credentials, {
      withCredentials: true,
    });
    console.log("Успешный вход:", response.data);
    return response.status;
  } catch (error) {
    console.log("Ошибка при входе:", error.response?.data || error.message);
  }
};
