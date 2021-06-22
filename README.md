# to-do-list-project

### Summary
This project consists of a list of tasks realtime shared between several users. There will be serveral roles that allow to manage each list in a different ways (still not defined).
* * *
<br/>

# ***Architecture***
Frontend/Backend => Next.js (https://nextjs.org/)
Database => Dgraph (https://dgraph.io/)
<br/>
<br/>
<br/>

# ***Frontend/Backend Deployment***
## ***Technologies***  
Node version == v14.17.0   
NPM version => v7.16.0

### ***Running locally in development mode***  
* * *
To get started, just clone the repository and run npm install && npm run dev:
```
git clone https://github.com/smolto/to-do-list-project.git
cd to-do-list/
npm install
npm run dev
```

### ***Building and deploying in production***  
* * *
If you wanted to run this site in production, you should install modules then build the site with npm run build and run it with npm start:
```
npm install
npm run build
npm start
```

### ***Use linter***  
* * *
If you wanted to check if project has no code problems using eslint then run npm run lint:
```
npm install
npm run lint
```

### ***Configuration***  
* * *
To configure correctly this app. firstly you need to create a .env.local file inside to-do-list/. This file must contains every single value that is placed in .env
```
AUTH0_SECRET=
AUTH0_BASE_URL=http://localhost:3000
AUTH0_ISSUER_BASE_URL=
AUTH0_CLIENT_ID=
AUTH0_CLIENT_SECRET=
AUTH0_REDIRECT_URI=http://localhost:3000/api/callback
AUTH0_POST_LOGOUT_REDIRECT_URI=http://localhost:3000/
AUTH_COOKIE_SECRET=
```

### ***Authentication***  
In this web app, we used Auth0 (https://auth0.com/docs/). Everything is prepared to work without making any changes. ***IMPORTANT: DON'T FORGET TO FILL OUT EVERY SINGLE ENVIROMENT VARIABLES***  

TUTORIAL:

* https://auth0.com/docs/quickstart/webapp/nextjs/01-login (web)
* https://www.youtube.com/watch?v=egnVe9lXY0E (video)


