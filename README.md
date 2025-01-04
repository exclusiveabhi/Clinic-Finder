# :hospital: **Clinic Finder (MERN Stack)**

**Clinic Finder** is a powerful web application built using the MERN stack (MongoDB, Express, React, Node.js) to help users find detailed clinic information across the **United States**. With a modern and responsive UI built using Tailwind CSS, this app allows users to easily browse and discover clinics' contact details, addresses, emails, and phone numbers.

The app supports **pagination** for smooth navigation and a **rate-limiting feature** that limits requests to **10 per session**, ensuring efficient and optimal performance. Users can click the **Load More** button to retrieve additional results.


## Live [Click Here](https://clinic-finder-lovat.vercel.app/)


## :star: **Key Features**

- :bust_in_silhouette: **User-Friendly Interface**: Built with **Tailwind CSS** for a modern and responsive design.
- :world_map: **Find Clinics**: Easily search for clinics across the United States, with essential details like contact info, address, email, and phone number.
- :twisted_rightwards_arrows: **Pagination**: Displays 10 clinics at a time, with a **Load More** button for fetching additional results.
- :shield: **Rate Limiting**: Custom rate-limiting to restrict requests to **10 per session**, maintaining app performance and security.
- :iphone: **Responsive Design**: Optimized for all device sizes—Desktop, Tablet, and Mobile.
- :file_folder: **Backend & Frontend Separation**: Clear separation of backend and frontend for improved maintainability.

---

## Note:- **Replace https://clinic-finder-cwjj.onrender.com with http://localhost:5000 if you are running the backend locally**

## :rocket: **Technologies Used**

- **Frontend**: :computer: React, :sparkles: Tailwind CSS
- **Backend**: :package: Node.js, :coffee: Express.
- **Rate Limiting**: Custom middleware to ensure the rate limit of 10 requests per session.
- **Pagination**: Smooth navigation with a clear, user-friendly "Load More" functionality.

---

## :wrench: **Installation**

### Prerequisites

Ensure the following are installed on your system:

- [Node.js](https://nodejs.org/) (v14 or higher)

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/exclusiveabhi/Clinic-Finder.git
   ```

2. Navigate to the backend directory:
   ```bash
   cd Clinic-Finder
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the backend server:
   ```bash
   node index.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd Clinic-Finder
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend:
   ```bash
   npm start
   ```

4. Visit the application in your browser: [http://localhost:3000](http://localhost:3000)

---

## :movie_camera: **Usage**

- The app displays a list of clinics across the U.S., showing key details such as clinic name, contact name, address, email, and phone number.
- **Pagination**: The app loads 10 clinics at a time. Click the **Load More** button to fetch the next batch of clinics.
- **Rate Limiting**: Users are limited to 10 requests per session to prevent overloading the server and ensure optimal app performance.

---

## :handshake: **Contributing**

We welcome contributions! To contribute:

1. Fork the repository
2. Create a new feature branch: 
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request with a description of your changes.