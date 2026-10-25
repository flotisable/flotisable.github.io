var   colorSchemeElement  = document.getElementById( "colorScheme" );
const params              = new URL( document.documentURI ).searchParams;

if      ( params.has( "lightTheme" ) )
{
  console.log( "apply light theme" );
  colorSchemeElement.setAttribute( "href", "/styles/light.css" );
}
else if ( params.has( "darkTheme" ) )
{
  console.log( "apply dark theme" );
  colorSchemeElement.setAttribute( "href", "/styles/dark.css" );
}
