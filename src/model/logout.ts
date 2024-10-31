import { apiInstance } from "../server/server";

export const logoutUser = async () => {
  try {
    const response = await apiInstance.post(
      "/auth/logout",
      {},
      { withCredentials: true }
    );
    console.log("Успешный выход:", response.data, response.status);
    return response.status;
  } catch (error) {
    console.log("Ошибка при выходе:", error.response?.data || error.message);
  }
};
