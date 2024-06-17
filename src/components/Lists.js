import "./Lists.css";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from '@mui/icons-material/Delete';
import CancelIcon from '@mui/icons-material/Cancel';
export const List=({ todoList ,handletoggle,handleDelete})=>{
    return (
     <ul className='list'>
        {
        todoList.map((listItem)=>{
            return (
                <li key={listItem.id}>
                    <span>{listItem.item}</span>
                    <span className="action">
                        {
                            listItem.done?<CancelIcon onClick={()=>handletoggle(listItem.id)}/>: <CheckBoxIcon onClick={()=>handletoggle(listItem.id)}/>
                        }
                       
                        <DeleteIcon onClick={()=>handleDelete(listItem.id)}/>
                    </span>
                </li>
            );
        })
        }
       

    </ul>
    );

};
export default List;