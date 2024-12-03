Here’s a comprehensive `README.md` setup for your Heaviety app project:

---

# Heaviety Business

Heaviety is a web application designed to empower small-scale business owners, artisans, and jua kali (informal sector workers) by helping them showcase their products to a global audience. The platform connects local businesses with customers, facilitating easier product discovery and community engagement.

---

## Features

- **User Authentication:** Register and log in using email and OTP for secure authentication.
- **User Profile Management:** Users can create and manage their profiles.
- **Product Management:** Add, update, and delete products.
- **Product Categories:** Pre-defined categories for products.
- **Product Listings:** View a list of products from most recent to older ones.
- **Community Engagement:** Interaction with other users and products.
- **Admin Management:** Admin can manage users and products.
- **Responsive Design:** Fully responsive for mobile and desktop views.

---

## Tech Stack

- **Frontend:**
  - React.js
  - Redux for state management
  - Tailwind CSS for styling
  - Axios for API calls
  - React Hook Form for form handling
  - react-toastify for notifications
  - Vite for build and development server
  
- **Backend:**
  - Django with DRF (Django Rest Framework)
  - Djoser for user authentication
  - JWT (JSON Web Tokens) for secure authentication
  - PostgreSQL database
  
- **Other Tools:**
  - Celery for background tasks
  - Docker for containerization

---

## Prerequisites

1. **Node.js** (v18.x or higher)
2. **Python** (v3.8 or higher)
3. **PostgreSQL** (for the backend database)
4. **Docker** (for development environment)

---

## Installation

### Backend Setup

1. Clone the repository:
   ```bash
   git clone git@github.com:JAPH254/Heaviety-Pro.git
   ```

2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Configure environment variables:
   - Create a `.env` file in the `backend/` directory and add the necessary environment variables:
     ```env
     DJANGO_SECRET_KEY=your_secret_key
     DJANGO_DEBUG=True
     DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1
     DB_NAME=your_db_name
     DB_USER=your_db_user
     DB_PASSWORD=your_db_password
     DB_HOST=localhost
     DB_PORT=5432
     ```

5. Run migrations to set up the database:
   ```bash
   python manage.py migrate
   ```

6. Create a superuser to access the Django admin:
   ```bash
   python manage.py createsuperuser
   ```

7. Start the Django server:
   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. The frontend should now be running on `http://localhost:5173`.

---

## API Endpoints

The Heaviety backend exposes several RESTful API endpoints for managing users, products, and categories.

- **User Registration**: `POST /auth/users/`
- **User Login**: `POST /auth/jwt/create/`
- **User Profile**: `GET /auth/users/me/`
- **Product Management**:
  - `GET /api/products/` - List all products
  - `POST /api/products/` - Add a new product
  - `PUT /api/products/{id}/` - Update product details
  - `DELETE /api/products/{id}/` - Delete a product
- **Category Management**:
  - `GET /api/categories/` - List all categories
  - `POST /api/categories/` - Add a new category

---

## Running with Docker

1. Build the Docker images:
   ```bash
   docker-compose build
   ```

2. Start the services:
   ```bash
   docker-compose up
   ```

3. This will start both the backend and frontend services, and the app will be accessible at `http://localhost:8000` for the backend and `http://localhost:5173` for the frontend.

---

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add new feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Open a pull request with a description of the changes.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgements

- **Django**: For the powerful backend framework.
- **React**: For the dynamic frontend.
- **Redux**: For managing state across the app.
- **PostgreSQL**: For database management.
- **Tailwind CSS**: For styling the application.
- **Vite**: For fast and optimized frontend development.

---

This README provides a thorough guide for setting up your Heaviety app, including all necessary installation steps, backend and frontend configurations, API details, and contribution guidelines. Let me know if you'd like to add or modify any sections!