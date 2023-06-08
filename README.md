This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

1. Clone the repository to your local machine:

```bash
git clone https://github.com/nduytu87/react-test-app.git
```

2. Change into the project directory:

```bash
cd react-test-app
```

3. Install the dependencies:
   First, run the development server:

```bash
npm install
# or
yarn install
```

### Running the Development Server

1. Create a file `.env.local` with the env variables listed in the `.env.example`.
2. Update the variables to an appropriate environment.
3. To start the development server and run the application locally, use the following command:

```bash
npm run dev
# or
yarn dev
```

The application will be accessible at [http://localhost:3000](http://localhost:3000).

### Building for Production

To build the application for production, use the following command:

```bash
npm run build
# or
yarn build
```

This will create an optimized build of the application in the `out` directory.

### Running Tests

To run the tests, use the following command:

```bash
npm run test
# or
yarn test
```

### Deployment

You can deploy the application to a hosting provider of your choice. Make sure to build the application before deployment.

### Project Structure

The project follows the following coding convention for organizing files and folders:

- `common` folder contains global constants or utilities that can be shared across the application.
- `components` folder contains reusable components that can be shared across the application. These components should not have any specific business logic and should be designed to be generic and reusable.
- `features` folder contains the business features of the application.
  - Each feature should have its own folder under `features`.
  - `{feature}/components` folder contains components specific to the relevant feature.
  - `{feature}/service` folder contains APIs related to the feature and configured using [RTK Query](https://redux-toolkit.js.org/rtk-query/overview). It can also include custom Redux state management or custom selector hooks.
  - `{feature}/types` folder contains TypeScript types defined for the relevant feature.
- `pages` folder defines all the pages of the application. These pages should not contain heavy business logic but rather act as containers that combine components from different features.
- `public` folder contains public assets of the application.
- `store` folder contains Redux store configuration.
- `styles` folder contains global CSS styles used throughout the application.
- `test` folder contains testing utilities and configurations.
