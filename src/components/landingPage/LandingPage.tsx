import { fetchUsers } from "../../utilities/FetchData";
import { API_URL } from "../../constants/API_URL";
import { useEffect } from "react";

const LandingPage: React.FC = () => {
    useEffect(() => {
        fetchUsers(API_URL, 'users')
    }, [])

    return (
        <div>
            <h1>Landing Page</h1>
        </div>
    )
}

export default LandingPage;