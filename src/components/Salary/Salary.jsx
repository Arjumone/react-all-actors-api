

const Salary = ({salarys,ages}) => {
    return (
        <div>
            <h2 className="text-4xl font-semibold">All salary:{salarys}</h2>
            <p>{ages}</p>
        </div>
    );
};

export default Salary;