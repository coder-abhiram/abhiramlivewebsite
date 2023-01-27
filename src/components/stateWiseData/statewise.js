import React,{useState,useEffect} from 'react'
import './statewise.css';
const Statewise=()=>{

    const [data,setData]=useState([]);
    const getCovidData=async ()=>{
        const res=await fetch('https://api.rootnet.in/covid19-in/stats/latest');
        const actualData=await res.json();
        console.log(actualData.data.regional);
        setData(actualData.data.regional);

    }
    useEffect(()=>{
       getCovidData();
    },[]);

    return (
        <>
        <div className="container-fluid mt-5">
            <div className="main-heading">
                <h1 className="mb-5 text-center"><span className="font-weight-bold">INDIA</span>COVID-19 Dashboard</h1>
            </div>
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>Location</th>
                            <th>ConfirmedCasesIndian</th>
                            <th>ConfirmedCasesForeign</th>
                            <th>Discharged</th>
                            <th>Deaths</th>
                            <th>Total Confirmed</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((curElem,ind)=>{
                            return(
                        <tr key={ind}>
                            <th>{curElem.loc}</th>
                            <td>{curElem.confirmedCasesIndian}</td>
                            <td>{curElem.confirmedCasesForeign}</td>
                            <td>{curElem.discharged}</td>
                            <td>{curElem.deaths}</td>
                            <td>{curElem.totalConfirmed}</td>
                        </tr>
                            )
                        })
                    }
                        
                    </tbody>
                </table>
            </div>
        </div>
           
        </>
    )
}
export default Statewise