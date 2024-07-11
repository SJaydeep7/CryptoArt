import { useState } from "react";

import Header from '../Components/Header/Header';
import "../Components/Header/Header.module.css";
import images from "../Jsons/Images.json";
import "../Components/Header/Header.module.css";


const HomePage = () => {


  const [categoryImage, setCategoryImage] = useState(images.categories.all)

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter(item => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0]
        return item.toLowerCase().includes(titleSplited)
      })
      return [...images.categories[categoryChoose]]
    })
  }

  return (
    <>
     <Header />
    </>

  )
}

export default HomePage