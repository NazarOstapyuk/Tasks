import React from 'react'
import "./App.css";
import {Route, Routes} from  "react-router-dom";
import { Dublicate } from "./component/Dublicate/Dublicate";
import { Navbar } from "./navbar/Navbar";
import { UniqueValues } from "./component/UniqueValues/UniqueValues";
import { Form } from "./component/Form/Form";
import { EmptyDeep } from "./component/EmptyDeep/EmptyDeep";
const App=()=> {
  return (
      <div>
          <Navbar/>
        <div>
          <Routes>
            <Route path ='dublicate' element={<Dublicate/>}/>
            <Route path ='uniqueValues' element={<UniqueValues/>}/>
            <Route path ='form' element={<Form/>}/>
            <Route path ='deep' element={<EmptyDeep/>}/>
          </Routes>
        </div>

      </div>
  );
}

export default App;
