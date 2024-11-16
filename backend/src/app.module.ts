import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './shared/database/database.module';
// import { TourManagementModule } from './tour-management/tour.module';
// import { VisitorManagementModule } from './visitor-management/visitor.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
    // TourManagementModule,
    // VisitorManagementModule,
  ],
})
export class AppModule {}
