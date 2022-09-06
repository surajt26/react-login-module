<div id="top"></div>

<div align="center">
    <h1>
        <a href="https://github.com/surajt26/react-login-module.git">React-Login-Module</a>
    </h1>
    <br />
    <a href="https://github.com/surajt26/react-login-module.git">
        <img src="/images/readmeLogo.png" alt="logo" width="80" height="80">
    </a>
    <br />
    <h3 align="center">Best-README-Template</h3>
    <p align="center">An awesome README template to jumpstart the project!
        <br />
        <a href="https://github.com/surajt26/react-login-module.git">
            <strong>Explore the docs »</strong>
        </a>
        <br /><br />
        <a href="https://github.com/surajt26/react-login-module.git">View Demo</a> ·
        <a href="https://github.com/surajt26/react-login-module/issues">Report Bug</a> ·
        <a href="https://github.com/surajt26/react-login-module/issues">Request Feature</a>
    </p>
</div>
<br /><br />

## Table of Contents

* [About React-Login-Module](#about-react-login-module)<br />
* [About The Project](#about-the-project)<br />
* [Username And Password](#username-and-password)<br />
* [Public API's](#public-apis)<br />
* [Create Client ID Process](#create-client-id-process)<br />
* [Prerequisites](#prerequisites)<br />
* [Install](#install)<br />
* [Build With](#build-with)
  - [React](#react)
  - [React Router V6](#react-router)
  - [Axios API](#axios-api)
  - [Google Authentication](#google-authentication)
  - [Suspense and Lazy](#suspense-lazy)
  - [Session Storage](#session-storage)
  - [NPM](#npm)
  - [Bootstrap](#bootstrap)
  - [Material-UI](#material)
* [Project Demo](#project-demo)<br />
* [Maintainers](#maintainer)<br />
* [Contributor](#contributor)<br />
* [License](#license)<br />
* [Contact](#contact)
<br /><br />

<!------------------ About React-Login-Module ------------------>
## About React-Login-Module

- A Almost any web app needs some sort of access control, usually implemented by user login.
- Choosing how user authentication is implemented depends on the type of application and its audience.
- I want to show you a few different ways of creating a login feature in a single-page React application using [React-Login-Module](https://github.com/surajt26/react-login-module.git).
- The [React-Login-Module](https://github.com/surajt26/react-login-module.git) can be used as a simple out-of-the-box login form. To have more control over the appearance of the user login, you can also implement your own form and use [React-Login-Module](https://github.com/surajt26/react-login-module.git) authentication service to verify the user’s credentials.
<br /><br />

<!------------------ About The Project ------------------>
## About The Project
- The React-Login-Module is react app.
- It build on React with React-Router, Axios, Google-Authentication, Session-Storage, Suspense and lazy.
- Used Bootstrap and Material-UI to markup the project.
<br />
- This app has following components -
    - App
    - LoginPage
    - AdminPage
    - IdleTimer
    - LoginProtected
    - ProtectedRoute
    - GoogleLoginBtn
    - UserProfile
    - Spinner
    - ErrorPage
<br />
<div align="center">
    <img src="/images/hierarchy.png">
</div>
<br />

<!------------------ BookMark ------------------>
<p align="right">(<a href="#top">back to top</a>)</p>
<br /><br />

- App is main component is contain IdleTimer, LoginProtected, ProtectedRoute, LoginPage, AdminPage, ErrorPage and Spinner components. It maintain login and logout trigger status to maintain the Login-Module. With the help of React-Router, maintain all the path of React-Login-Module project.
- LoginProtected component contain LoginPage and it's an protected component it's make sure that user logged in or not, if user not logged in then it return LoginPage and if user logged in then it redirect to AdminPage.
- ProtectedRoute component contain the secure or protected components. It make sure user can't access protected routes without login if user trying to access secure routes without login then it redirect to LoginPage.
- LoginPage component contain logo image and GoogleLoginBtn component. LoginPage component has company logo and input fields one for Email, one for Password, one for Terms & Conditions and Privacy Policy's and it all are required fields. User have to write Email and password and accept terms and conditions to login, if user submit correct credentials then it would be login and if user submit incorrect credentials then error alert message would be popup. User can login with google identification also if user has google account then it can login.
<br />
<div align="center">
    <img src="/images/loginPage.png">
</div>
<br />

- GoogleLoginBtn component contain google login button, functionality and used react-google-login, gapi-script libraries.
<br />
<div align="center">
    <img src="/images/googleLogin.png">
</div>
<br />

<span color="blue">Note</span> - If anyone want to use google login feature so he/she has to put own google client id in React-Login-Module project. Due to security reasons I can't share my google client id to publicly.
<br />

- AdminPage component contain UserProfile component, Logout button and users container and with the help of public API users information comes.
<br />
<div align="center">
    <img src="/images/loginUser.png">
</div>
<br />

<br />
<div align="center">
    <img src="/images/googleUser.png">
</div>
<br />

- UserProfile component contain logged in user information like name, email and profile picture.
- IdleTimer component contain the functionality of auto logout user. It make sure if user not active since a minute then it auto logout the user.
- ErrorPage contain error message with two buttons Go back and Home. Go back button take user to previous route and Home button take user to LoginPage. If user trying to access unknown or unexpected route then this page shows.
<br />
<div align="center">
    <img src="/images/errorPage.png">
</div>
<br />

- Spinner component contain bootstrap spinner container.
- Used bootstrap, material-ui and css to markup the React-Login-Module project and used session-storage to store logout trigger data and logged in user information. Used axios to request API and with the help of suspense and lazy trying to show component getting load.
<br /><br />

<!------------------ BookMark ------------------>
<p align="right">(<a href="#top">back to top</a>)</p>
<br /><br />

<!------------------ Public API's ------------------>
## Username And Password
- Username - "eve.holt@reqres.in"
- Password - "cityslicka"
<br /><br />

<!------------------ Public API's ------------------>
## Public API's
- Login Page
    - Request for login uesr
    - Request for logged in user information
        ```sh
        https://reqres.in/api/login
        ```
        ```sh
        https://reqres.in/api/users/4
        ```
- Admin Page
    - Request for get users information
        ```sh
        https://reqres.in/api/users?page=1
        ```
<br /><br />

<!------------------ Create Client ID Process ------------------>
## Create Client ID Process
- Go to [console.developers.google.com](https://console.developers.google.com/) and login.
- Create a new project then select created project. Then go to "APIs & Services" section then go to "OAuth consent screen" section.
- Select "External" and hit "CREATE" button then fill all the information.
- Then go to "Credentials" section and hit "+ CREATE CREDENTIALS" button and select OAuth client ID then fill all the information and save then you would get client ID.
- Copy client ID and open ".env" file which is available in [React-Login-Module](https://github.com/surajt26/react-login-module.git) project then assign client id to "REACT_APP_GOOGLE_CLIENT_ID".
<br /><br />

<!------------------ Prerequisites ------------------>
## Prerequisites

- NPM - [Download Link](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Google Client ID - [Link](https://console.developers.google.com/)
<br /><br />

<!------------------ Install ------------------>
## Install

- Clone the <a href="https://github.com/surajt26/react-login-module.git">React-Login-Module</a> app project.

```sh
git clone https://github.com/surajt26/react-login-module.git
```
- Install all dependency which mention in "package.json" file.
```sh
npm install
```
- Start <a href="https://github.com/surajt26/react-login-module.git">React-Login-Module</a> Project.
```sh
npm start
```
<br /><br />

<!------------------ BookMark ------------------>
<p align="right">(<a href="#top">back to top</a>)</p>
<br /><br />

<!------------------ Build With ------------------>
## Build With

<h3 id="react"><a href="https://reactjs.org/">React</a></h3>

- React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.
- It is maintained by Meta and a community of individual developers and companies.
<br>

<h3 id="react-router"><a href="https://reactrouter.com/en/v6.3.0/getting-started/overview">React-Router-V6</a></h3>

- React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces.
- React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.
<br />

<h3 id="axios-api"><a href="https://www.npmjs.com/package/axios">Axios API</a></h3>

- Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6.
- It can be used intercept HTTP requests and responses and enables client-side protection against XSRF.
- It also has the ability to cancel requests.
<br />

<h3 id="google-authentication"><a href="https://console.developers.google.com/">Google Authentication</a></h3>

- The Google OAuth 2.0 endpoint supports JavaScript applications that run in a browser.
- The authorization sequence begins when your application redirects a browser to a Google URL; the URL includes query parameters that indicate the type of access being requested.
- When you use OAuth 2.0 for authorization, your app requests authorizations for one or more scopes of access from a Google Account.
- Google displays a consent screen to the user including a summary of your project and its policies and the requested scopes of access.
- Scopes define what kind of user data you'll ask to access on behalf of the user in the consent screen.
<br />

<h3 id="suspense-lazy"><a href="https://reactjs.org/docs/code-splitting.html">Suspense and Lazy</a></h3>

- A large React application will usually consist of many components, utility methods, and third-party libraries.
- If an effort isn't made to try to load different parts of an application only when they're needed, a single, large bundle of JavaScript will be shipped to your users as soon as they load the first page.
- This can affect page performance significantly.
- The React.lazy function provides a built-in way to separate components in an application into separate chunks of JavaScript with very little legwork.
- You can then take care of loading states when you couple it with the Suspense component.
<br />

<h3 id="session-storage"><a href="https://www.google.com/search?sxsrf=ALiCzsbn3rHPdanmAiQeEGmmYhBAE6jXXw:1662189579873&q=what+is+session+storage+javascript&spell=1&sa=X&ved=2ahUKEwjnm9Tbivj5AhX7RWwGHVrKCNsQBSgAegQIARA2&biw=1440&bih=793&dpr=1">Session Storage</a></h3>

- sessionstorage is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date.
- This means the data stored in the browser will persist even after the browser window is closed.
<br />

<h3 id="npm"><a href="https://www.npmjs.com/">NPM</a></h3>

- npm is a package manager for the JavaScript programming language maintained by npm, Inc.
- npm is the default package manager for the JavaScript runtime environment Node.js.
- It consists of a command line client, also called npm, and an online database of public and paid-for private packages, called the npm registry.
<br />

<h3 id="bootstrap"><a href="https://getbootstrap.com/">Bootstrap</a></h3>

- Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.
- It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.
<br />

<h3 id="material"><a href="https://mui.com/">Material-UI</a></h3>

- MUI offers a comprehensive suite of UI tools to help you ship new features faster.
- Start with Material UI, our fully-loaded component library, or bring your own design system to our production-ready components.
<br /><br />

<!------------------ Project Demo ------------------>
## Project Demo
[![Watch the video](https://img.youtube.com/vi/BTifwIPhG6U/0.jpg)](https://youtu.be/BTifwIPhG6U)
<br />
[Click To Visit](https://youtu.be/BTifwIPhG6U)
<br /><br />

<!------------------ Maintainer ------------------>
## Maintainer
[@surajt26](https://github.com/surajt26)
<br /><br />

<!------------------ Contributor ------------------>
## Contributor

[![](https://github.com/surajt26.png?size=50)](https://github.com/surajt26)
<br /><br />

<!------------------ License ------------------>
## License

[MIT](LICENSE) © Suraj KY
<br /><br />

<!------------------ Contact ------------------>
## Contact
<br />

<p align="center"><a href="https://www.linkedin.com/in/surajt26">Suraj KY</a></p>
<p align="center">
    <a href="https://www.linkedin.com/in/surajt26">LinkedIn</a> ·
    <a href="mailto:face.surajyadav@gmail.com">Gmail</a> ·
    <a href="https://github.com/surajt26">Github</a> ·
    <a href="https://twitter.com/surajt26">Twitter</a> ·
    <a href="https://instagram.com/surajt26">Instagram</a> ·
    <a href="https://github.com/surajt26/react-login-module.git">Project Link</a>
</p>
<br />

<!------------------ BookMark ------------------>
<p align="right">(<a href="#top">back to top</a>)</p>