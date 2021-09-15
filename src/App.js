
import GetApi from './API/GetApi';
import PostApi from './API/PostApi';
import './App.css';
import { ContextParent } from './Component/Context/ContextParent';
import { ObjectUseState } from './Component/ImmutableState/ObjectUseState';
import { ParentFour } from './Component/IncorrectOptimization/ParentFour';
import { ParentThree } from './Component/IncorrectOptimization/ParentThree';
import { ChildOne } from './Component/Optimization/ChildOne';
import { GrandParent } from './Component/Optimization/GrandParent';
import { ParentOne } from './Component/Optimization/ParentOne';
import { ParentTwo } from './Component/Optimization/ParentTwo';

import { UseReducer } from './Component/UseReducer/UseReducer';
import { UseState } from './Component/UseState/UseState';
import ArrayList from './Components/ArrayListOne';
import ArrayListThree from './Components/ArrayListThree';
import ArrayListTwo from './Components/ArrayListTwo';
import Controlled from './Components/Controlled';
import Fragment from './Components/Fragment';
import Hoc from './Components/HOC';
import NestedArrayList from './Components/NestedArrayList';
import ParentData from './Components/Parent';
import ParentRef from './Components/ParentRef';
import PureComponent from './Components/PureComponent';
import Ref from './Components/Ref';
import ReuseLoop from './Components/ReusingLoop';
import UnControlled from './Components/UnControlled';
import UseMemo from './Components/UseMemo';
import UseRef from './Components/UseRef';
import DynamicRouting from './Routing/DynamicRouting';
import Rounting from './Routing/Rounting';
import RouteOne from './Routing/RouteOne';

function App() {
  
  return (
    <div className="App">
      <PostApi/>
      {/* <GetApi/> */}
      {/* <DynamicRouting/> */}
      {/* <RouteOne/> */}
      {/* <Rounting/> */}
      {/* <Hoc/> */}
      {/* <UnControlled/> */}
      {/* <Controlled/> */}
      {/* <ParentRef/> */}
      {/* <UseRef/> */}
      {/* <Ref/> */}
      {/* <UseMemo/>
     <PureComponent/> */}
      {/* <ParentData/> */}
      {/* <Fragment/> */}
      {/* <ReuseLoop/> */}
      {/* <NestedArrayList/> */}
      {/* <ArrayListThree/> */}
      {/* <ArrayListTwo/> */}
      {/* <ArrayList/> */}
      {/* <ContextParent/> */}
      {/* <ParentFour/> */}
      {/* <ParentThree/> */}
      {/* <ParentTwo/> */}
     {/* <GrandParent/> */}
      {/* <Parent/> */}
      {/* <ObjectUseState/> */}
      {/* <UseState/> */}
      {/* <UseReducer/> */}
    </div>
  );
}

export default App;
