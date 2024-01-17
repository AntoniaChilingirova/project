
import { Product } from 'src/products/products.entity';
import { DataSource } from 'typeorm';

export const databaseProviders = [

    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'sqlite' ,
                database: 'test.sql',
                entities: [__dirname + '/../**/*.entity{.ts,.js}',Product],
                synchronize: true,
                logging: ['query'],
            });

            return dataSource.initialize();
        },
    },
];



