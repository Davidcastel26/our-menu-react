import { useState } from "react";
import menu from './data'

import { Title } from "./Title";
import { Menu } from "./Menu";
import { Categories } from "./Categories";

const allCategoriesMenu = ['all', ...new Set(menu.map((item) => item.category))]

const App = () => {

  const [menuItems, setMenuItems] = useState(menu)
  const [categories, setCategories] = useState(allCategoriesMenu)

  const filterItems = ( category ) => {
    const newItems = menu.filter(item => item.category === category)
    setMenuItems(newItems)
  }

  return (
  <main>
    <section className="menu">
      <Title text='our menu'/>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
    
  </main>);
};
export default App;
