import Hello from "@/app/components/hello";


const Home = () => {
    console.log("Am a server component");
    return (
        <div>
           <h1 className="text-5xl underline bold italic">Welcome to nextJS</h1>
            <Hello></Hello>
        </div>
    );
}
export default Home
