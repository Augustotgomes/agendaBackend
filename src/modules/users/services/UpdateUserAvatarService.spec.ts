import AppError from '@shared/errors/AppErrors';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import FakeStorageProvider from '@shared/container/providers/StorageProviders/fakes/FakeStorageProvider';
import UpdateUseAvatarService from './UpdateUserAvatarService';

describe('UpdateUseAvatar', () => {
  it('should be able to create a new user', async () => {
    const fakeUserRepositories = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const updateUserAvatar = new UpdateUseAvatarService(
      fakeUserRepositories,
      fakeStorageProvider
    );

    const user = await fakeUserRepositories.create({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456'
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg'
    });

    expect(user.avatar).toBe('avatar.jpg');

  });

  it('should not be able to update avatar from non exiting users', async () => {
    const fakeUserRepositories = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();
    const updateUserAvatar = new UpdateUseAvatarService(
      fakeUserRepositories,
      fakeStorageProvider
    );


    expect(
      updateUserAvatar.execute({
        user_id: 'sem-user',
        avatarFilename: 'avatar.jpg'
      }),
    ).rejects.toBeInstanceOf(AppError);

  });

  it('should delete old avatar when updating new one', async () => {
    const fakeUserRepositories = new FakeUsersRepository();
    const fakeStorageProvider = new FakeStorageProvider();

    const deleteFile = jest.spyOn(fakeStorageProvider, 'deleteFile');

    const updateUserAvatar = new UpdateUseAvatarService(
      fakeUserRepositories,
      fakeStorageProvider
    );

    const user = await fakeUserRepositories.create({
      name: 'John Doe',
      email: 'johndoe@test.com',
      password: '123456'
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar.jpg'
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFilename: 'avatar2.jpg'
    });

    expect(deleteFile).toBeCalledWith('avatar.jpg');
    expect(user.avatar).toBe('avatar2.jpg');



  });

});
