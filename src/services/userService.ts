import { toast } from "react-toastify";
import { ProfileDetail, TSendEmailReq } from "./userServiceType";
class UserService {
  sendEmail = async (payload: TSendEmailReq) => {
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) {
        if (data?.error) toast.error(data.error);
        else throw new Error("Network response was not ok");
      }

      return data;
    } catch (error) {
      throw error;
    }
  };

  downloadRepo = async (payload: ProfileDetail) => {
    try {
      const response = await fetch("/api/repo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return await response.blob();
    } catch (error) {
      throw error;
    }
  };
}

export const userService = new UserService();
