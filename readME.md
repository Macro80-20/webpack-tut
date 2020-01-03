Browser Caching

If the file didnt change between the page reloads we take th file in our cache

however if we change the file and fix bug but the browser always uses the old file how do we finesse this user.
we can create a new file with a new name everytime we make a change . we dont need to change it manually everytime webpack ca ndo this

mode enables certaion optimiztion builds for products and dev

when i imported lodash the first time and ran the bundle it 70kb very big for couple lines of code, secondly it was includes in both budnles

webpack has a mechansim that can extract lodash and any other common dependencies into its own bundle
so we need to add a new config option right below the mode called optimiszation
then after running build
it creartes another budle called vendors which will be cached seprateel and users wont have to download it again when we chang something in js
since we havea new bundle how does webpack know where to include it?
so i need to specically tell webpack to include it in every html page that needs it
