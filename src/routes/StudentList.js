import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function StudentList(props) {
    const [students, setStudents] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(()=>{
        fetchStudents()
    }, [isLoaded])

    const fetchStudents = () => {
        fetch(`${process.env.REACT_APP_API_URL}students`, {
        method: 'GET',
        headers: {
            'x-hasura-admin-secret': process.env.REACT_APP_HASURA_SECRET
        }
        }).then(response => response.json())
        .then(result => {
            setIsLoaded(true)
            setStudents(result.students)
        })
    }

    if (!isLoaded) return <p>loading...</p>
    
    return (
        <div style={{flex: "1 0 auto"}}>
            <h1>Students List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        students.map(student => 
                            <tr className={props.hoverable ? 'hoverable' : ''} key={student.id}>
                                <td><Link to={`/student/${student.id}`}>{student.id}</Link></td>
                                <td>{student.name}</td>
                            </tr>
                        )
                    }
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default StudentList