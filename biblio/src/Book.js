
function Book(props) {
	
	return (
		<div>
			<label>{props.titolo}</label><br/>
			
			<label>{(props.booleano == "true" ? props.abstract : "")}</label>
		</div>
	);
}

export default Book;