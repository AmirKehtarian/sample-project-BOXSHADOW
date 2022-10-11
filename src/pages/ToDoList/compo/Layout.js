import '../../ToDoList/ToDoList.css'


const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className='layout-row'>
        {children}
      </div>
    </div>
  )
}

export default Layout