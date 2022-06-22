import SideBar from "components/sidebar/sidebar";
const HtService = () =>{

    return (
        <section className="cursor-pointer w-screen  flex flex-row">
           <SideBar />
            <section className="bg-slate-100 w-screen p-5 flex flex-col space-y-6">
               <h1 className="text-lg font-bold">HIV Treatment Reports</h1>
               <section className=" flex flex-col justify-center items-center">
             <iframe title="ICDR" className="w-full h-screen" src="https://app.powerbi.com/view?r=eyJrIjoiMTNjMzI1ZDItMDNjNy00MDhlLTg2NWEtOGY3NGZmNzBhOTlmIiwidCI6IjYyNjg2NDAwLTllZjMtNDBkOS04ZTQxLWRiMTUzNzRiZTViZSJ9&pageName=ReportSection4085bdd19e799631e1a3" frameBorder="0"></iframe>
               </section>
            </section>
        </section>
    );
}

export default HtService;
