import React from "react";
import useFetch from "./Fetch";


const Covid = () => {

    let {data,loading,error} = useFetch('https://api.covid19api.com/country/vietnam?from=2020-10-01T00:00:00Z&to=2020-10-20T00:00:00Z')
    
    return (
       
        <div>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
                </tr>
                </thead>
                <tbody>
                {error === false && loading === false && data && data.length > 0 && data.map((item,index) => {
                    return(
                
                    <tr className="Hello" key={item.ID}>
                        <td>{item.Date}</td>
                        <td>{item.Confirmed}</td>
                        <td>{item.Active}</td>
                        <td>{item.Deaths}</td>
                        <td>{item.Recovered}</td>
                    </tr>
                
                    )
                })}
               { loading === true &&
                <tr>
                    <td colSpan={'5'} style={{textAlign:"center"}}>is loading ...</td>
                </tr>
                }
                
                { error === true &&
                <tr>
                    <td colSpan={'5'} style={{textAlign:"center"}}>Something's wrong ...</td>
                </tr>
                }
                </tbody>
               
            </table>
        </div>
    )
}

export default Covid;