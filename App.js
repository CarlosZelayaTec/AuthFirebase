import { StatusBar } from 'expo-status-bar';
import AuthStackScreen from './src/Routes/StackConfig';

export default function App() {
  return (
    <>
      <AuthStackScreen />
      <StatusBar style='auto' />
    </>
    );
}