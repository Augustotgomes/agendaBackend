import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';


export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      // @ts-expect-error Verificação de arquivo existente ja esta sendo feita
      // no service
      avatarFilename: request.file.filename,
    });

    // @ts-expect-error deletando password do response
    delete user.password;

    return response.json(user);
  }

}
