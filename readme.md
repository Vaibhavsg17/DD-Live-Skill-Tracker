# User Activity Tracker Chrome Extension

This Chrome extension tracks the websites a user visits and allows the user to input their name and skills, which are saved and can be retrieved later.

## Features

- **Track Browsing Activity**: Automatically tracks websites visited by the user.
- **Input User Details**: Allows users to enter their name and skills.
- **Save and Retrieve User Data**: Saves the inputted name and skills and displays them on demand.
- **Store Data Locally**: Uses Chrome's local storage (`chrome.storage.local`) to store visited sites and user information.

## How to Use

1. **Install the Extension**:
   - Load the extension via Chrome's Developer mode by selecting the `Load unpacked` option on the extensions page (`chrome://extensions/`).
   - Select the folder where the extension files are located.

2. **Track Browsing Activity**:
   - Once installed, the extension automatically tracks the websites you visit and records them in the background.

3. **Input Name and Skills**:
   - Click the extension icon in the Chrome toolbar.
   - Fill in your **Name** and **Skills** (comma-separated), and click **Save Details**.
   - To view your saved details, click **Show Saved Details**.

## Files

- **background.js**: Tracks user activity (visited websites) in the background.
- **popup.html**: Contains the interface for inputting and displaying user details.
- **popup.js**: Handles saving and retrieving user details and displaying them in the popup.
- **manifest.json**: Defines extension settings and required permissions.

## Permissions

- **tabs**: Allows the extension to track the websites visited by the user.
- **storage**: Enables the extension to store user data (name, skills, and visited websites).


