import axios from "axios";
import InputMask from 'comigo-tech-react-input-mask';
import { useState } from "react";
import 'semantic-ui-css/semantic.min.css';
import { Button, Container, Divider, Form, Icon } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';




export default function FormcupomDesconto() {

    const [codigoDesconto, setcodigoDesconto] = useState();
    const [percentualDesconto, setpercentualDesconto] = useState();
    const [valorDesconto, setvalorDesconto] = useState();
    const [valorMinimoPedidoPermitido, setvalorMinimoPedidoPermitido] = useState();
    const [quantidadeMaximaUso, setquantidadeMaximaUso] = useState();
    const [inicioVigencia, setinicioVigencia] = useState();
    const [fimVigencia, setfimVigencia] = useState();


     function Incluir() {

        let clienteRequest = {
             codigoDesconto: codigoDesconto,
             percentualDesconto: percentualDesconto,
             valorDesconto: valorDesconto,
             valorMinimoPedidoPermitido: valorMinimoPedidoPermitido,
             quantidadeMaximaUso: quantidadeMaximaUso,
             inicioVigencia: inicioVigencia,
             fimVigencia: fimVigencia
        }
    
        axios.post("http://localhost:8080/api/cupomDesconto", clienteRequest)
        .then((response) => {
             console.log('Cupom cadastrado com sucesso.')
        })
        .catch((error) => {
             console.log('Erro ao incluir um cupom.')
        })
    }



    function listarTodos() {

        let clienteRequest = {
             codigoDesconto: codigoDesconto,
             percentualDesconto: percentualDesconto,
             valorDesconto: valorDesconto,
             valorMinimoPedidoPermitido: valorMinimoPedidoPermitido,
             quantidadeMaximaUso: quantidadeMaximaUso,
             inicioVigencia: inicioVigencia,
             fimVigencia: fimVigencia
        }
    
        axios.post("http://localhost:8080/api/cupomDesconto", clienteRequest)
        .then((response) => {
             console.log('Cupom listado com sucesso.')
        })
        .catch((error) => {
             console.log('Erro ao listar um cupom.')
        })
    }


    function alterar() {

        let clienteRequest = {
             codigoDesconto: codigoDesconto,
             percentualDesconto: percentualDesconto,
             valorDesconto: valorDesconto,
             valorMinimoPedidoPermitido: valorMinimoPedidoPermitido,
             quantidadeMaximaUso: quantidadeMaximaUso,
             inicioVigencia: inicioVigencia,
             fimVigencia: fimVigencia
        }
    
        axios.post("http://localhost:8080/api/cupomDesconto", clienteRequest)
        .then((response) => {
             console.log('Cupom alterado com sucesso.')
        })
        .catch((error) => {
             console.log('Erro ao alterar um cupom.')
        })
    }

    function remover() {

        let clienteRequest = {
             codigoDesconto: codigoDesconto,
             percentualDesconto: percentualDesconto,
             valorDesconto: valorDesconto,
             valorMinimoPedidoPermitido: valorMinimoPedidoPermitido,
             quantidadeMaximaUso: quantidadeMaximaUso,
             inicioVigencia: inicioVigencia,
             fimVigencia: fimVigencia
        }
    
        axios.post("http://localhost:8080/api/cupomDesconto", clienteRequest)
        .then((response) => {
             console.log('Cupom removido com sucesso.')
        })
        .catch((error) => {
             console.log('Erro ao remover um cupom.')
        })
    }







    return (

        <div>
            
            <MenuSistema tela={'cupomDesconto'} />
            

            <div style={{ marginTop: '3%' }}>

                <Container textAlign='justified' >

                    <h2> <span style={{ color: 'darkgray' }}> Cupom de Desconto &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{ marginTop: '4%' }}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='codigoDesconto'
                                    maxLength="100"
                                    value={codigoDesconto}
                                    onChange={e => setcodigoDesconto(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='percentualDesconto'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={percentualDesconto}
                                        onChange={e => setpercentualDesconto(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    label='valorDesconto'
                                    placeholder='Informe o valor do Desconto'
                                    style={{ width: '100%' }}
                                    value={valorDesconto}
                                    onChange={e => setvalorDesconto(e.target.value)}
                                />

                            </Form.Group>


                                

                            <Form.Group>


                                <Form.Input
                                    fluid
                                    label='valorMinimoPedidoPermitido'
                                    width={6}>
                                    <InputMask
                                        mask="(99) 9999.9999"
                                        value={valorMinimoPedidoPermitido}
                                        onChange={e => setvalorMinimoPedidoPermitido(e.target.value)}
                                    />
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='quantidadeMaximaUso'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="30"
                                        value={quantidadeMaximaUso}
                                        onChange={e => setquantidadeMaximaUso(e.target.value)}
                                    />
                                </Form.Input>

                            </Form.Group>

                            <Form.Group>


                             <Form.Input
                                    fluid
                                    label='inicioVigencia'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="40"
                                        value={inicioVigencia}
                                        onChange={e => setinicioVigencia(e.target.value)}
                                    />
                                </Form.Input>

                                 <Form.Input
                                    fluid
                                    label='fimVigencia'
                                    width={6}
                                >
                                    <InputMask
                                        mask="99/99/9999"
                                        maskChar={null}
                                        placeholder="40"
                                        value={fimVigencia}
                                        onChange={e => setfimVigencia(e.target.value)}
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
                                onClick={() => listarTodos()}

                            >
                                <Icon name='reply' />
                                listarTodos
                            </Button>

                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => Incluir()}

                            >
                                <Icon name='save' />
                                Incluir
                            </Button>


                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => alterar()}

                            >
                                <Icon name='save' />
                                alterar
                            </Button>


                            <Button
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='blue'
                                floated='right'
                                onClick={() => remover()}

                            >
                                <Icon name='save' />
                                remover
                            </Button>

                        </div>

                    </div>

                </Container>
            </div>
        </div>

    );

}
