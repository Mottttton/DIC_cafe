$(function hideNav() {
  const button = $("#drop_menu_btn");
  const navDropMenu = $("#drop_menu")
  
  button.click(function() {
    // navDropMenu.toggle(".hide_element")
    navDropMenu.toggle("500", "swing")
  })
})