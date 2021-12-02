import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Student = () => {
    const [student, setStudent] = useState({})
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams()

    const getStudentById = (id) => {
        fetch(`${process.env.REACT_APP_API_URL}student/${id}`, {
        method: 'GET',
        headers: {
            'x-hasura-admin-secret': process.env.REACT_APP_HASURA_SECRET
        },
        }).then(response => response.json())
        .then(result => {
            setIsLoaded(true)
            setStudent(result.students_by_pk)
        })
    }

    useEffect(()=>{
        getStudentById(params.StudentId)
    }, [isLoaded])
    
    if (!isLoaded) return <p>Loading...</p>

    return (
        <>
            <h1>Student Profile</h1>
            <hr />
            <h2>Name:</h2>
            <span>{student?.name}</span>
            <h3>ID</h3>
            <span>{params.StudentId}</span>
        </>
    )
}

export default Student