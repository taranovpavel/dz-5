import React, {useState} from 'react';
import {Container} from "@mui/material";
import TabsComponent from "../../components/Tabs";
import SwiperComponent from "../../components/Swiper";
import OurTeam from "../../components/OurTeam";

const GetCategories=({action})=>{
    switch (action){
        case "union":{
            return <p>{action}</p>
        }case "history": {
            return <p>{action}</p>
        }
        case "organs": {
            return <p>{action}</p>
        }
        case "projects": {
            return <p>{action}</p>
        }
        case "ourTeam": {
            return <OurTeam/>
        }
        default:
            return <></>

    }
}
const MainPage = () => {
    const categoriesSelect = [
        {value: "union",label:"О нас"},
        {value: "history",label:"История"},
        {value: "organs",label:"Органы управления"},
        {value: "projects",label:"Проекты"},
        {value: "ourTeam",label:"Наша команда"}
    ]

    const [value,setValue] = useState(categoriesSelect?.[0].value)
    return (
        <Container>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
            <GetCategories action={value}/>
        </Container>
    );
};

export default MainPage;