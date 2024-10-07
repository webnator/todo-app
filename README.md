# TODO app
This is a multi-user task tracking app, where users can create and share collaborative to-do lists, and keep track of the status of tasks, and changes made to it

## How to use it?
Simplest way, just run `docker-compose up` in the root folder and access `http://localhost:3000` to start using the app in your browser.

I've seen sometimes a small issue while initializing the database, so, if you get errors the first time, terminate the process (ctrl+c) and launch the command again. That should do it.

### Not so simple way
- In the root folder run `docker-compose up -d postgres` to start the database, or if you have your own server, update the `.env` file inside the server folder to point to your database
- Go into the `/server` folder and do `npm i && npm run dev` to start the server
- In another terminal or tab go into the `/base-front` folder and do `npm i && npm run dev` to start the frontend
- Access `http://localhost:3000` to start using the app in your browser

## How to run the unit tests
- For the front, go into the `/base-front` folder and execute `npm i && npm run test`
- For the back, go into the `/server` folder and execute `npm i && npm run test`

## A bit on architecture
- The project uses docker-compose to build and launch all containers, ensuring that it works correctly without relying on the operating system
- The project uses a basic postgresql database with no changes in configuration from the ones directly offered by the docker image
- Both the front and back follow a layered architecture, that separates concerns and allows the app to be easily tested and extended as needed.
- For the inversion of control, both projects use the `awilix` library to handle dependency injection

### Back
- Is a simple nodejs+express project structured in layers, and using a swagger/express integration to define the documentation for the API. I've found that taking this outter-inner approach docs are in sync in an effortless way
- Everything is part of an awilix DI container, that allows us to "cut" wherever we need in testing to do proper mocks.
- The platform is structured in 4 layers 
  - Domain: Where the entity definition for the app is placed. This is the most inner layer where the most "inmutable" business logic is placed
  - Services: Things that are part of the core logic of the application and are less likely to change and also serve as shared logic between usecases
  - Usecases: More case-specific business logic, that serves a specific usecase, and it's more likely to change due to business decisions without having a big blast radius in other usecases
  - Infra: Tech-specific connectors and adapters that support the execution of the application, but that are irrelevant to the actual business logic and implementation of usecases.
- Thanks to the swagger express library, a swagger docs for our backend can be generated with a simple command
- Security is handled in a very naive way using JWT tokens, without storing them in the DB, which makes it hard to revoke them in case of being compromised
- There are many tests missing due to time constraints, my idea was just to represent how tests would be made in this backend, but not to reach a full test coverage

### Front
- The app was built in React.js using next.js. I'm aware that Svelte would be preferred for this, but because of time constraints, it made more sense to build it in a more familiar language.
- The app uses React contexts to inject dependencies in components, which actually make testing really easy, since we can pass any container we need with the required mocks.
- Again, there are many tests missing due to time constraints, my idea was just to represent how tests would be made in this frontend structure, but not to reach a full test coverage.
- Here we see the same layers as in the backend, with the difference that "views" actually represent a mixture of usecases and display logic. I believe this makes sense due to the very nature of a frontend application where business logic and display logic are usually very interconected.
- The electron app is made to point to an existing running server.
- Storage and state is handled using react-query to cache repository providers, and provide a simple way to keep application data, and handle its state in components.
- There are components like the `TaskStatusIcon` that might benefit from being "smarter", in order to avoid prop drilling and saturating higher components.
- Views like list-main might benefit from being split into several "smart" components that are capable of handling its own logic, and have `list-main` just be a container for those components (This might help with scalability)

