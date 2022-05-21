import { Users } from "./Users";

interface ICreateUserDTO {
  name: string;
  userName: string;
  password: string;
  cep: string;
  numberAddress: string;
  cellphone: string;
  whatsApp: string;
}

interface IAuthenticateUserDTO{
  userName:string,
  password:string,
}

interface IUserTokenDTO{
  user:{
    userName:string,
    password:string,  
  },
  token: string,
}

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<Users>;
  findByUserName(userName: string): Promise<Users | null>;
  // findByEmail(email: string): User | undefined;
  // turnAdmin(user: User): User;
  list(): Promise<Users[]>;
  findById(IdParm: string): Promise<Users | null>;
}

export { IUsersRepository, ICreateUserDTO, IAuthenticateUserDTO, IUserTokenDTO };