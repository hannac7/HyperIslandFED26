document.addEventListener("DOMContentLoaded", () => {
    // Style the form
    const form = document.querySelector("form");
    form.style.maxWidth = "400px";
    form.style.margin = "0 auto";
    form.style.padding = "20px";
    form.style.border = "1px solid #B0C4DE"; // Light blue border
    form.style.borderRadius = "8px";
    form.style.backgroundColor = "#F8FAFD"; // Very light blue background
    form.style.fontFamily = "'Helvetica Neue', Arial, sans-serif";
  
    // Style all labels
    const labels = document.querySelectorAll("label");
    labels.forEach((label) => {
      label.style.display = "block";
      label.style.marginBottom = "5px";
      label.style.fontWeight = "500";
      label.style.color = "#2A6FB5"; // Dark blue text
      label.style.fontSize = "14px";
    });
  
    // Update label text dynamically
    labels.forEach((label) => {
      if (label.htmlFor) {
        label.textContent = "Enter your " + label.htmlFor;
      }
    });
  
    // Style all inputs
    const inputs = document.querySelectorAll("input, textarea, select");
    inputs.forEach((input) => {
      input.style.width = "100%";
      input.style.padding = "10px";
      input.style.marginBottom = "15px";
      input.style.border = "1px solid #B0C4DE"; // Light blue border
      input.style.borderRadius = "4px";
      input.style.boxSizing = "border-box";
      input.style.fontSize = "14px";
      input.style.backgroundColor = "#FFFFFF"; // White background for contrast
    });
  
    // Add focus effect to inputs
    inputs.forEach((input) => {
      input.addEventListener("focus", () => {
        input.style.borderColor = "#2A6FB5"; // Dark blue border on focus
        input.style.boxShadow = "0 0 4px rgba(42, 111, 181, 0.5)";
      });
      input.addEventListener("blur", () => {
        input.style.borderColor = "#B0C4DE";
        input.style.boxShadow = "none";
      });
    });
  
    // Style the submit button
    const submitButton = document.querySelector("input[type='submit']");
    submitButton.style.backgroundColor = "#2A6FB5"; // Dark blue button
    submitButton.style.color = "white";
    submitButton.style.border = "none";
    submitButton.style.padding = "10px 15px";
    submitButton.style.fontSize = "16px";
    submitButton.style.cursor = "pointer";
    submitButton.style.borderRadius = "4px";
    submitButton.style.transition = "background-color 0.3s ease";
  
    submitButton.addEventListener("mouseover", () => {
      submitButton.style.backgroundColor = "#1E4F8E"; // Slightly darker blue on hover
    });
    submitButton.addEventListener("mouseout", () => {
      submitButton.style.backgroundColor = "#2A6FB5";
    });
  
    // Style the form's background and spacing
    document.body.style.backgroundColor = "#EAF2FB"; 
    document.body.style.margin = "0";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";
  });
  