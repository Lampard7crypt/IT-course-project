# **Car Sales Website Documentation**

**Student Name:** Lampard Kipyegon
**Project Name:** car Sales Inc. - Online Car Sales Portal
**Date:** February 7, 2026

---

## **1. Summary**

### **1.1 Introduction**

The **Car Sales Portal** is a client-side web application designed to facilitate the browsing and selection of motor vehicles. The platform provides a user-friendly interface for customers to view available cars, filter them by brand, and register their interest. The project demonstrates the practical application of modern web technologies, specifically focusing on responsive design, DOM manipulation, and user preference management.

### **1.2 Objectives**

The primary objectives of this project were:

* To build a responsive front-end interface using **HTML5** and **CSS3**.
* To implement dynamic functionality (search, filtering, and theming) using **Vanilla JavaScript**.
* To create an intuitive navigation system for accessing vehicle listings and user registration.
* To ensure accessibility across devices using a mobile-first approach.

---

## **2. System Overview**

### **2.1 Core Features**

The application includes the following key features:

1. **Dynamic Search Functionality:** A real-time search bar allowing users to filter vehicles by name (e.g., "BMW", "Prado") without reloading the page.
2. **Category Filtering:** A dropdown menu that filters the displayed car inventory by specific manufacturers (Toyota, Mazda, BMW, Mercedes).
3. **Dark/Light Mode Toggle:** A user preference feature that switches the website's theme between dark and light modes for better visual accessibility.
4. **Cookie Consent Management:** A compliance banner that requests user consent for cookies and remembers the choice using the browser's `localStorage`.
5. **User Registration:** A sign-up form that captures user details (Name, Email, Password) and utilizes a `mailto` action for form submission.

### **2.2 Target Audience**

The system is designed for potential car buyers looking for a streamlined digital catalog to view prices and vehicle models (e.g., SUVs, Sedans, Luxury cars) available in the Kenyan market (prices listed in KES).

---

## **3. Technical Architecture**

### **3.1 Technology Stack**

* **Markup Language:** HTML5 (Semantic structure).
* **Styling:** CSS3 (Flexbox layout, CSS Variables, Responsive Media Queries).
* **Scripting:** JavaScript (ES6+ for DOM manipulation and Event Handling).
* **Data Persistence:** LocalStorage (For saving "Cookie Accepted" state).

### **3.2 File Structure**

* `index.html`: The main landing page containing the vehicle catalog and navigation.
* `register.html`: The user registration interface.
* `index.js`: Contains logic for search, filtering, and theme toggling.
* `cars/styles.css`: Centralized stylesheet handling the visual presentation and responsive breakpoints.
* `cars/`: Directory containing vehicle assets (images).

---

## **4. Usage Guide**

### **4.1 Navigation**

The application features a sticky navigation bar containing:

* **Home:** Returns to the main vehicle listing.
* **Privacy Policy:** Links to the privacy statement.
* **Register:** Navigates to the sign-up form.
* **Dark Mode Toggle:** Switches the visual theme.

### **4.2 Browsing Vehicles**

1. **Search:** Type keywords into the search input. The grid will instantly update to show only matching vehicles.
2. **Filter:** Select a brand from the dropdown menu (e.g., select "Toyota" to hide all other brands).
3. **Details:** Each car card displays the vehicle image, model name, and price (e.g., "Toyota Prado: Ksh 7,000,000").

---

## **5. Limitations & Future Improvements**

### **5.1 Current Limitations**

* **Data Storage:** Vehicle data is currently hardcoded in HTML, meaning new cars cannot be added without editing the code.
* **Form Submission:** The registration form relies on the client's email client (`mailto`) rather than a backend server.

### **5.2 Future Enhancements**

* **Backend Integration:** Implement a Python (Django/Flask) or Node.js backend to store user data and vehicle inventory in a database.
* **Detailed View:** specific pages for each vehicle with comprehensive specifications.

---

## **6. Conclusion**

The **Car Sales Portal** successfully meets the requirements of the IT course project. It delivers a functional, interactive, and aesthetically pleasing web application that solves the problem of digital vehicle showcasing. The project highlights proficiency in frontend logic (`searchBar`, `toggleDarkMode`) and responsive design principles.