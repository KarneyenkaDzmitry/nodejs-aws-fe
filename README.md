This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:  
You can use NPM instead of YARN (Up to you)

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Others (related to Serverless framework and its plugins)

| "Script Name" : "CLI commands"                                                                          | Description |
| ------------------------------------------------------------------------------------------------------- | ----------- |
| `"deploy:s3": "serverless client deploy --no-config-change --no-policy-change --no-cors-change"`        | deploy      |
| `"build:deploy": "npm run build && npm run deploy:s3"`                                                  |             |
| `"client:deploy": "sls client deploy --no-config-change --no-policy-change --no-cors-change"`           |             |
| `"client:deploy:nc": "npm run client:deploy -- --no-confirm"`                                           |             |
| `"client:build:deploy": "npm run build && npm run client:deploy"`                                       |             |
| `"client:build:deploy:nc": "npm run build && npm run client:deploy:nc"`                                 |             |
| `"cloudfront:setup": "sls deploy"`                                                                      |             |
| `"cloudfront:domainInfo": "sls domainInfo"`                                                             |             |
| `"cloudfront:invalidateCache": "sls invalidateCloudFrontCache"`                                         |             |
| `"cloudfront:build:deploy": "npm run client:build:deploy && npm run cloudfront:invalidateCache"`        |             |
| `"cloudfront:build:deploy:nc": "npm run client:build:deploy:nc && npm run cloudfront:invalidateCache"`  |             |
| `"cloudfront:update:build:deploy": "npm run cloudfront:setup && npm run cloudfront:build:deploy"`       |             |
| `"cloudfront:update:build:deploy:nc": "npm run cloudfront:setup && npm run cloudfront:build:deploy:nc"` |             |

## Notes

| Instal Pluggin - Description                                             | Command                                                                                                                                                       |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Download ain install the aws-node-single-page-app-via-cloudfront pluggin | `serverless install -u https://github.com/serverless/examples/tree/master/aws-node-single-page-app-via-cloudfront -n aws-node-single-page-app-via-cloudfront` |

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Known Issues

1. `Type Error ---------------------------------------------`</br>
   `TypeError: Cannot read property 'toString' of null` `at ServerlessPlugin.runAwsCommand (C:\Users\Dzmitry_Karneyenka\OneDrive - EPAM\BackUp\AWS and Nodejs\nodejs-aws-fe\serverless-single-page-app-plugin\index.js:48:34)` `at ServerlessPlugin.invalidateCache (C:\Users\Dzmitry_Karneyenka\OneDrive - EPAM\BackUp\AWS and Nodejs\nodejs-aws-fe\serverless-single-page-app-plugin\index.js:135:30)`</br>.
   `For debugging logs, run again after setting the "SLS_DEBUG=*" environment variable.` </br>
   Solutions: In serverless-single-page-app-plugin/index.js add shell:true option when spawnSync.</br>
   from: `const result = spawnSync(command, args);`</br>
   to: `const result = spawnSync(command, args, {shell: true});`</br>
   [Nodejs Documentation](https://nodejs.org/docs/latest-v12.x/api/child_process.html#child_process_child_process_spawnsync_command_args_options);
2. More
