import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEnum, IsInt, IsOptional, Max, Min } from 'class-validator';
import { Order } from '../../constants/order.constant';

export class SuperPageOptionsDto {
    @ApiPropertyOptional({ enum: Order, default: Order.ASC })
    @IsEnum(Order)
    @IsOptional()
    readonly order?: Order = Order.ASC;

    @ApiPropertyOptional({
        minimum: 1,
        default: 1,
    })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @IsOptional()
    readonly page?: number = 1;

    @ApiPropertyOptional({
        minimum: 1,
        maximum: 1000,
        default: 10,
    })
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(1000)
    @IsOptional()
    readonly take?: number = 10;

    get skip(): number {
        return (this.page - 1) * this.take;
    }
}