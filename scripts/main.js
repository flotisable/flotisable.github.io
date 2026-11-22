const defaultTheme      = localStorage.getItem( "colorTheme" );

var colorSchemeElement  = document.getElementById( "colorScheme"  );
var lightThemeButton    = document.getElementById( "lightTheme"   );
var darkThemeButton     = document.getElementById( "darkTheme"    );

if( defaultTheme )
{
  console.log( "using default theme " + defaultTheme );
}

switch( defaultTheme )
{
  case "light": colorSchemeElement.setAttribute( "href", "/styles/light.css" ); break;
  case "dark":  colorSchemeElement.setAttribute( "href", "/styles/dark.css" ); break;
  default:      console.log( "no default theme found" );
}

lightThemeButton.addEventListener( "click", () =>
{
  console.log( "apply light theme from event" );
  colorSchemeElement.setAttribute( "href", "/styles/light.css" );
  localStorage.setItem( "colorTheme", "light" );
} );

darkThemeButton.addEventListener( "click", () =>
{
  console.log( "apply dark theme from event" );
  colorSchemeElement.setAttribute( "href", "/styles/dark.css" );
  localStorage.setItem( "colorTheme", "dark" );
} );
