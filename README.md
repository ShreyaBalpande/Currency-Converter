# Currency-Converter

Overview :
The Currency Converter project is a web-based application that allows users to convert amounts between different currencies in real-time.

It leverages the ExchangeRate API to fetch live exchange rates and displays the conversion result instantly. 

The user-friendly interface ensures a smooth experience, making currency conversion quick and hassle-free.

# Features :
* Real-Time Exchange Rates: Fetches up-to-date currency rates using the ExchangeRate API.

* Intuitive Design: Simplistic and responsive interface for seamless usability.
  
* Custom Currency Selection: Users can select source and target currencies from dropdown menus.

* Exchange Visualization: Displays a clear conversion message (e.g., 1 USD = 84 INR).

*Error Handling: Provides feedback for invalid inputs or API errors.


# Technologies Used :

HTML: Markup structure for the UI.

CSS: Styling for an aesthetic and responsive design.

JavaScript: Core logic, event handling, and API integration.

ExchangeRate API: To fetch live exchange rates.

FlagsAPI: For displaying flags corresponding to selected currencies.


# How to Use :
1. Enter the amount to be converted.

2. Select the source currency (From) and target currency (To) from the dropdown menus.

3. Click the "Get Exchange Rate" button.

4. View the result displayed below the button in the format: X [Source Currency] = Y [Target Currency].


# API Integration :

* ExchangeRate API Key: The application uses an API key to access live data.
  
* Endpoint Used: https://v6.exchangerate-api.com/v6/{API_KEY}/latest/{currency_code}

* Response Handling: The app processes the JSON response to extract conversion rates and handle errors effectively.

# Example :
Input:
Amount: 100
From: USD
To: INR

Output: 100 USD = 8400 INR

# Project Structure :

* HTML: Layout and elements (index.html).

* CSS: Styles and animations (style.css).

* JavaScript: Application logic and API integration (script.js and codes.js).

* Country List: Currency codes mapped to country flags (countryList in codes.js).

# Future Enhancements :

* Historical Exchange Rates: Add support to fetch and display past rates.

* Multiple Conversion: Allow batch conversions.

* Graphical Representation: Visualize trends using charts.


# Acknowledgments :
This project is powered by:
* ExchangeRate API for real-time rates.
* FlagsAPI for currency flag icons.

# Getting Started :

* Clone the repository or download the files.

* Open the index.html file in any modern web browser.
  
* Enjoy seamless currency conversions!
