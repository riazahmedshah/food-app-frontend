import "@/App.css"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div>
            Home page...
            <Button>
                <Link to="/signup">
                    Sign up
                </Link>
            </Button>
        </div>
    )
}

export default Home