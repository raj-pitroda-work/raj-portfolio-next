import { TSendEmailReq } from "./userServiceType";

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
}

export const userService = new UserService();
