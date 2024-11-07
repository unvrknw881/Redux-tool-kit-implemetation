import './App.scss';
import TextComponent from './components/TextComponent';
import { useDispatch } from 'react-redux';
import { textR } from './features/TextSlice';

function App() {

  const dispatch = useDispatch();
  let handleChange = (e) => {
    console.log(e.target.value);
    dispatch(textR(e.target.value));
  }
  return (
    <center>
      <p>Hi there this is App.js file</p>
      <label htmlFor='check'>user name</label>
      <input type="text" id='check' onChange={handleChange}/>
      <TextComponent />
    </center>
  );
}

export default App;
