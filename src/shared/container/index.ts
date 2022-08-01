import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';

import IAppointmentsRepositories from '@modules/appointments/repositories/IAppointmentsRepositories';
import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';

import IUsersRepositories from "@modules/users/repositories/IUsersRepository";
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepositories from "@modules/users/repositories/IUserTokensRepository";
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

container.registerSingleton<IAppointmentsRepositories>(
  'AppointmentsRepository',
  AppointmentsRepository
);

container.registerSingleton<IUsersRepositories>(
  'UsersRepository',
  UsersRepository
);

container.registerSingleton<IUserTokensRepositories>(
  'UserTokensRepository',
  UserTokensRepository
);

