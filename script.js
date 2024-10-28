let ThemeSwitcher = false;
function theme_Changer() {
  ThemeSwitcher = !ThemeSwitcher;
  const themeChanger_circle = document.querySelector(".theme_Changer .circle");
  const themeChanger_button = document.querySelector(".theme_Changer ");
  //
  themeChanger_circle.style.marginLeft = ThemeSwitcher ? "29px" : "0px";
  themeChanger_circle.style.color = ThemeSwitcher ? "#3B82F6" : "#1e293b";
  themeChanger_button.style.backgroundColor = ThemeSwitcher
    ? "#3b82f6"
    : "#1e293b ";

  //
  const stylesheet = document.querySelector("#stylesheet");
  stylesheet.href = ThemeSwitcher ? "darkStyle.css" : "styles.css";
}
