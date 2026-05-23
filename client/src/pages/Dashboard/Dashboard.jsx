import "./Dashboard.css";

import { Navigate } from "react-router-dom";
import MyCourses from "../MyCourses/MyCourses";

function Dashboard(){

const user=

JSON.parse(

localStorage.getItem(
"user"
)

);


if(

user?.role==="admin"

||

user?.role==="instructor"

){

return(

<Navigate

to="/admin-dashboard"

/>

);

}


return(

<div className="dashboard">

<div className="container">

<h2>

Welcome Back 👋

</h2>

<p>

Continue your SAP learning journey

</p>


<MyCourses/>

</div>

</div>

);

}

export default Dashboard;