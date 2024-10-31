import { loginUser } from "@/model/login";

const handleLogin = async (data: any, onIsOpenChange: () => void) => {
  try {
    const response = await loginUser(data);
    if (response == 200) {
      handleProfile();
      handleAllProfile();
      onIsOpenChange("closeModal");
    }
  } catch (error) {
    console.log("Login failed:", error);
  }
};
