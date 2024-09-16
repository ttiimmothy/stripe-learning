import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
  documents: "src/**/*.ts",
  generates: {
    "src/generated/graphql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        fragmentMasking: false,
      },
    },
  },
};

export default config;