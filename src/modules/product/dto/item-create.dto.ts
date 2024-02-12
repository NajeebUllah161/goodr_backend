import { ApiProperty } from '@nestjs/swagger';

export class ItemCreateDTO {
  @ApiProperty({ required: true, maxLength: 20 })
  name: string;

  @ApiProperty({ required: true, default: 'goodr-be', maxLength: 75 })
  description: string;

  @ApiProperty({ required: true, default: 3500 })
  price: number;

  @ApiProperty({ required: true, default: 'USD' })
  currency: string;

  @ApiProperty({ required: true })
  url: string;
}
