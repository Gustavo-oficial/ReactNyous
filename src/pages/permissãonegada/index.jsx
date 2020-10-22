import React from 'react';
import { Container } from 'react-bootstrap';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';

const SemPermissao = () => {
    return (
        <div>
            <Menu />
            <Container>
                <h1> Voce não tem permissão para acessar a pagina!</h1>
            </Container>
            <Rodape />
        </div>
    )

}

export default SemPermissao;