# ***Hackathon Dashboard***
Developed as part of the application process for joining the Los Altos Hacks organizing team. 

This dashboard integrates a **React JS**, **Firebase** **CSS**, **HTML** frontend, and a **Flask** (Python) backend to create a sleek and intuitive hackathon dashboard. The homepage includes numerous animations and provides links to a projects page. The projects page showcases a stateful app: the React frontend sends a Fetch POST request to the Flask backend which then scrapes Devpost for hackathon submissions in **real time**, samples a few, and sends back the samples as a response. The response is then interpreted and showcased on a new page using React Router. The project also includes a React component that acts as a central hub for users to check in, check out, and view the current status of other users. The data is stored in a Firebase database and connected to the React app. (**This is not included in the repo because I cannot share my API key**)



## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
 

## Demo
### Full Demo (including firebase check in/check out system)


https://github.com/rohandesai1/LAHacksDashboard/assets/126644574/456f6fe3-1abd-4d68-9803-2bef374e32af

### What is in the repo (contact me for more details on the check in/out system)
https://github.com/rohandesai1/LAHacksDashboard/assets/126644574/8883d370-0300-47cd-836b-869caf2ef95d

## Features

- **Devpost Scraper**:
  - Scrape project information from Devpost websites.
  - Built with Python using `requests`, `BeautifulSoup`, and `flask`.
  - Supports Cross-Origin Resource Sharing (CORS).
  

- **Check in/Out System**:
  - **A React component that acts as a central hub for users to check in, check out, and view the current status of other users.**

  - 📌 Instant Check-In & Check-Out: With designated buttons, users can effortlessly mark their presence or absence, making tracking easier than ever.
  - 🔍 Real-Time Status Overview: A live feed displays the current status ("In" or "Out") of all users.
  - 🚀 Smart Data Management: The component fetches and updates data in real-time from a Firestore collection, ensuring data accuracy and responsiveness.
  - 🌐 Link to Home: A dedicated icon link redirects users to the home page, making navigation a breeze.
  - 🎨 Personalized Dashboard: Once signed in, users are greeted with a personalized dashboard, enhancing user engagement and experience.
  - 🛡️ Integrated Authentication: The component seamlessly integrates with the Authentication component from auth.js, ensuring that only authenticated (can be even more secure depending on function) users can access the dashboard.
- **React Frontend**:
  - **Announcements**: Display key selling points of the hackathon with a dedicated component.
  - **Events & Schedules**: Manage and display various events and their schedules.
  - **Projects**: Showcase individual projects and a collection of projects. Data fetching capabilities included. 
  - **Content**: Components to present general information and aggregate content.
  - **Video Display**: A component to handle video content.
  
- **Styling**:
  - Custom CSS for various components.
  - Animations


## Getting Started

### Prerequisites

Make sure you have the following libraries installed in Python:
- BeautifulSoup
- Requests
- Numpy
- Flask
- Flask_CORS

React:

- React Router DOM
  
### Usage
1. Clone this repository
   `git clone https://github.com/rohandesai1/LAHacksDashboard`
2. Navigate to the project directory
   `cd ~/Path/To/Download`
3. Install the required libraries
   - Python
   `pip install -r requirements.txt`
   - React
   `npm install` (installs all required libraries)
4. Run the web server and API server
   `python3 devpostScraper.py`
   `npm start`
