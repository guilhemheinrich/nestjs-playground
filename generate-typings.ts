import { GraphQLDefinitionsFactory, GraphQLFederationDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';
import * as dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, './config/graphql.env') });
// console.log(process.env)
// console.log( join(__dirname, './config/graphql.env'))
console.log(process.env.SCHEMAS_FOLDER)
console.log(process.env.GENERATED_FOLDER)
console.log(join(__dirname, process.env.SCHEMAS_FOLDER!, '**/*.gql'))
// console.log(join(__dirname, './graphql_schemas/**/*.gql'))
// console.log(join(<string>process.env.SCHEMAS_FOLDER, '/**/*.gql'))

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: [join(__dirname, process.env.SCHEMAS_FOLDER!, '**/*.gql')],
  path: join(__dirname, process.env.GENERATED_FOLDER!, 'typings.ts'),
  outputAs: 'class',
  emitTypenameField: true,
  enumsAsTypes: true
});