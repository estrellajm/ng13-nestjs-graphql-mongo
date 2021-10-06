import { Module } from '@nestjs/common';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './main/user/user.module';
import { CatsModule } from './main/cats/cats.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/users', {
      connectionName: 'users'
    }),
    MongooseModule.forRoot('mongodb://localhost:27017/cats', {
      connectionName: 'cats'
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
      debug: false
    }),
    UserModule,
    CatsModule
  ],
  providers: [AppService, AppResolver]
})
export class AppModule {}
