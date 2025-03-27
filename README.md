# Unit Converter Web App

Idea : https://roadmap.sh/projects/unit-converter

## Overview
This is a simple web application designed to convert between different units of measurement. The app supports various conversions such as length, weight, and temperature. Users can easily input a value, select the units to convert from and to, and immediately see the converted result.

## Features
- **User-Friendly Interface:** A clean, simple webpage that allows users to convert values quickly.
- **Multiple Conversion Types:**  
  - **Length:** millimeter, centimeter, meter, kilometer, inch, foot, yard, mile.  
  - **Weight:** milligram, gram, kilogram, ounce, pound.  
  - **Temperature:** Celsius, Fahrenheit, Kelvin.
- **Modular Design:** Separate pages for each conversion type (length, weight, temperature) to keep the interface organized.
- **No Database Required:** The app processes conversions on the fly and displays the result on the same page.

## How It Works
- **Input Value:** The user enters the value they want to convert.
- **Select Units:** The user selects the source unit and the target unit from dropdown menus.
- **Conversion Process:** When the form is submitted (using `target="_self"`), the backend calculates the converted value.
- **Display Result:** The converted value is displayed on the same webpage.

## Installation
1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/unit-converter-web-app.git
   ```
2. **Navigate to the Project Directory:**
   ```bash
   cd unit-converter
   ```
3. **Set Up the Environment:**
- Install all required dependencies on a package manager
- Configure your development environment as needed.

4. **Run the Application:**
- Start your server and navigate to the appropriate URL in your web browser to use the converter.

## Usage
- Open the webpage corresponding to the conversion type you need (e.g., length, weight, or temperature).
- Enter the value to convert.
- Select the units you are converting from and to.
- Submit the form to see the converted value.

## Technologies Used
**Frontend:** React , Tailwind CSS

**Backend:** Nodejs , Express

## License
This project is licensed under the MIT License.
