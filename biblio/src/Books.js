
function Books(props) {
	
	let lista = [];
	for (let i = 0; i < props.children.length; i++) {
		lista.push(<li>{props.children[i]}</li>);		
	}
	
	return (
	<div>
		<ul>
			{lista}
		</ul>
	</div>
	
	);
}

export default Books;