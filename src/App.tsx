import { Navbar } from './components/Navbar';
import { Context } from './components/concepts/1_Context';
import { Interaction } from './components/concepts/2_Interaction';
import { ReusingComponents } from './components/concepts/3_ReusingComponents';
import { Timelines } from './components/concepts/4_Timelines';

function App() {
  // let a: any;

  return (
    <>
      <Navbar />
      <Context />
      <Interaction />
      <ReusingComponents />
      <Timelines />
    </>
  );
}

export default App;
