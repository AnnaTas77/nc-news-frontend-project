# NC News Frontend Project

![NC News App Screenshot](./src/assets/NC%20News%20Screenshot.png)

## NC News Project Description

The NC News project is a full-stack application that revolves around a custom-built backend News API, which has been designed to enable programmatic access to application data and replicate the functionalities of real-world backend services similar to Reddit.

The NC News frontend project acts as a user-friendly interface, allowing users to access and interact with the diverse endpoints offered by the NC News API. Users can effortlessly search through the articles list, filter articles by topic, read a specific article, post comments and vote on each article.

> You can find the deployed version of the NC News Frontend Project [here](https://nc-news-anna.netlify.app/).

## NC News Backend Project

> You can find the hosted version of the NC News API Backend Project [here](https://news-backend-project.onrender.com/api).

> You can find the backend repository for the NC News API [here](https://github.com/AnnaTas77/nc-news-backend-project).

## Frontend Project Tech Stack

The NC News Frontend Project is built using the following tech stack to deliver a seamless user experience:

-   **React:** This widely adopted JavaScript library empowers us to create dynamic and interactive user interfaces efficiently.

-   **Vite:** A lightning-fast build tool that enhances development speed and optimizes the performance of modern web applications.

-   **Axios:** A powerful and widely-used HTTP client that simplifies making API requests, facilitating seamless communication with the backend.

-   **CSS:** Cascading Style Sheets are used to craft visually appealing and responsive designs, ensuring an engaging user interface.

    -   **Flexbox** is utilized to create flexible and adaptive layouts for the website. This allows components to automatically adjust and rearrange themselves based on the available screen space, ensuring consistent and visually appealing designs on various devices.

    -   **Media Queries** are employed to apply specific styles based on the user's device properties. With Media Queries, the website adapts its appearance, font sizes, margins, and other elements to provide an optimal user experience on both desktop and mobile devices.

## How to Use the App

1. **View Articles:** The homepage of the app displays a list of articles. You can click on any article to view its details, including the title, body, author, and number of comments and votes.

2. **Sort and Filter Articles:** On the articles page, you can sort the articles by date, comment count or votes count using the provided buttons. Click on the "Sort by" dropdown, and it will reveal the sorting buttons:

    - **Sort by Date:** By default, articles are sorted by the most recent date. Click the "Date" button to arrange articles from newest to oldest or vice versa.

    - **Sort by Comment Count (Optimistic Rendering):** To find the most discussed articles, click the "Comment Count" button. The app will immediately rearrange the articles based on the number of comments associated with each article. The comment count is updated optimistically to provide a seamless user experience.

    - **Sort by Votes (Optimistic Rendering):** If you're interested in the most popular articles, click the "Votes Count" button. The app will instantly re-order the articles based on the number of votes each article has received. The vote count is updated optimistically to ensure smooth and quick feedback for users.

3. **Article Details:** Clicking on an article will take you to its individual page, where you can read the full article content, see the number of votes and all the comments related to that article. You can vote on the article, add your own comment using the provided comment form or delete your comment.

4. **Explore Topics:** The app allows you to explore different topics by clicking on the "Topics" link in the navigation bar. This will display a list of available topics, and you can click on any topic to see only the articles related to that topic.

## Running the Project Locally

To run the NC News frontend project on your local machine, follow these steps:

### 1. Clone the GitHub repository

    git clone https://github.com/AnnaTas77/nc-news-frontend-project.git
    cd nc-news-frontend-project

### 2. Install project dependencies

    npm install

### 3. Start the development server

    npm run dev

This will start the development server, and the app will be accessible at `http://localhost:3000`.

### 4. Explore the App

Feel free to explore the app, interact with the different features, and test its functionality.

Enjoy using the NC News frontend app! If you have any questions or feedback, don't hesitate to reach out. Happy reading and commenting! 😊
