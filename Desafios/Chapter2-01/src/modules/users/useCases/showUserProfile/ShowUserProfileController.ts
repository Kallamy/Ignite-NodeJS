import { Request, Response } from "express";
import { UsersRepository } from "modules/users/repositories/implementations/UsersRepository";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;
    
    const user = this.showUserProfileUseCase.execute({user_id: String(user_id)});
    
    return response.json(user);
  }
}

export { ShowUserProfileController };
