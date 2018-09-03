# Oauth2 Test App

This app was created with React/Redux. It has a login system. Upon logging in, the user can make a new wall post. The wall post is then displayed, and the user can comment on it. Comments are displayed below the post they are associated with. 

## Setup

Clone the repository to your local machine, then navigate to the repository in the terminal. In the redux folder, you will need a `constants.js` file. This file will contain the information besides login/password the Oauth2 API requires. It should be formatted as follows, with information added: 

```
export const loginInfo = {

};
```

## Starting the app

 Type `npm start` in the terminal, and navigate to localhost:3000. You will be redirected to the login page, where you can login if you have credentials. 

## API

This application uses the Discussion API found [here](https://devapi.careerprepped.com/apigility/swagger/DiscussionAPI-v1#/). It uses the Oauth2 authentication and the wall and wall_comment portions of the API.

## Limitations

The application only displays wall posts created in the current session. If the user refreshes the page, they need to log in again, and their wall posts/comments are lost. 

There is minimal styling on the app. I did some on the wall posts page, just so the layout of information made sense (with comments nested underneath the post they belong to, and separation between posts). 