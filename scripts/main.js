var colorSchemeElement  = document.getElementById( "colorScheme"  );
var lightThemeButton    = document.getElementById( "lightTheme"   );
var darkThemeButton     = document.getElementById( "darkTheme"    );

lightThemeButton.addEventListener( "click", () =>
{
  console.log( "apply light theme from event" );
  colorSchemeElement.setAttribute( "href", "/styles/light.css" );
} );

darkThemeButton.addEventListener( "click", () =>
{
  console.log( "apply dark theme from event" );
  colorSchemeElement.setAttribute( "href", "/styles/dark.css" );
} );
