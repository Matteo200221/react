const db = [];

const PersonaServiceAdd = (nome) => {
	db.push(nome); 
	
}
	
const PersonaServiceList = () => {
	console.log("db");
	console.log(db);
	return db; 
	
}

export { PersonaServiceAdd, PersonaServiceList};
