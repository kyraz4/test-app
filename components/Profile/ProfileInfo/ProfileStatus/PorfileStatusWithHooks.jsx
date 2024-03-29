import React, {useState, useEffect} from 'react';

const PorfileStatusWithHooks = (props) => {

 let [editMode, setEditMode] = useState(false);
 let [status, setStatus] = useState(props.status);

 useEffect(() => {
   setStatus(props.status);
 }, [props.status]);

 const activateEditMode = () => {
  setEditMode(true);
 }

 const diactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status);
 }

 const onStatusChange = (e) => {
     setStatus(e.currentTarget.value);
 }

 return  (
        <div>
            {!editMode &&
            <div>
            <span onDoubleClick = {activateEditMode} >{props.status || 'no status'}</span>
            </div>
            }
        {editMode &&
        <div>
        <input onBlur = {diactivateEditMode}
               onChange = {onStatusChange}
               autoFocus = {true}
               value = {status} />
        </div>
        }
        </div>
        );
  }    


export default PorfileStatusWithHooks;