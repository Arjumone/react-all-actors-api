

const Actor = ({actor,handleSalary}) => {
    // console.log(actor);
    const{name,image,age,salary}=actor
    return (
        <div className="my-5 border-2 p-6 bg-slate-200">
            <img src={image} alt="" />
            <h2 className="text-2xl">{name}</h2>
            <div className="flex">
                <h2 className="mr-3 font-bold">Age:{age}</h2>
                <h2 className="font-bold">Salary:{salary}</h2>
                <div className="text-center">
                <button onClick={()=>handleSalary(salary,age)} className="btn">calculator salary</button>
                </div>
            </div>
        </div>
    );
};

export default Actor;