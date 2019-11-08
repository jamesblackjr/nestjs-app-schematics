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

Generate a new NestJS application:

```bash
npm i -g @nestjs/cli
nest new <project-name>
cd <project-name>
```

TODO: Generate `config` folder contents and TypeORM config file. Coming soon.

Generate the Authentication module (TODO: Fix pluralization of module import.):

```bash
nest generate -c nestjs-app-schematics auth-module [path]
```

Install Dependencies with NPM:

```bash
npm install --save @nestjs/typeorm @nestjs/passport @nestjs/jwt typeorm pg bcryptjs config passport passport-jwt class-validator class-transformer
```

Install Dependencies with Yarn:

```bash
yarn add @nestjs/typeorm @nestjs/passport @nestjs/jwt typeorm pg bcryptjs config passport passport-jwt class-validator class-transformer
```

Generate a TypeORM module:

```bash
nest generate -c nestjs-app-schematics typeorm-module <model-name> [path]
```

TODO: Wire up relationships between entities. (i.e. `Model` to `User`)

Start your application in `DEVELOPMENT` mode:

```bash
npm run start:dev
yarn start:dev
```

Other Generators (NOT Compatibile with Auth Module Out-of-the-Box):

```bash
nest generate -c nestjs-app-schematics graphql-module <model-name> [path]
nest generate -c nestjs-app-schematics mongoose-module <model-name> [path]
nest generate -c nestjs-app-schematics prisma-module <model-name> [path]
nest generate -c nestjs-app-schematics sequelize-module <model-name> [path]
```

**Note:** Replace `<model-name>` with the singular form of your entity/data model name.

Credits:

- Some `schematics` were ported from [https://github.com/ashinzekene/generator-nestjs-app](https://github.com/ashinzekene/generator-nestjs-app).
- Also, the `utils` folder was cloned from [https://github.com/nestjs/schematics](https://github.com/nestjs/schematics).
