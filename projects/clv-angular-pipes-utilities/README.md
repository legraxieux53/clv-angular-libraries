# ClvAngularPipesUtilities

Customs pipes.

## Install

Run `npm i clv-angular-pipes-utilities -s` to install this package.
<br>
In your module import `ClvAngularPipesUtilitiesModule` 

## APIs
### `clvSeparatorThousand` pipe 
 Adds a separator from thousands. Take two parameters. the first is the number of digits after the decimal point, in the case of a decimal number. The second is the display mode. it can have the values DEFAULT, DECIMAL_MANDATORY or DECIMAL_OPTIONAL
### `objectSumField` pipe 
 Performs the sum of a file field
### `clvBoolToStr` pipe
 Convert a boolean to a string
###`clvCorrespondToInArray` pipe
  Search in a list of objects and replace the displayed value of the corresponding field with that of another. It takes three parameters. the first is the array (required), the second is the original field (required) and the third is the target field (required)
