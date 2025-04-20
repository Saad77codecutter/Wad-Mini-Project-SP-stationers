
# Stationery Shop Website

This README file provides a brief overview of the steps involved in creating a website for selling stationery items. The website is based on an existing stationery store and is built using React and Bootstrap.

## Getting Started

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/MyNameIsYg/stationery-shop-website.git
   cd stationery-shop-website
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```


## Project Structure

The project is organized as follows:

- **`public/`:** Contains public assets like images, icons, and the `index.html` file.
- **`src/`:** Contains the source code for the React application.
  - **`Image/`:** The images of website
  - **`comp/`:** React components used in the application.
  - **`css/`:** CSS files for styling.
  - **`redux/`:** Contains Redux-related files.
    - **`ElectronicImage/`:** Images of Electronic
    - **`FilingImage/`:** Images of Filing
    - **`PaperImage/`:** Images of Paper
    - **`StationeryImage/`:** Images of Stationery
    - **`action/`:** Redux action creators.
    - **`reducer/`:** Redux reducers.
    - **`store.js`:** Redux store configuration.

## Integrating Bootstrap

Bootstrap is used for styling the website. It is loaded in the `public/index.html` file:

```html
<!-- Add this in the <head> section -->
<link
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous" />

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
/>
```

## Running the Application

To start the development server and view the website locally, run:

```bash
npm start
```

This will launch the application at `http://localhost:3000` by default.


## Live Demo

The project is deployed and can be accessed live at [https://store-xp5j.onrender.com](https://store-xp5j.onrender.com)

Feel free to explore the website and test its features. If you encounter any issues or have feedback, please submit an [issue](https://github.com/MyNameIsYg/stationery-shop-website/issues).


