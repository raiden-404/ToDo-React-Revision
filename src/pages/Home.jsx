import Card from "../components/Card";

const Home = () => {
    const tools = [
        {
            name : "To-Do",
            icon : "📥",
            description : "Maintains your checklist",
            path : "todo"
        }
    ]
    return (
        <div className="bg-gray-800 h-[100vh] text-white w-[100vw] pt-20 d">
            {/* All components cards here */}
            <h1 className="text-4xl underline font-semibold mt-12 ms-10">Tools</h1>
            <div className="flex flex-wrap gap-4 p-6">
                {
                    tools.map((item) => <Card key={item.path} name={item.name} icon={item.icon} description={item.description} path={item.path} />)
                }
            </div>
        </div>
    )
}
export default Home;