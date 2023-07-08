import "./style.scss";

// import '../../../../src/input.scss';
// import '../../../../src/popover.scss';
// import '../../../../src/select.scss';
// import '../../../../src/icon.scss';
// import '../../../../src/button.scss';

import "fundamental-styles/dist/button.css";
import "fundamental-styles/dist/page.css";
import "fundamental-styles/dist/text.css";
import "fundamental-styles/dist/bar.css";
import "fundamental-styles/dist/icon.css";
import "fundamental-styles/dist/shellbar.css";
import "fundamental-styles/dist/form-group.css";
import "fundamental-styles/dist/form-item.css";
import "fundamental-styles/dist/form-label.css";
import "fundamental-styles/dist/form-layout-grid.css";
import "fundamental-styles/dist/form-header.css";
import "fundamental-styles/dist/input.css";
import "fundamental-styles/dist/textarea.css";
import "fundamental-styles/dist/checkbox.css";
import "fundamental-styles/dist/fieldset.css";
import "fundamental-styles/dist/dialog.css";
import "fundamental-styles/dist/illustrated-message.css";
import "fundamental-styles/dist/illustrated-message.css";


import "fundamental-styles/dist/theming/sap_horizon.css";
import "@sap-theming/theming-base-content/content/Base/baseLib/sap_horizon/css_variables.css";

let storeId;

document.getElementById("submitButton").onclick = function () {
  const name = document.getElementById("input-name").value;
  const desc = document.getElementById("input-desc").value;
  const company = document.getElementById("input-company").value;
  const followup = document.getElementById("input-contact").checked;
  const email = document.getElementById("input-email").value;
  const title = document.getElementById("input-title").value;
  const url = document.getElementById("input-url").value;

  fetch("/api/Feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, desc, email, title, company, url, followup }),
  }).then((res) => {
    if (res.status >= 300) {
      res.json().then((returnedError) => {
        console.error(returnedError.error.message)
      })
      return console.error(res.statusText)
    }
    res.json().then((returnedObject) => {
      storeId = returnedObject.ID
    })
    document.getElementById("dialog").classList.add("fd-dialog--active");
  });
}


document.getElementById("verifyButton").onclick = function () {
  const code = document.getElementById("input-code").value;
  fetch(`/api/Feedback/${storeId}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ code }),
  }).then((res) => {
    if (res.status >= 300) {
      return console.error(res.statusText)
    }
    document.getElementById("dialog-body").classList.toggle("show-verify");
    document.getElementById("verifyButton").remove();
  });
}


document.getElementById("closeButton").onclick = function () {
  document.getElementById("dialog").classList.remove("fd-dialog--active");
  document.getElementById("dialog-body").classList.add("show-verify");
}