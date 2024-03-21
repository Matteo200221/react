import Book from './Book.js';
import Books from './Books.js';

function Home() {
	
	return (
		
		<table border="1px" align="center">
			<tr>
				<td><Book titolo="Harry potter e la pietra filosofale" abstract="Mago che tira magie"/></td>
				<td>
					<Books>
						<Book titolo="Harry potter e la pietra filosofale" abstract="1"/>
						<Book titolo="ShadowHunter" abstract="2"/>
						<Book titolo="Il signore degli anelli" abstract="3"/>
					</Books>
				</td>
			</tr>
			<tr>
				<td>Zanna Bianca</td>
				<td>
					<Books>
						<Book titolo="Zanna Bianca" abstract="1"/>
						<Book titolo="Cuore di tenebra" abstract="2"/>
						<Book titolo="Il giro del mondo in 80 giorni" abstract="3"/>
					</Books>
				</td>
			</tr>
		</table>
	);
}

export default Home;