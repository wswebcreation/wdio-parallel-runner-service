# Contributing
We try to achieve a 100% coverage on the Javascript code. Please make sure that each addition reaches this goal.

## Set Up Project
In order to set up this project and start contributing follow this step by step guide:

* Fork the project.
* Clone the project somewhere on your computer

    ```sh
    $ git clone git@github.com:<your-username>/wdio-parallel-runner-service.git
    ```

* If you need to update your fork you can do so following the steps [here](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork)

* Switch to Node v10 LTS (you should be able to use older/newer versions of Node but we recommend to use v10 LTS so all developers are on the same side)

* Setup project:

    ```sh
    $ npm install
    ```

* Work on code in watch mode:

    ```sh
    $ npm run watch
    ```

* Run Tests to ensure that everything is set up correctly

    ```sh
    $ npm test.coverage
    ```

    It should give you a passing result. Now you can move on to setup your development environment and start working on some code.

## Link changes to your current project

When modifying this module you can link those changes to your current project to test the changes that you made.

From this project do

```
$ npm link
```

Then in your current project you can link your changes from this package to your current project.

```
$ cd your-project
$ npm link wdio-parallel-runner-service
```

