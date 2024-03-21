const CustomCheckbox = ({cambiaInput, testo, isChecked, index}) => {
    return (
        <div>
            <label> {testo} </label>
            <input  type="checkbox" 
                    defaultChecked={isChecked}
                    onClick={(e) => cambiaInput(e.target.checked, index)} />
        </div>
    )
}

export default CustomCheckbox