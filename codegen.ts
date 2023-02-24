import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    './app/features/providers/github/graphql/types.ts': {
      schema: 'app/features/providers/github/graphql/schema.graphql',
      documents: './app/features/providers/github/graphql/queries/*.graphql',
      plugins: ['typescript', 'typescript-operations']
    }
  }
}

export default config
