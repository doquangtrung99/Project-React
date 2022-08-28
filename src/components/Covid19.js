import React from "react";
import moment from 'moment'
import '../styles/Covid.scss'
import useFetch from "./Fetch";

const Covid = () => {

    const today = moment().startOf('day').toISOString(true)
    const priorDate = moment().startOf('day').subtract(31, "days").toISOString(true)

    const { data, loading, err } = useFetch(`https://api.covid19api.com/country/vietnam?from=${priorDate}&to=${today}`, true)

    return (
        <>

            <table>
                {loading === true &&
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Confirmed</th>
                            <th>Deaths</th>
                            <th>Recovered</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                }
                <tbody>
                    {loading === true && data && data.length > 0 && data.map(item => {
                        return (
                            <tr key={item.ID}>
                                <td>{item.Date}</td>
                                <td>{item.Confirmed}</td>
                                <td>{item.Deaths}</td>
                                <td>{item.Recovered}</td>
                                <td>{item.Active}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {loading === false &&

                <div>is Loading ....</div>

            }

            {err === true &&

                <div>Something's wrong ....</div>

            }
        </>
    )

}
export default Covid;