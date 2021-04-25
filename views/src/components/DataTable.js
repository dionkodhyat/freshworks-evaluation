import React, {useState, useEffect} from 'react'
import Table from 'react-bootstrap/Table'



const DataTable = () => {
    const [data, setData] = useState([])
    // const url = "http://localhost:9000/data"
    const url = "https://dion-fw-heroku.herokuapp.com/"

    const getData = async () => {
        try {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
        } catch (err) {
            alert("Cannot fetch data at this time")
        }
    }

    useEffect(() => {
        getData()
    }, [])
    

    return (
        <div>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th>Entry</th>
                        <th>Number of Ducks</th>
                        <th>Park Name</th>
                        <th>Time Fed</th>
                        <th>Food Name</th>
                        <th>Food Amount (g)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((entry, i) => {
                        let {park_name, time_fed, food_quantity, food_name, group_size} = entry;
                        time_fed = time_fed.split(':');
                        time_fed = `${time_fed[0]}:${time_fed[1]}`
                        return (
                            <tr key={i}>
                                <td><b>{i+1}</b></td>
                                <td>{group_size}</td>
                                <td>{park_name}</td>
                                <td>{time_fed}</td>
                                <td>{food_name}</td>
                                <td>{food_quantity}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

export default DataTable
