import AppError from '@shared/errors/AppErrors';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepositories = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepositories
    );

    const appointment = await createAppointment.execute({
      date: new Date(),
      provider_id: '123456',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456');
  });

  it('should not be able to create a new appointment on the same time', async () => {
    const fakeAppointmentsRepositories = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepositories
    );

    const appointmentDate = new Date(2022, 5, 8, 16);

    await createAppointment.execute({
      date: appointmentDate,
      provider_id: '123456',
    });

    expect(createAppointment.execute({
      date: appointmentDate,
      provider_id: '123456',
    })).rejects.toBeInstanceOf(AppError);

  });
});
