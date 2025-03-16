import React from 'react';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Body.css';
import Detail from './Detail';
import {FormattedMessage} from 'react-intl';



function Body() {

    const [data, setData] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [detailInfo, setDetailInfo] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/robots")
        .then(data => data.json())
        .then(data => {setData(data)
                        
        })
    }, [])

    useEffect(() =>
        {setTableData(data.map((robot, index) => (
            <tr key={robot.id} onClick={() => handleRowClick(robot)}>
                <td >{robot.id}</td>
                <td>{robot.nombre}</td>
                <td>{robot.modelo}</td>
                <td>{robot.empresaFabricante}</td>
            </tr>
        )))}, [data]);
    
    function handleRowClick(robot) {
        setDetailInfo(robot);
    }

    useEffect(() => {
        console.log(detailInfo);
    }, [detailInfo]);

    return (
        <div className='body'>
            <div className='div-table'>
                <table className="table table-striped table-bordered table1">
                    <thead className="thead-dark table-dark">
                    <tr>
                        <th>ID</th>
                        <th><FormattedMessage id="Nombre"/></th>
                        <th><FormattedMessage id="Modelo"/></th>
                        <th><FormattedMessage id="EmpresaFabricante"/></th>
                    </tr>
                    </thead>

                    <tbody>
                        {tableData}
                    </tbody>
                </table>
                
            </div>
            <div className='div-detail'>
                <Detail info={detailInfo}></Detail>
            </div>
        </div>
        
    );
};

export default Body;