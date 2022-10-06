import BlogList from "./BlogList";
import useFetch from "../Hooks/useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('https://my-json-server.typicode.com/rakeshbodavula/BlogsProjectJSONServer')
    return (
        <div className="content">
            {isPending && <div>Loading</div>}
            {error && <div>{error}</div>}
            {blogs && <BlogList blogs={blogs}></BlogList>}
        </div>
    );
}

export default Home;