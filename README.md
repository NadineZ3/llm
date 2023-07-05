# Large Language Model - Llama - GPT3 - Chat Bot


# Chat Bot Application

This is a simple chat bot application that allows users to send messages to a large language model and receive responses. The application consists of a React frontend and a FastAPI backend.

## Prerequisites

- Node.js and npm should be installed on your system.
- Python and pipenv should be installed on your system.

## Installation

1. Clone the repository:


2. Frontend Setup:
- Navigate to the `frontend` directory:
  ```
  cd frontend
  ```

- Install the dependencies:
  ```
  npm install
  ```

3. Backend Setup:
- Navigate back to the project root directory:
  ```
  cd ..
  ```

- Set up a virtual environment and install the dependencies:
  ```
  pipenv install
  ```

## Usage

1. Start the backend server:
- Activate the virtual environment:
  ```
  pipenv shell
  ```

- Run the FastAPI server:
  ```
  uvicorn app:app --reload
  ```

The backend server will start running on `http://localhost:8000`.

2. Start the frontend development server:
- Navigate to the `frontend` directory:
  ```
  cd frontend
  ```

- Start the development server:
  ```
  npm run start
  ```

The React development server will start running on `http://localhost::5173`.

3. Open your browser and visit `http://localhost:3000` to access the chat bot application.

## Customization

- To customize the behavior or appearance of the chat bot, you can modify the frontend React components located in the `frontend/src` directory.
- You can also modify the backend FastAPI application in the `app.py` file to add additional functionality or integrate with other services.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

