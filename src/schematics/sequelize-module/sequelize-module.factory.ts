import { join, Path, strings } from '@angular-devkit/core';
import {
  apply,
  branchAndMerge,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';

import {
  DeclarationOptions,
  ModuleDeclarator,
} from '../../utils/module.declarator';

import { ModuleFinder } from '../../utils/module.finder';
import { Location, NameParser } from '../../utils/name.parser';
import { mergeSourceRoot } from '../../utils/source-root.helpers';

import { SequelizeModOptions } from './sequelize-module.schema';

import {
  lowerCase,
  upperCase
} from '../../utils/string-utils';

export function main(options: SequelizeModOptions): Rule {
  options = transform(options);
  return (tree: Tree, context: SchematicContext) => {
    return branchAndMerge(
      chain([
        mergeSourceRoot(options),
        addDeclarationToModule(options),
        mergeWith(generate(options)),
      ])
    )(tree, context);
  };
}

function transform(options: SequelizeModOptions): SequelizeModOptions {
  const target: SequelizeModOptions = Object.assign({}, options);

  target.metadata = 'imports';
  target.type = 'module';

  const location: Location = new NameParser().parse(target);
  target.name = strings.dasherize(location.name);
  target.path = join(strings.dasherize(location.path) as Path, `${target.name}s`);
  target.language = 'ts';
  return target;
}

function generate(options: SequelizeModOptions) {
  return (context: SchematicContext) =>
    apply(url(join('./files' as Path, options.language)), [
      template({
        ...strings,
        ...options,
        lowerCase,
        upperCase,
      }),
      move(options.path),
    ])(context);
}

function addDeclarationToModule(options: SequelizeModOptions): Rule {
  return (tree: Tree) => {
    if (options.skipImport !== undefined && options.skipImport) {
      return tree;
    }
    options.module = new ModuleFinder(tree).find({
      name: options.name,
      path: options.path as Path,
    });
    if (!options.module) {
      return tree;
    }
    const content = tree.read(options.module).toString();
    const declarator: ModuleDeclarator = new ModuleDeclarator();
    tree.overwrite(
      options.module,
      declarator.declare(content, options as DeclarationOptions),
    );
    return tree;
  };
}
