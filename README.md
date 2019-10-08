# basic angular project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development

- prettier 本项目采用 prettier 做代码格式化
- tslint
- angular-cli 本项目所有文件请严格按照 angular style guide 规范，建议用 angular-cli 生成
- 建议在编辑器或者 webstorm 中集成 tslint 和 prettier

## Technology stack

- [Angular](https://angular.io/)
- [Apollo](https://www.apollographql.com/)
- [CDK](https://material.angular.io/cdk)
- [Jest](http://jestjs.io/)

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `yarn test` to execute the unit tests. It was started with watch mode and will re-execute the change file when there are changes.

## SVG to icon font

 代码中的 icon 以 icon font 的形式引入，svg 文件在目录`src/assets/icons`下，当需要加入新的 icon 时，把 svg 文件放入该目录下，运行`yarn icon-font-generator`，会生成新的 icon font 存在 `src/assets/icon-font` 的字体文件里，字体文件在`src/assets/icon-font/icons.css`中引入。
icon 的使用：`<i class="icon-close"></i>`。
