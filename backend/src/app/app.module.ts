import { Module } from '@nestjs/common';
import { DeliveriesModule } from '../deliveries/deliveries.module';

@Module({
  imports: [DeliveriesModule],
})
export class AppModule {}
