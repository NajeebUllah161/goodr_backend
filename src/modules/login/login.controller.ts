import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginService } from './login.service';
import { LoginRequestBodyDTO } from './dto/login.dto';
import { Response } from 'express';

@ApiTags('Login API')
@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'successfully',
  })
  async login(@Body() body: LoginRequestBodyDTO, @Res() response: Response) {
    return await this.loginService.login(body, response);
  }
}
