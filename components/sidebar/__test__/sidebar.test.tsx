import {screen, render, fireEvent} from "@testing-library/react";
import SideBar from "../sidebar";
import {useRouter} from "next/router"


jest.mock("next/router", () => {

  const push = jest.fn();

   return {
     useRouter: jest.fn(()=>({
      push: push
     })),
   };
});

describe("Unit Test sidebar component", ()=>{

    beforeEach(()=>{
      render(<SideBar />)
    });


   test("Image element should be visible", ()=>{

     const imageElement = screen.getByRole("img");
  
      expect(imageElement).toBeVisible
   });

   test("should render correct heading title", ()=>{

    const headingElement = screen.getByText(/Fahari ya Jamii/i);
    expect(headingElement).toBeVisible
   })


   test("should display all icons", ()=>{
      
     const iconELement = screen.getAllByTestId("icon");
     expect(iconELement).toBeVisible;
   });

   test("should render correct icon title", ()=>{

    const iconTitle = screen.getByText(/home/i);
    expect(iconTitle).toBeVisible
   });

   test("should render correct icon title", ()=>{
    const iconTitle = screen.getByText(/dashboards/i);
    expect(iconTitle).toBeVisible
   });

   test("should render correct icon title", ()=>{
    const iconTitle = screen.getByText(/covid-19/i);
    expect(iconTitle).toBeVisible
   });

   test("should render correct icon title", ()=>{
    const iconTitle = screen.getByText(/hiv services/i);
    expect(iconTitle).toBeVisible
   });

   test("should render correct icon title", ()=>{
    const iconTitle = screen.getByText(/Account/i);
    expect(iconTitle).toBeVisible
   });

   test("should render correct icon title", ()=>{
    const iconTitle = screen.getByText(/settings/i);
    expect(iconTitle).toBeVisible
   });
   test("should render correct icon title", ()=>{
    const iconTitle = screen.getByText(/profile/i);
    expect(iconTitle).toBeVisible
   });

   test("should render 5 visible icons", ()=>{ 
    const icon = screen.getAllByTestId("icon"); 
    expect(icon.length).toBe(5);
   });

  test("home icon should be clickable", ()=>{

    const homeIcon = screen.getByTestId("home");

    fireEvent.click(homeIcon)
   
    expect(useRouter().push).toBeCalledWith("dashboards")
  });

  test("covid icon should be clickable", ()=>{


    const homeIcon = screen.getByTestId("covid");

    fireEvent.click(homeIcon)
   
    expect(useRouter().push).toBeCalledWith("covid")
  });

  test("hiv icon should be clickable", ()=>{

    const homeIcon = screen.getByTestId("hiv");

    fireEvent.click(homeIcon)
   
    expect(useRouter().push).toBeCalledWith("hts")
  });

})