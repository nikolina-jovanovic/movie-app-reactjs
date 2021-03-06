** MOVIE APP **


![movie-app1](https://user-images.githubusercontent.com/85742865/133162675-f1032ab5-597a-45f8-95e8-0f572aaa0c5b.png)

When clicking on a certain movie:

![movie-app2](https://user-images.githubusercontent.com/85742865/133162678-9f1ecd31-705e-4d0b-9754-2e4a6f645ed7.png)

I made this app using React, with Visual Studio code editor. I installed create-react-app using npx. Movie app is an application which shows trending movies (top 20). I used 'The Movie Database' (TMDb) API, with Axios and useEffect React hook. Also, you can see many useState hooks to set initial state. With React hooks and axios I also used event listeners (onclick, onkeypress).

How this app works? 
There is a navigation bar, and initial state of an app is to show 20 top trending movies, 3 in a row. There is a cover photo of a movie and a name. In an upper right corner,there is search bar where user can type name of a movie he/she wants. User can type any word,and pressing the "Enter" key, all movies which contain certain words will appear. Using ternary operators, I filtered movies which have both- title and an image. Some movies didn't have both,so I decided not to show them at all at the page. By clicking on a certain movie, I created modal box which appears with a description, average rating and a release date.
