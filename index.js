import { AppRegistry } from 'react-native';
import GameApp from './game-app/App';
import ManagerApp from "./manager-app/App";

AppRegistry.registerComponent('FriendlyWords', () => GameApp);
AppRegistry.registerComponent('FriendlyWordsManager', () => ManagerApp);

