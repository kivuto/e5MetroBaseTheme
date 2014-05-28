e5MetroBaseTheme
================

e5 theme built with sass. This theme is meant to be customized and exported as a css to be used as an e5 attachment

###In this repo you will find###
*	theme.scss
	*	The SASS file used for changing the theme.
*	theme.css
	*	The CSS file that the website will load. This **DOES NOT** need to be edited and will be updated automatically.
*	index.html
	*	A test e5 site that will read theme.css.
*	assets_files
	*	All required files for the index.html to work. Don't worry about this one.

###You will need
*	The repo files!
*	Koala App (Recommended!) or other SASS compiler.
*	**OR** Ruby Installed to control SASS with Command Line.
	*	[See here for more details on setting up SASS.](http://sass-lang.com/install)

##Theme Editing

Editing the theme is very simple when using SASS!

1.	Open the theme.scss file in your editor.
2.	Scroll down to Section `X. SASS ELEMENTS`
3.	Each variable in `SASS ELEMENTS` controls different theme colours.
	*	You can change the overall font here as well.
1. Simply change the colour code (ie. #ffffff) to the desired colour for each set of elements.

The following outlines what variable effects what

- **$background**
	- sites main background colour.
- **$widgetBackground**
	- background colour of content boxes.
- **$mainColour**
	- navigation header colour.
	- Imageless header font.
- **$secondColour**
	- navigation header inactive tab colour 
	- content box headers.
	- content box borders 
- **$fontColour**
	- Standard font colour
- **$subFontColour**
	- Site version number in footer
	- Small info text under products
- **$linkColour**
	- Standard link colours
- **$productLinkColour**
	- Colour of links in content boxes
- **$navLinkActive**
	- Navigation Active tab font colour.
- **$navLinkInactive**
	- Navigation Inactive tab font colour.
- **$headerTextColour**
	- Large text headers in content boxes
- **$mainFont**
	- Font family for the entire page.

.........................
### Koala ###

1. Once changes have been made, save the file and open Koala.
3. Add a folder and navigate to the SCSS file.
4. Hit compile, and the app will create the correct CSS file.
5. You will then be able to see your changes in the index.html test file.
6. Leave Koala open in the background while changing the SCSS file, and it will compile automatically whenever you save the SCSS. This will make it easy to make and check changes.
 