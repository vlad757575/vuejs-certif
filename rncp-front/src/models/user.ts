import http from "./http-common";

interface UserModel {
  id: number;
  name: string;
  email: string;
}

class UserModel {
  
    getAll(): Promise<any> {
      return http.get("/users");
    }
  
    get(id: any): Promise<any> {
      return http.get(`/user/${id}`);
    }
}

export default new UserModel();