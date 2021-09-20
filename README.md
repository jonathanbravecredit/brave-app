# BraveApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

## Init

Different environments have different backend AWS accounts and are enabled through different environment files in Angular. In order to ensure you are invoking the correct backend while serving the front end, make sure to use the correct script.

Run `npm run start` for the default backend (in this case 'dev')
Run `npm run startDev` for the dev backend
Run `npm run startQA` for the QA backend

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Similar to init, ensure you are invoking the correct backend while building the app. Run the following scripts

Run `npm run build` for the dev backend
Run `npm run buildQA` for the QA backend

## Deployment

Our application is managed through our Amplify CI/CD pipeline. All merges to our Dev | QA | Prod branches trigger deployments to those environments. Simply create a topic branch, push your changes to the repo, and create a pull request. Once approved your changes will be deployed automatically.

**EXCEPTION** Currently there is a bug in the StorybookJS/Chromatic deployment that requires that we deploy these manually. The steps to deploy are:

1. Run `npm run build-storybook`
2. Run `npm run chromatic`
3. Push changes up to repo under topic branch
4. Create pull request to merge topic branch in to **dev** branch

Once the changes are reviewed in Chromatic under the topic branch the pull request will be reviewed and approved.

## Github

Use the following guidance to name your topic branches and initiate pull requests.

- Name your TBs using the following conventions: `SPRINTXX-TI100-72`, where segment one is the sprint and segment two is the topic in Jira
- Provide a brief description of the feature.
- Provide a list of the components | views | layouts created.

No screenshots are needed as visuals willbe inspected in Chromatic.

## Storybook

Run `npm run storybook` for a local version of storybookJS. Navigate to `http://localhost:6006`. The app will automatically reload if you change any of the `stories.ts` files.

To create stories, place a `component-name.stories.ts` file in the component | view | layout directory.

To deploy your stories to Chromatic, run:

1. `npm run build-storybook`
2. `npm run chromatic`

For more information see [storybookJS](https://storybook.js.org).

## AWS Amplify

Amplify is a framework to enable front end engineers to easily build robust scalable applications.

While not required to work in the repository, it may be helpful to download the amplify CLI.

For more information see [Amplify](https://docs.amplify.aws/start)

**IMPORTANT**
Most likely you will not have to push changes to the Amplify backend using the CLI, but if you need to, make sure you are in the **dev** environment in Amplify before pushing.

- Run `amplify env list` to check current branch
- Run `amplify env checkout branchname` to switch branches

## Software architecture

To see current architectural diagrams visit [diagrams](https://drive.google.com/drive/u/0/folders/1nE9JuE9Brm66pKi3B1H9yNhjxKeIfSHI)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
