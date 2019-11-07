# NestJS Custom App Schematics

## Installation

```bash
git clone https://github.com/jamesblackjr/nestjs-app-schematics.git
cd nestjs-app-schematics
npm install && npm link
```

## Usage

Run the Nest CLI `generate` command with the `-c` flag to import the `nestjs-app-schematics` collections from your project directory.

```bash
nest generate -c nestjs-app-schematics graphql-module <model-name>
nest generate -c nestjs-app-schematics prisma-module <model-name>
nest generate -c nestjs-app-schematics rest-module <model-name>
```

**Note:** Replace `<model-name>` with the singular form of your entity/data model.
