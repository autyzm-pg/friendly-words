# About
Friendly Words is a game supporting behavioral therapy for children with autism. It provides digital version of choose correct word game.
It allows children to learn new words by associating pronunciation with the picture.

More about autism and challenges: https://www.autismspeaks.org/what-autism/symptoms

# Workflow
We are using [GitHub Flow](https://guides.github.com/introduction/flow/). Please create pull requests to master branch when contributing.

# How to start
* follow the [React Native installation tutorial](https://facebook.github.io/react-native/docs/getting-started). Pick the variant "Building projects with native code". Install all the dependencies mentioned in the tutorial (react-native-cli, Android SDK, etc.)
* Install [yarn](https://yarnpkg.com/lang/en/)
* clone project from [Friendly Words Github](https://github.com/autyzm-pg/friendly-words)
* Install dependencies by running command `yarn install` from the project root directory
* Run an Android emulator or connect an Android device using a USB cable. Make sure to turn on debugging mode on the device.
* Run command `react-native run-android` from the project's root. It should automatically build the application, install .apk on a connected device or emulator and run a react-native packager in new terminal window.
* app should be up and running. Be aware that application is using TextToSpeech service to automatically read instructions, so watch out for your volume settings
* if the application doesn't run even though it has been successfully built, try the following:
  * close the packager and the application
  * run `react-native start` - it should start the packager alone, without any building
  * find the application in installed apps on the device and run it

## Basic knowledge 
If you are unfamiliar with React Native, take a look at the following articles:
 * getting started tutorial 
 https://facebook.github.io/react-native/docs/getting-started.html
 * react native tutorial 
 https://facebook.github.io/react-native/docs/tutorial.html
 * excercises, examples and interactive docs 
 http://www.reactnativeexpress.com/todo_list
 

