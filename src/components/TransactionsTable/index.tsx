import { useEffect } from 'react'
import { api } from '../../services/api';
import {Container} from './styles'

export function TransactionsTable(){

    useEffect( () => {
        api.get('/transactions')
        .then( response => console.log(response.data) );
    }, [])
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$ 6.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Notebook</td>
                        <td className="withdraw">- R$ 5.000</td>
                        <td>Investimento</td>
                        <td>20/02/2022</td>
                    </tr>
                    <tr>
                        <td>Passagem</td>
                        <td className="withdraw">- R$ 150</td>
                        <td>Despesa</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}