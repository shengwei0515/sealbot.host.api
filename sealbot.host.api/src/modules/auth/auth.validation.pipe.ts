import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException, HttpException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';



@Injectable()
export class AuthParameterValidationPipe implements PipeTransform<any>{
    async transform(value: any, metadata: ArgumentMetadata) {
        const {metatype} = metadata;

        // skip when metatype is js default type
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }

        // convert plain js object object to class
        const object = plainToClass(metatype, value);

        const errors = await validate(object);
        if (errors.length >0){
            console.log('validate error', errors);
            throw new BadRequestException('Auth Parameter Validation Failed');
        }
        return value
    }

    private toValidate(metatype: Function): boolean {
        const types: Function[] = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
}