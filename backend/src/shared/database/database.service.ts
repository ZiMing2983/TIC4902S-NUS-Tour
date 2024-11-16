import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DatabaseService {
  constructor(private readonly dataSource: DataSource) {}

  async testConnection() {
    try {
      await this.dataSource.initialize();
      console.log('Database connection established successfully.');
    } catch (error) {
      console.error('Database connection failed:', error);
    }
  }
}
