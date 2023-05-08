import { onValue, ref } from "firebase/database";
import React,{useEffect, useState} from "react";
import {db} from '../../firebase'

import './Admin.css'

function Admin(){
    const [isLoading, setLoading] = useState(true);
    const [dataVisit, setDataVisit] = useState([]);
    const [term, setTerm] = useState("")

    useEffect(() => {
        getDataVisitor()
    }, [])

    function someRequest() {
        //Simulates a request; makes a "promise" that'll run for 2.5 seconds
        return new Promise((resolve) => setTimeout(() => resolve(), 4500));
      }
    
      
      
      // useEffect(() => {
      //   someRequest().then(() => {
      //     const loaderElement = document.querySelector('.loader-container');
      //     if (loaderElement) {
      //       loaderElement.remove();
      //       setLoading(!isLoading);
      //     }
      //   });
      // });
    
      // if (isLoading) {
      //   //
      //   return null;
      // }

    //   useEffect(() => {
    //     getDataVisitor()
    //   }, [])

      function getDataVisitor(){
        onValue(ref(db), snapshot => {
            setDataVisit([])
            const data = snapshot.val();
            if(data !== null){
                Object.values(data).map(data => {
                    setDataVisit(oldArray => [...oldArray,data ])
                })
            }
        })
      }

      function searchingFor(term){
        return function(x){
            return( 
            x.tanggal.toLowerCase().includes(term.toLowerCase()) ||
            !term
            )
        }
    }

      const mapingData = () => {

        if(dataVisit.length > 0){
            return dataVisit.filter(searchingFor(term)).map((item,index) => {
                return(
                    <a href={`https://api.whatsapp.com/send/?phone&text=Data%20Konsumen%0A%0Anama%3A%20${item.name}%0Aemail%3A%20${item.email}%0Ano.%20hp%3A%20${item.noHp}`} target="_blank" class="divTableRow">
                            <div class="divTableCell">{item.name}</div>
                            <div class="divTableCell">{item.noHp}</div>
                            <div class="divTableCell">{item.email}</div>
                            <div class="divTableCell">{item.statusKerja}</div>
                            </a>
                )
            })
        }

      }

      console.log(term);
    return(
        <main className="admin-container" >
            <h1>Dashboard BCI</h1>

            <section className="data-visitor" >
                <h2>Data Visitor</h2>
                
                <div className="filter-data" >
                    <input onChange={(e) => {setTerm(e.target.value)}} type="date" />
                    {/* <button>Filter</button> */}
                </div>
                <div class="divTable paleBlueRows">
                    <div class="divTableHeading">
                        <div class="divTableRow">
                        <div class="divTableHead">Nama</div>
                        <div class="divTableHead">No.Hp/WA</div>
                        <div class="divTableHead">Email</div>
                        <div class="divTableHead">Status Kerja</div>
                        </div>
                    </div>
                    <div class="divTableBody">
                        {mapingData()}
                        {/* {dataVisit.map(item => {
                            return(
                                <a href="#" target="_blank" class="divTableRow">
                            <div class="divTableCell">{item.name}</div>
                            <div class="divTableCell">{item.noHp}</div>
                            <div class="divTableCell">{item.email}</div>
                            <div class="divTableCell">{item.statusKerja}</div>
                            </a>
                            )
                            
                        })} */}
                    </div>
</div>   

            </section>
        </main>
    )

}

export default Admin;