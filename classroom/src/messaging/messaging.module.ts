import { Module } from '@nestjs/common';

import { PurchasesController } from './controllers/purchases.controller';

import { CoursesService } from '../http/services/courses.service';
import { EnrollmentsService } from '../http/services/enrollments.service';
import { StudentsService } from '../http/services/students.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [StudentsService, EnrollmentsService, CoursesService],
  controllers: [PurchasesController],
})
export class MessagingModule {}
