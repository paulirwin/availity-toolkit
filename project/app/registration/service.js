import app from '../module';

class RegistrationService {
  hello () {
    return 'hi';
  }
}

app.service('registrationService', RegistrationService);

export default app;
