import { apiInstance } from "../server/server";

export const OperationCreate = async (credentials: any) => {
  try {
    const response = await apiInstance.post("/operation", credentials, {
      withCredentials: true,
    });
    console.log("Перевод оформлен:", response.data);
  } catch (error) {
    console.log("Ошибка при переводе:");
  }
};
