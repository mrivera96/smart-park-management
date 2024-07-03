import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async register(createUserDto: any) {
    // Lógica para registrar un nuevo usuario
  }

  async login(loginUserDto: any) {
    // Lógica para autenticar un usuario
  }
}
