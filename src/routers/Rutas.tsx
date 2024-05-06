import {Switch, Route} from "react-router-dom";
import Home from '../page/Home';
import DetalleProducto from '../components/DetalleProducto'
import { useState } from "react";
const Rutas = () => {


const [userType] = useState("admin")

  return (
  <Switch>
    {userType === "admin"?  (
    <>
    <Route exact path='/home'>
        <Home />
    </Route>
    <Route exact path='/detalles/:slug'>
      <DetalleProducto />
    </Route>
    </>
    ) : (
      <>
      <Route exact path='/home'>
        <Home />
    </Route>
      </> 
    )}
  </Switch>
  )
}

export default Rutas