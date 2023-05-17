import type axios, { AxiosInstance } from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

class UserModel {
    
  private readonly api: AxiosInstance;


  constructor(api: AxiosInstance) {
    this.api = api;
  }

  async getUsers(): Promise<User[]> {
    const response = await this.api.get<User[]>("/users");
    return response.data;
  }
}
