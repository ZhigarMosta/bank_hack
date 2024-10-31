import {
  clearOperationsData,
  OperationsData,
} from "@/store/list-operation-store";
import { apiInstance } from "../server/server";

export const findAllOperationByUserId = async (credentials: any) => {
  try {
    const response = await apiInstance.get(`/operation?userId=${credentials}`, {
      withCredentials: true,
    });
    clearOperationsData();
    OperationsData(response.data);
  } catch (error) {
    console.log("Ошибка при переводе:");
  }
};
