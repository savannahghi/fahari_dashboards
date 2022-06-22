import SideBar from '../../components/sidebar/sidebar';
 
const CovidDashBoard = () =>{

    return (
        <section className="cursor-pointer w-screen h-screen flex flex-row">
           <SideBar />
            <section className="bg-slate-100 w-screen p-5 flex flex-col space-y-6">
               <h1 className="text-lg font-bold">Covid Reports</h1>
               <section className="flex flex-col justify-center items-center">
               <iframe title="Covid-19" className="w-full h-screen" src="https://app.powerbi.com/view?r=eyJrIjoiZGUyZjJlMzctMzhlYS00MzAyLTk1MTAtN2RjZTkzYmQ0Y2MwIiwidCI6IjYyNjg2NDAwLTllZjMtNDBkOS04ZTQxLWRiMTUzNzRiZTViZSJ9&pageName=ReportSection" frameBorder="0" ></iframe>
               </section>
            </section>
        </section>
    );
}

export default CovidDashBoard;