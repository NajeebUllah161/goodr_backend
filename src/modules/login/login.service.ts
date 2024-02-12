import { HttpStatus, Injectable } from '@nestjs/common';
import { LoginRequestBodyDTO } from './dto/login.dto';
import { Response } from 'express';
import { DUMMY_USERS } from './enum/user.enum';
import { DUMMY_ROLE } from './enum/role.enum';

@Injectable()
export class LoginService {
  async login(body: LoginRequestBodyDTO, response: Response) {
    const user = DUMMY_USERS.find((user) => {
      return user.username === body.username && user.password === body.password;
    });

    const role =
      user &&
      DUMMY_ROLE.find((role) => {
        return role.roleId === user.roleId;
      });

    return user && role
      ? response.status(HttpStatus.ACCEPTED).send({
          error: false,
          message: 'success',
          data: {
            username: user.username,
            role: role.roleName,
            permissions: role.permissions,
          },
        })
      : response.status(HttpStatus.NOT_FOUND).send({
          error: true,
          message: 'user not found or incorrect credentials',
        });
  }
}
