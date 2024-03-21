
function CheckBox ({setCheck, label, isChecked, index}) {

    return(
        <div>
            <label>{label}</label>
            <input  type="checkbox" 
                    checked={isChecked}  
                    onClick={(e) => setCheck(e.target.checked, index)}/>
        </div>
    )
}

export default CheckBox;