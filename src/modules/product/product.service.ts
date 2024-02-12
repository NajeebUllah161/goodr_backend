import { HttpStatus, Injectable } from '@nestjs/common';
import { Response } from 'express';
import { DUMMY_PRODUCTS } from './enum/product.enum';
import { ItemCreateDTO } from './dto/item-create.dto';
import { ItemUpdateDTO } from './dto/item-update.dto';

@Injectable()
export class ProductService {
  async itemsList(response: Response) {
    return DUMMY_PRODUCTS
      ? response.status(HttpStatus.ACCEPTED).send({
          error: false,
          message: 'success',
          data: DUMMY_PRODUCTS,
        })
      : response.status(HttpStatus.NOT_FOUND).send({
          error: true,
          message: 'No data found!',
        });
  }

  async itemDetails(id: number, response: Response) {
    const item = DUMMY_PRODUCTS.find((item) => {
      return item.id == id;
    });
    return item
      ? response.status(HttpStatus.ACCEPTED).send({
          error: false,
          message: 'success',
          data: item,
        })
      : response.status(HttpStatus.NOT_FOUND).send({
          error: true,
          message: 'No data found!',
        });
  }

  async itemCreate(body: ItemCreateDTO, response: Response) {
    const item = {
      id: DUMMY_PRODUCTS.length + 1,
      ...body,
    };
    DUMMY_PRODUCTS.push(item);
    return item
      ? response.status(HttpStatus.ACCEPTED).send({
          error: false,
          message: 'success',
          data: item,
        })
      : response.status(HttpStatus.NOT_FOUND).send({
          error: true,
          message: 'No data found!',
        });
  }

  async itemUpdate(id: number, body: ItemUpdateDTO, response: Response) {
    const index = DUMMY_PRODUCTS.findIndex((item) => {
      return item.id == id;
    });
    const item = { id, ...body };
    DUMMY_PRODUCTS[index] = item;

    return item
      ? response.status(HttpStatus.ACCEPTED).send({
          error: false,
          message: 'success',
          data: item,
        })
      : response.status(HttpStatus.NOT_FOUND).send({
          error: true,
          message: 'No data found!',
        });
  }

  async itemDelete(id: number, response: Response) {
    const index = DUMMY_PRODUCTS.findIndex((item) => {
      return item.id == id;
    });
    const status = DUMMY_PRODUCTS.splice(index, 1);
    return status
      ? response.status(HttpStatus.ACCEPTED).send({
          error: false,
          message: 'success',
          data: status,
        })
      : response.status(HttpStatus.NOT_FOUND).send({
          error: true,
          message: 'No data found!',
        });
  }
}
