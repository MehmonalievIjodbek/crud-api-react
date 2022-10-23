import React, {useEffect, useState} from 'react';
import Employee from "./Employee";
import {useContext} from "react";
import {EmployeeContext} from "../context/EmployeeContext";
import {Alert, Button, Modal} from "react-bootstrap";
import AddForm from "./AddForm";
import Pagination from "./Pagination";


const EmployeeList = () => {

    const {employees} = useContext(EmployeeContext);

    const [showAlert, setShowAlert] = useState(false)

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    //const handleShowAlert = () => setShowAlert(true) ;

    const [currentPage, setCurrentPage] = useState(1)
    const [employeesPerPage] = useState(2)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
        }, 2000)
    }

    useEffect(() => {
        handleClose()

        return () => {
            handleShowAlert()
        }
    }, [employees])
    return (
        <>
            <div className='table-title'>
                <div className='row'>
                    <div className='col-sm-6'>
                        <h2>Manage <b>Employes</b></h2>
                    </div>
                    <div className='col-sm-6'>
                        <Button onClick={handleShow} type="button" className='btn btn-success' data-toggle='modal'><i
                            className='material-icons'>&#xE147;</i><span>Add New Employee</span></Button>

                    </div>
                </div>
            </div>

            <Alert show={showAlert} variant="success" >
                    Employee List Updated Succefully
            </Alert>


            <table className='table table-striped table-hover' style={{
                width: '100%',
                textAlign: "left",

            }}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    employees.sort((a,b) => (a.name < b.name ? -1 : 1)).map(employee => (
                        <tr key={employee.id}>
                            <Employee employee={employee}/>
                        </tr>
                    ))
                }
                </tbody>
            </table>

            <Pagination>

            </Pagination>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Employee
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddForm />
                </Modal.Body>

                <Modal.Footer>
                            <Button variant='secondary' onClick={handleClose}>
                                Close Button
                            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EmployeeList;