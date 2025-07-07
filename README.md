# Astro Angular Standalone Starter Kit

This is an example Astro project using Angular 17+ and [standalone components](https://angular.io/guide/standalone-components).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


git hub
`cd your-angular-app`
`git init`
`git remote add origin https://github.com/yourusername/your-repo.git`
`git add .`
`git commit -m "Initial commit"`
`git push -u origin master`

Deploy Your Angular App to GitHub Pages
`npm install -g angular-cli-ghpages`

Build Your App for Production
`ng build --configuration production --base-href "https://yourusername.github.io/your-repo/"`

It will output static files in the dist/your-app-name/ directory.

Deploy to GitHub Pages
`npx angular-cli-ghpages --dir=dist/your-app-name`

View Your App
`https://yourusername.github.io/your-repo/`
