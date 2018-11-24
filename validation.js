// TODO: Validate this form
const form = document.getElementById("form");
const formGroups = document.querySelectorAll(".form-group");
const formControls = document.querySelectorAll(".form-control");
const checkbox = document.getElementById("tos");
const button = document.querySelector(".btn");

const capitalize = word => word[0].toUpperCase() + word.substr(1).toLowerCase();

// only use this in an iterator, not individually
const enableSubmit = (group) => {
  if ((group.classList.contains("has-success")) && (checkbox.checked)) {
    button.disabled = false;
    button.innerText = "Submit";
  } else {
    button.disabled = true;
    button.innerText = "Please fill all fields";
  }
};
const hasError = (group) => {
  const groupClass = group.classList;
  groupClass.add("has-error");
  groupClass.remove("has-success");
};
const hasSuccess = (group, label, controlLabel) => {
  const groupClass = group.classList;
  groupClass.remove("has-error");
  groupClass.add("has-success");
  controlLabel.innerText = label;
};

const validateZipcode = (control, controlLabel) => {
  const group = control.parentElement;
  const label = "Zip code";
  if (control.value.match(/^(?:[0-8]\d|9[0-8])\d{3}$/) === null) {
    hasError(group);
    controlLabel.innerText = `${label}: Not a valid French zip code!`;
  } else {
    hasSuccess(group, label, controlLabel);
  }
};

const validateMobile = (control, controlLabel) => {
  const group = control.parentElement;
  const label = "Mobile phone";
  if (control.value.match(/^(33|0)(6|7|9)\d{8}$/) === null) {
    hasError(group);
    controlLabel.innerText = `${label}: Not a valid French mobile phone number!`;
  } else {
    hasSuccess(group, label, controlLabel);
  }
};

const validateEmail = (control, controlLabel) => {
  const group = control.parentElement;
  const label = "Email address";
  if (control.value.match(/[^@]+@[^.]+\..+/) === null) {
    hasError(group);
    controlLabel.innerText = `${label}: Not a valid Email!`;
  } else {
    hasSuccess(group, label, controlLabel);
  }
};

const blurEvent = (event) => {
  const control = event.target;
  const group = control.parentElement;
  const label = capitalize(control.id).replace("_", " ");
  const controlLabel = group.querySelector(".control-label");
  if (control.value === "") {
    hasError(group);
    controlLabel.innerText = `${label}: All fields are required!`;
  } else if ((control.value !== "") && (control.id === 'email')) {
    validateEmail(control, controlLabel);
  } else if ((control.value !== "") && (control.id === 'zip_code')) {
    validateZipcode(control, controlLabel);
  } else if ((control.value !== "") && (control.id === 'mobile_phone')) {
    validateMobile(control, controlLabel);
  } else {
    hasSuccess(group, label, controlLabel);
  }
  enableSubmit(group);
};
const clickEvent = (event) => { formGroups.forEach(enableSubmit); };
const addBlurControl = (group) => { group.lastElementChild.addEventListener("blur", blurEvent); };

formGroups.forEach(addBlurControl);
checkbox.addEventListener("click", clickEvent);

// reapply validations before accepting submit?
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
