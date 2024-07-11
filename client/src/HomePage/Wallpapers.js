import { useState } from "react";

// import styles of this component
import styles from "./App.module.css"

// import other components to use
import Header from '../Components/Header/Header';
import MasonryLayout from '../Components/MasonryLayout/MasonryLayout';
import ContainerCard from '../Components/ContainerCard/ContainerCard';
import Dropdown from '../Components/Elements/Dropdown/Dropdown';

import images from "../Jsons/Images.json"

// App component


const Wallpapers = () => {
  // dropdown items
  

  const [categoryImage, setCategoryImage] = useState(images.categories.all)

  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter(item => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0]
        return item.toLowerCase().includes(titleSplited)
      })
      return [ ...images.categories[categoryChoose] ]
    })
  }

  return (
    <>
  
       
        <div className="flex justify-content-center" style={{  padding: '40px' }}>
          <ContainerCard>
              <div className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}>
                <h1>All images</h1>
  
              </div>
              <MasonryLayout images={categoryImage} />
          </ContainerCard>
          
        </div>
  


    </>

  )
}

export default Wallpapers