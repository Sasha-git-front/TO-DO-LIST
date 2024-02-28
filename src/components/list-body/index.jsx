import React from 'react'
import './listbody.css'
import deleteImage from '../../img/delete.png';
import editImage from '../../img/edit.png';


function ListBody({ dates, deleteData, editData }) {
    return (
        <>
            {Array.isArray(dates) && dates.length > 0 ?
                dates.map((data, i) => {
                    return (
                        <div className="listbody" key={i}>
                            <span>{`${i + 1}. ${data}`}</span>
                            <div className="listbody_img">
                                <img src={editImage} alt="edit" onClick={() => { editData(data) }}></img>
                                <img src={deleteImage} alt="Delete" onClick={() => deleteData(data, i)} />
                            </div>
                        </div>
                    )
                })
                : <div>NO DATA</div>
            }
        </>
    );
}
export { ListBody }