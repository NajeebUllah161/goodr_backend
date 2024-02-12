import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestBodyDTO {
  @ApiProperty({ required: true, default: 'najeeb' })
  username: string;

  @ApiProperty({ required: true, default: 'goodr-be', minLength: 6 })
  password: string;
}
