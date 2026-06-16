import 'reflect-metadata';
import { AppDataSource } from './data-source';

async function main() {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
  }
}

main();
