import { MenuItems } from "./MenuItems"

export const Menu = ({items}) => {
  return (
    <div className="section-center">
        {
            items.map((menuItem) => {
                return <MenuItems key={menuItem.id} {...menuItem} />
            })
        }
    </div>
  )
}
