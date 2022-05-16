import { UsersRepository } from "../../../entity/Users/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export default(): CreateUserController => {

    const usersRepository = new UsersRepository();
    const createUserUseCase = new CreateUserUseCase(usersRepository);
    const createUserController = new CreateUserController(createUserUseCase);


    return createUserController;
}

