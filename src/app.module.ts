import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import path from 'path'
@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),
  GraphQLModule.forRoot<ApolloDriverConfig>({
    // See .\node_modules\@nestjs\graphql\dist\interfaces\gql-module-options.interface.d.ts for options
    driver: ApolloDriver,
    typePaths: ['./**/*.graphql'],
    definitions: {
      path: path.join(process.cwd(), 'src/graphql.ts'),
      
    },

  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

