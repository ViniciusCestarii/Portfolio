# 🚀 Welcome to My Portfolio!

[![deploy](https://github.com/ViniciusCestarii/Portfolio/actions/workflows/deploy.yaml/badge.svg)](https://github.com/ViniciusCestarii/Portfolio/actions/workflows/deploy.yaml)

Hey there! I'm Vinicius Cestari, a passionate Full Stack Engineer, and this is my portfolio. Here, you’ll find my latest projects, skills, and experiences. Whether you're a recruiter, fellow developer, or just curious about my work, feel free to explore!

Want to run this project locally? Follow the steps below. 👇

## 🛠️ How to Run the Project

To run this project locally, follow these steps:

1. **Environment Variables**:
    Ensure to set up any necessary environment variables required for the project. Refer to `.env.example` for guidance.

2. **Clone the repository**:
    ```bash
    git clone https://github.com/ViniciusCestarii/Portfolio.git
    cd portfolio
    ```

3. **Install dependencies**:
    Ensure you have Node installed. Then, install the required packages:
    ```bash
    npm i
    ```

4. **Run the development server**:
    Start the local development server:
    ```bash
    npm run dev
    ```

5. **Open your browser**:
    Open your browser and navigate to `http://localhost:3000` to view the portfolio.

### Run with Docker

1. Build to create the image:
    ```bash 
    docker build . -t portfolio
    ```

2. Create the container and run:
    ```bash
    docker run --env-file .env.local -p 3000:3000 portfolio
    ```

Want to check out the components in isolation? Follow this step:

- **Run the Storybook**:
    Start the Storybook server:
    ```bash
    npm run storybook
    ```

To build and start this project locally for production, follow these steps:

1. **Build for production**:
    To build the project for production, use the following command:
    ```bash
    npm run build
    ```

2. **Run the production server**:
    After building, you can start the production server with:
    ```bash
    npm run start
    ```

If you encounter any issues or have any questions, feel free to reach out through the contact information provided above. Happy coding!
