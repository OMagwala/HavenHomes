HAVEN HOMES
===========

OVERVIEW
--------
Haven Homes is a responsive real estate web application designed to
allow users to browse residential property listings and view detailed
information about available properties.

The application was developed as a portfolio project with a focus on
building a modern property browsing experience and integrating a
Firebase backend for storing and retrieving property data.

FEATURES
--------
* Browse available property listings.
* View detailed information for individual properties.
* Display property prices, locations and specifications.
* Display bedrooms, bathrooms, garages and floor area.
* View multiple images for properties.
* View property locations using map links.
* Add and remove properties from favourites.
* Dedicated favourites page.
* Submit property enquiries.
* Submit enquiries relating to individual properties or agents.
* Retrieve property data dynamically from Firebase Firestore.
* Responsive design for desktop, tablet and mobile devices.
* Modern navigation with responsive mobile menu.
* Dynamic property cards and detailed property views.
* Loading and empty states for relevant sections.

TECHNOLOGIES
------------
* React
* JavaScript
* Vite
* CSS3
* Firebase Firestore
* Cloudinary
* React Router
* React Icons

FIREBASE
--------
Firebase Firestore is used as the application's database for storing
and retrieving property information.

The application connects to Firebase through the project's Firebase
configuration and retrieves property listings dynamically rather than
relying on static property data.

IMAGES
------
Property images are hosted using Cloudinary and referenced by the
property records stored in Firestore.

PROJECT STRUCTURE
-----------------
src/              - Main React application source code
src/components/   - Reusable React components
src/pages/        - Application pages
src/data/         - Project data and supporting files
src/firebase/     - Firebase configuration
public/           - Public application assets
index.html        - Main HTML entry point
vite.config.js    - Vite configuration

MAIN PAGES
----------
Home
Listings
Property Details
Favourites
Contact
Enquiry

HOW TO RUN
----------
1. Clone the repository.
2. Install the project dependencies:

   npm install

3. Configure Firebase using the project's Firebase configuration.
4. Start the development server:

   npm run dev

5. Open the local development URL provided by Vite.

BUILD
-----
To create a production build:

   npm run build

To preview the production build locally:

   npm run preview

PROJECT PURPOSE
---------------
Haven Homes was developed as a portfolio project to demonstrate
practical experience with React, component-based development,
client-side routing, Firebase Firestore, cloud-hosted images,
responsive design and asynchronous data retrieval.

The project also demonstrates the migration from static JavaScript
property data to a cloud-based Firestore data source.

CONTACT
-------
Olwethu Magwala
GitHub: OMagwala
Email: omagwala19@gmail.com