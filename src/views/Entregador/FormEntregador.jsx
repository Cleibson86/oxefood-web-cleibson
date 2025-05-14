import axios from "axios";
import InputMask from 'comigo-tech-react-input-mask';
import React, { useState } from "react";
import { Button, Container, Divider, Form, Icon, Select } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';



export default function FormEntregador () {


    
   const [nome, setNome] = useState();
   const [cpf, setCpf] = useState();
   const [rg, setRg] = useState();
   const [dataNascimento, setDataNascimento] = useState();
   const [foneCelular, setFoneCelular] = useState();
   const [foneFixo, setFoneFixo] = useState();
   const [quantidadeDeEntregasRealizadas, setQuantidadeDeEntregasRealizadas] = useState();
   const [valorDoFrente, setvalorDoFrente] = useState();
   const [rua, setRua] = useState();
   const [numero, setnumero] = useState();
   const [Bairro, setbairro] = useState();
   const [cidade, setcidade] = useState();
   const [cep, setcep] = useState();
   const [uf, setuf] = useState();
   const [complemento, setcomplemneto] = useState();


   function salvar() {

		let clienteRequest = {
		     nome: nome,
		     cpf: cpf,
             rg:rg,
		     dataNascimento: dataNascimento,
		     foneCelular: foneCelular,
		     foneFixo: foneFixo,
             quantidadeDeEntregasRealizadas:quantidadeDeEntregasRealizadas,
             valorDoFrente: valorDoFrente,
             rua: rua,
             numero: numero,
             Bairro: Bairro,
             cidade: cidade,
             cep: cep,
             uf: uf,
             complemento: complemento
		}
	
		axios.post("http://localhost:8080/api/cliente", clienteRequest)
		.then((response) => {
		     console.log('Cliente cadastrado com sucesso.')
		})
		.catch((error) => {
		     console.log('Erro ao incluir o um cliente.')
		})
	}









    const estados = [
        { key: 'af', value: 'af', text: 'Pernambuco' },
        { key: 'ax', value: 'ax', text: 'Rio de janeiro' },
        { key: 'al', value: 'al', text: 'Paraíba' },
    ]
    return (

        <div>
        <MenuSistema tela={'Entregador'} />


            <div style={{marginTop: '3%'}}>

                <Container textAlign='justified' >

                    <h2> <span style={{color: 'darkgray'}}> Entregador &nbsp;<Icon name='angle double right' size="small" /> </span> Cadastro </h2>

                    <Divider />

                    <div style={{marginTop: '4%'}}>

                        <Form>

                            <Form.Group widths='equal'>

                                <Form.Input
                                    required
                                    fluid
                                    label='Nome'
                                    maxLength="100"
                                    value={nome}
			                        onChange={e => setNome(e.target.value)}

                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='CPF'>
                                    <InputMask
                                        required
                                        mask="999.999.999-99"
                                        value={cpf}
                            			onChange={e => setCpf(e.target.value)}

                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='RG'
                                    width={6}>
                                    <InputMask 
                                        mask="(99) 9999.9999"
                                        value={rg}
		                            	onChange={e => setRg(e.target.value)}

                                    /> 
                                </Form.Input>


                            </Form.Group>
                            
                            <Form.Group>

                                
                                <Form.Input
                                    fluid
                                    label='DT Nascimento'
                                    width={6}>
                                    <InputMask 
                                    mask="(99) 9999.9999"
                                    value={dataNascimento}
                        			onChange={e => setDataNascimento(e.target.value)}

                                    /> 
                                </Form.Input>

                                <Form.Input
                                    fluid
                                    label='Fone Celular'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={foneCelular}
			                            onChange={e => setFoneCelular(e.target.value)}
                                       
                                    /> 
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='Fone Fixo'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={foneFixo}
                                        onChange={e => setFoneFixo(e.target.value)}        
                                    /> 
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='Quantidade de Entregas Realizadas'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={quantidadeDeEntregasRealizadas}
                                        onChange={e => setQuantidadeDeEntregasRealizadas(e.target.value)}
                                    /> 
                                </Form.Input>


                                <Form.Input
                                    fluid
                                    label='Valor por Frete'
                                    width={6}
                                >
                                    <InputMask 
                                        mask="99/99/9999" 
                                        maskChar={null}
                                        placeholder="Ex: 20/03/1985"
                                        value={valorDoFrente}
                                        onChange={e => setvalorDoFrente(e.target.value)}
                                    /> 
                                </Form.Input>


                            </Form.Group>

                            <Form.Group widths='equal'>

                            <Form.Input 
                                    required
                                    fluid
                                    label='Rua'
                                    maxLength="100"
                                    value={rua}
                                    onChange={e => setRua(e.target.value)}

                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Número'
                                    maxLength="100"
                                    value={numero}
                                    onChange={e => setnumero(e.target.value)}
                                />

                            </Form.Group>

                            <Form.Group widths='equal'>


                            

                                <Form.Input
                                    required
                                    fluid
                                    label='Bairro'
                                    maxLength="100"
                                    value={Bairro}
                                    onChange={e => setbairro(e.target.value)}
                                />

                                <Form.Input
                                    required
                                    fluid
                                    label='Cidade'
                                    maxLength="100"
                                    value={cidade}
                                    onChange={e => setcidade(e.target.value)}
                                /> 


                                 <Form.Input
                                    required
                                    fluid
                                    label='Cep'
                                    maxLength="100"
                                    value={cep}
                                    onChange={e => setcep(e.target.value)}
                                /> 

                            

                            

                            </Form.Group>


                            <Form.Group>

                           <label>uf</label> 
                            <Select placeholder='Selecione' options={estados} 
                            value={uf}
                            onChange={e => setuf(e.target.value)}
                            
                            
                            />


                            </Form.Group>
                            
                            <Form.Group widths='equal' >
                            <Form.Input 
                                    required
                                    fluid
                                    label='Complemento'
                                    maxLength="100"
                                    value={complemento}
                                    onChange={e => setcomplemneto(e.target.value)}

                                />

                            </Form.Group>

                            <Form.Group>

                            

                            </Form.Group>



                        
                        </Form>
                        
                        <div style={{marginTop: '4%'}}>

                            <Button
                                type="button"
                                inverted
                                circular
                                icon
                                labelPosition='left'
                                color='orange'
                            >
                                <Icon name='reply' />
                                Voltar
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
