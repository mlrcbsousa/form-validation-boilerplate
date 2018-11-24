## Disclaimer

This `README.md` file is based on the one supplied with love during a [Le Wagon Bootcamp](https://www.lewagon.com/) challenge - check them out, learn to code and change your life!

Due to the context, **French** RegEX matching is used (easily changeable).

## Background & Objectives

Javascript is really useful when it comes to validating forms on the client side.
When people are filling out your form, it's best to give them feedback as quickly as possible if a field has been incorrectly completed.

## Specs

This is a boilerplate for form validation, using only Javascript and some Bootstrap classes for simplification. Feel free to change the styling and add your own style classes in a seperate CSS file, don't forget to link it in `index.html` after.

```bash
mkdir css
touch css/style.css
```

We want to validate the form as the user fills each input. The [`blur`](https://developer.mozilla.org/en-US/docs/Web/Events/blur) event listener is what we are looking for...

- All fields are required
- Ensures the Terms of Service checkbox is ticked
- Ensures the user enters a valid **French zipcode**
- Validates the phone number - **French mobile phones only**
- Validates the email format
- Includes error messages for specific invalid entries
- If all fields have been completed correctly, the submit button is enabled

Open the `validation.js` file. This is where the code for the validation logic is.

Used [bootstrap validation state classes](http://getbootstrap.com/css/#forms-control-validation) to add a red background when a field is not properly filled, or a green background when it is.

## To-do

Complete the event listener on the `"submit"` event to run over all the validations before sending the `POST` request.
