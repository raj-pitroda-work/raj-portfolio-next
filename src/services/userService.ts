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

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
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
