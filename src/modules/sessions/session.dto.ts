import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEnum } from 'class-validator';
import { ShortTitle, Status } from '../../shares/index';

export class GetSessionDto {
  @IsOptional()
  @IsEnum(ShortTitle, {
    message: `short_title Invalid property value ${Object.values(
      ShortTitle,
    ).join(', ')}`,
    each: true,
  })
  @ApiProperty({
    type: String,
    description: 'short_title',
    required: false,
  })
  short_title?: string;

  @IsOptional()
  @IsEnum(Status, {
    message: `status Invalid property value ${Object.values(Status).join(
      ', ',
    )}`,
    each: true,
  })
  @ApiProperty({
    type: String,
    description: 'status',
    required: false,
  })
  status?: string;

  @IsOptional()
  @ApiProperty({
    type: String,
    description: 'page',
    required: false,
  })
  page?: number;

  @ApiProperty({
    type: String,
    description: 'limit',
    required: false,
  })
  @IsOptional()
  limit?: number;
}

interface Program {
  id: string;
  display_title: string;
  thumbnail_img_url: string;
  short_title: string;
}

export class Sessions {
  id: string;
  name: string;
  status: Status;
  start_date: Date;
  end_date: Date;
  program: Program[];
}

export class ResultGetSession {
  currentPage: number;
  perPage: number;
  total: number;
  totalPages: number;
  data: Sessions[];
}
