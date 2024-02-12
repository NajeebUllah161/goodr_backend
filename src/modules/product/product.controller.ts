import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { ProductService } from './product.service';
import { ItemCreateDTO } from './dto/item-create.dto';
import { ItemUpdateDTO } from './dto/item-update.dto';

@ApiTags('Product API')
@Controller('items')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'successfully',
  })
  async itemsList(@Res() response: Response) {
    return await this.productService.itemsList(response);
  }

  @Get(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'successfully',
  })
  async itemDetails(@Param('id') id: number, @Res() response: Response) {
    return await this.productService.itemDetails(id, response);
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'successfully',
  })
  async itemCreate(@Body() body: ItemCreateDTO, @Res() response: Response) {
    return await this.productService.itemCreate(body, response);
  }

  @Put(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'successfully',
  })
  async itemUpdate(
    @Param('id') id: number,
    @Body() body: ItemUpdateDTO,
    @Res() response: Response,
  ) {
    return await this.productService.itemUpdate(id, body, response);
  }

  @Delete(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'successfully',
  })
  async itemDelete(@Param('id') id: number, @Res() response: Response) {
    return await this.productService.itemDelete(id, response);
  }
}
