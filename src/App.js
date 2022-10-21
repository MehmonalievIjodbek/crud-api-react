import EmployeeList from "./components/EmployeeList";
import React from "react";
import EmployeeContextProvider from "./context/EmployeeContext";

function App() {
    return (
        <div className='container-xl' style={{
            maxWidth: '1150px',
            margin: '0 auto',
            width: '100%'
        }}>
            <div className='table-responsive'>
                <div className='table-wrapper'>
                    <EmployeeContextProvider>
                        <EmployeeList/>
                    </EmployeeContextProvider>
                </div>
            </div>
        </div>
    );
}

export default App;
