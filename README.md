# 🔐 Password Expiry Notification

## Overview
A Google Apps Script project that sends automated password expiry reminders via email. It leverages **Google Sheets** as the data source and an **HTML email template** for personalized, professional notifications.

## Features
- Pulls recipient details (name, username, expiry date) from Google Sheets.  
- Sends HTML-formatted emails with support contact info.  
- Automates reminders for accounts expiring within 30 days.  

## Setup
1. Copy the Apps Script code to your Google Workspace project.  
2. Prepare a Google Sheet with columns: Username, Name, Email, Expiry Date.  
3. Add the `EmailTemplate.html` file.  
4. Configure a daily time-based trigger in Apps Script.  

## License
MIT License – free to use and adapt.
