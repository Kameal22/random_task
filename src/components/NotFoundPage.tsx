import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', { replace: true })
        }, 1500)
    }, [])
    return (
        <div>
            <h1>Page not found</h1>
            <p>Redirecting..</p>
        </div>
    )
}

export default NotFoundPage;