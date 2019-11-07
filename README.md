# NestJS Custom App Schematics

## Installation

```bash
npm install -g nestjs-app-schematics
```

Or, install from git:

```bash
git clone https://github.com/jamesblackjr/nestjs-app-schematics.git
cd nestjs-app-schematics
npm install && npm link
```

## Usage

Run the Nest CLI `generate` command with the `-c` flag to import the `nestjs-app-schematics` collections from your project directory.

```bash
nest generate -c nestjs-app-schematics graphql-module <model-name> [path]
nest generate -c nestjs-app-schematics mongoose-module <model-name> [path]
nest generate -c nestjs-app-schematics prisma-module <model-name> [path]
nest generate -c nestjs-app-schematics sequelize-module <model-name> [path]
nest generate -c nestjs-app-schematics typeorm-module <model-name> [path]
```

**Note:** Replace `<model-name>` with the singular form of your entity/data model name.

Credits:

- Some `schematics` were ported from [https://github.com/ashinzekene/generator-nestjs-app](https://github.com/ashinzekene/generator-nestjs-app).
- Also, the `utils` folder was cloned from [https://github.com/nestjs/schematics](https://github.com/nestjs/schematics).
