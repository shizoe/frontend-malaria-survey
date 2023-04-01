import {Role} from "./role.enum"

export class User{
  id: number | undefined;
  firstname: string="";
  lastname: string="";
  username: string="";
  password: string="";
  token: string="";
  role: Role = Role.USER;
}
