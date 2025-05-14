import axios from "axios";
import InputMask from 'comigo-tech-react-input-mask';
import React, { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';




export default function FormProduto() {

    const [titulo, setTitulo] = useState();
    const [codigoDoProduto, setCodigoDoProduto] = useState();
    const [descricao, setDescricao] = useState();
    const [valorUnitario, setValorUnitario] = useState();
    const [tempoDeEntregaMinimoEmMinutos, setTempoDeEntregaMinimoEmMinutos] = useState();
    const [tempoDeEntregaMaximoEmMinutos, setTempoDeEntregaMaximoEmMinutos] = useState();

     function salvar() {

		let clienteRequest = {
		     titulo: titulo,
		     descricao: descricao,
		     valorUnitario: valorUnitario,
		     tempoDeEntregaMinimoEmMinutos: tempoDeEntregaMinimoEmMinutos,
		     tempoDeEntregaMaximoEmMinutos: tempoDeEntregaMaximoEmMinutos
		}
	
		axios.post("http://localhost:8080/api/cliente", clienteRequest)
		.then((response) => {
		     console.log('Cliente cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um cliente.')
		})
	}




    return (

        <div>
            
            <MenuSistema tela={'Produto'} />
            

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Produto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Titulo'
                                    maxLength="100"
                                    value={titulo}
                                    onChange={e => setTitulo(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Codigo do Produto'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={codigoDoProduto}
                                        onChange={e => setCodigoDoProduto(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>

                                <Form.TextArea
                                    label='Descrição'
                                    placeholder='Informe a descrição do Produto'
                                    style={{ width: '600%' }}
                                    value={descricao}
                                    onChange={e => setDescricao(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group>


                                <Form.Input
                                    fluid
                                    label='Valor Unitario'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={valorUnitario}
                                        onChange={e => setValorUnitario(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Minimo em Minutos'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="30"
                                        value={tempoDeEntregaMinimoEmMinutos}
                                        onChange={e => setTempoDeEntregaMinimoEmMinutos(e.target.value)}
                                    />
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='Tempo de Entrega Máximo em Minutos'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="40"
                                        value={tempoDeEntregaMaximoEmMinutos}
                                        onChange={e => setTempoDeEntregaMaximoEmMinutos(e.target.value)}
                                    />
                                </Form.Input>






                            </Form.Group>

                        </Form>

                        <div style={{ marginTop: '4%' }}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Listar
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => salvar()}

                            >
                                <Icon name='save' />
                                Salvar
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}
