
  const dailyOption = document.getElementById("daily-option");
  const weeklyOption = document.getElementById("weekly-option");
  const monthlyOption = document.getElementById("monthly-option");

  const dailyInfo = document.querySelectorAll("#daily-info");
  const weeklyInfo = document.querySelectorAll("#weekly-info");
  const monthlyInfo = document.querySelectorAll("#monthly-info");

  // Add click event listeners
  dailyOption.addEventListener("click", () => {
    dailyInfo.forEach((element) => {
      element.style.display = "block";
    });

    weeklyInfo.forEach((element) => {
      element.style.display = "none";
    });

    monthlyInfo.forEach((element) => {
      element.style.display = "none";
    });
  });

  weeklyOption.addEventListener("click", () => {
    dailyInfo.forEach((element) => {
      element.style.display = "none";
    });

    weeklyInfo.forEach((element) => {
      element.style.display = "block";
    });

    monthlyInfo.forEach((element) => {
      element.style.display = "none";
    });
  });

  monthlyOption.addEventListener("click", () => {
    dailyInfo.forEach((element) => {
      element.style.display = "none";
    });

    weeklyInfo.forEach((element) => {
      element.style.display = "none";
    });

    monthlyInfo.forEach((element) => {
      element.style.display = "block";
    });
  });

