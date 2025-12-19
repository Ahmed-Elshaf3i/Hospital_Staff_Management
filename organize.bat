@echo off
echo Organizing Project Structure...

REM Create directories if they don't exist
if not exist "js" mkdir js
if not exist "images" mkdir images
if not exist "css" mkdir css

REM Move style.css to css folder
if exist "style.css" move "style.css" "css\"

REM Move bootstrap.bundle.min.js to js folder
REM (It seems to be currently in the css folder based on your context)
if exist "css\bootstrap.bundle.min.js" move "css\bootstrap.bundle.min.js" "js\"

echo.
echo File structure organized successfully!
pause
