# Resume Builder

Create a profession looking resume with our Resume builder app and choose from differnt templates which suits you the best.

## Link to website -> [Resume Builder](https://resumebyabhishek.netlify.app/)

## Technologies that are used.

- #### React
  This app is fully built on top of react library.
- #### react-router-dom
  for navigating to different pages
- #### redux-toolkit
  for managing application state
- #### react-hook-form
  for form validations
- #### jsPDF
  for converting html to pdf and downloading it
- #### react-pdf-viewer
  For viewing pdf in my resumes page
- #### material ui
  for creating the ui of the app

## Contributors :

1. Anjali Vats -> [Profile](https://github.com/Anjal1723B).

## Technical Aspects-

1. User Interface - The user interface of the resume builder should be intuitive and easy to navigate. Users should be able to quickly understand how to use the tool and find the features they need to create their resume.

2. Templates - The resume builder should offer a range of templates for users to choose from. These templates should be customizable, allowing users to add or remove sections as needed.

3. Saving: The resume builder should allow users to export their finished resume in a variety of formats, such as PDFs. This will make it easier for users to share their resume with potential employers.

4. Responsive design: The resume builder should be designed with a responsive design, which means it can be easily viewed and used on different devices, such as desktops, laptops, tablets, and smartphones.

## Challenges faced-

1. Responsive Design - Making the UI and pages responsive for every device was a challenge, and it was overcomed by using Material UI's components for creating the UI.

2. Handling data - Handling the form data such as validating the data entered by user and then storing the data and sending it till resume was another challenge faced. It was overcomed by using react-hook-form for easy validations and redux-toolkit along with the backup of sessionstorage was used to move the data from point A to B.

3. Preview Page - The resume previewed in preview page is not as mobile-friendly as it should be as JSpdf library required providing width and height equal to the dimensions of an A4 sized paper for proper conversion of html template to pdf. It is a challenge which couldn't be overcomed, but a workaround will surely be found and implemented in the future updates.

## Future Aspects-

The future aspect of this project is going to lots of improvements over the current version. It has been decided to add a login functionality, better UI, sharing to another platforms and more templates in the future. We will keep working on this project and keep improving it.
