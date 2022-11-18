import React, { useState } from "react";
import IMG from "../../assets/images/user.png"
import {
  Container,
  Button,
  TextField,
  Checkbox,
  FormControlLabel,
} from "@material-ui/core";

import "./styles.css";

function Form() {
  const [product, setProduct] = useState('');
  const [tipe_school, setTipeschool] = useState('');
  const [cep, setCep] = useState('');
  const [news, setNews] = useState(true);
  const [promotions, setPromotions] = useState(true);

  const [CEPError, setCEPError] = useState(false);

  return (
    <Container maxWidth="sm" component="article" className="form">
      <h1>Formulário de Cadastro de Poduto</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
      }}>
        <img src={IMG} alt=""/>
        <TextField
          id="product"
          label="Nome"
          variant="outlined"
          margin="dense"
          fullWidth
          value={product}
          onChange={(event) => {setProduct(event.target.value)}}
        />
        <TextField
          id="last_name"
          label="Tipo de ensino"
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipe_school}
          onChange={(event) => {setTipeschool(event.target.value)}}
        />

<div className="checkboxes">
          <h1>Nivel de ensino</h1>
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="Infantil"
                checked={promotions}
                onChange={(event) => {
                  setPromotions(event.target.checked);
                }}
              />
            }
            label="Infantil"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="Fundamntal_1"
              checked={news}
              onChange={(event) => {
                setNews(event.target.checked);
              }} 
            />}
            label="Fundamntal 1"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="Fundamntal_2"
                checked={promotions}
                onChange={(event) => {
                  setPromotions(event.target.checked);
                }}
              />
            }
            label="Fundamntal 2"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="Médio"
              checked={news}
              onChange={(event) => {
                setNews(event.target.checked);
              }} 
            />}
            label="Médio"
          />
        </div>

        <div className="checkboxes">
          <h1>Ano / Série</h1>
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="Infantil"
                checked={promotions}
                onChange={(event) => {
                  setPromotions(event.target.checked);
                }}
              />
            }
            label="Infantil"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="ano1"
              checked={news}
              onChange={(event) => {
                setNews(event.target.checked);
              }} 
            />}
            label="1 ano"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="ano2"
                checked={promotions}
                onChange={(event) => {
                  setPromotions(event.target.checked);
                }}
              />
            }
            label="2 ano"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="ano3"
              checked={news}
              onChange={(event) => {
                setNews(event.target.checked);
              }} 
            />}
            label="3 ano"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="ano4"
                checked={promotions}
                onChange={(event) => {
                  setPromotions(event.target.checked);
                }}
              />
            }
            label="4 ano"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="ano5"
              checked={news}
              onChange={(event) => {
                setNews(event.target.checked);
              }} 
            />}
            label="5 ano"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="ano6"
                checked={promotions}
                onChange={(event) => {
                  setPromotions(event.target.checked);
                }}
              />
            }
            label="6 ano"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="ano7"
              checked={news}
              onChange={(event) => {
                setNews(event.target.checked);
              }} 
            />}
            label="7 ano"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="ano8"
                checked={promotions}
                onChange={(event) => {
                  setPromotions(event.target.checked);
                }}
              />
            }
            label="8 ano"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="ano9"
              checked={news}
              onChange={(event) => {
                setNews(event.target.checked);
              }} 
            />}
            label="9 ano"
          />
          <FormControlLabel
            
            control={
              <Checkbox
                value="promotions"
                color="primary"
                name="anoMedio1"
                checked={promotions}
                onChange={(event) => {
                  setPromotions(event.target.checked);
                }}
              />
            }
            label="1 ano Médio"
          />

          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="anomedio2"
              checked={news}
              onChange={(event) => {
                setNews(event.target.checked);
              }} 
            />}
            label="2 no Médio"
          />
          <FormControlLabel
            control={<Checkbox
              value="news"
              color="primary"
              name="anomedio3"
              checked={news}
              onChange={(event) => {
                setNews(event.target.checked);
              }} 
            />}
            label="3 no Médio"
          />
        </div>
        <div>   <TextField
          id="last_name"
          label="Tipo de ensino"
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipe_school}
          onChange={(event) => {setTipeschool(event.target.value)}}
        />

        <TextField
          id="last_name"
          label="Escola"
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipe_school}
          onChange={(event) => {setTipeschool(event.target.value)}}
        />
        <TextField
          id="last_name"
          label="Estado"
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipe_school}
          onChange={(event) => {setTipeschool(event.target.value)}}
        />
        <TextField
          id="last_name"
          label="Cidade"
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipe_school}
          onChange={(event) => {setTipeschool(event.target.value)}}
        />
        <TextField
          id="last_name"
          label="Bairro"
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipe_school}
          onChange={(event) => {setTipeschool(event.target.value)}}
        />
        <TextField
          id="last_name"
          label="Categoria"
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipe_school}
          onChange={(event) => {setTipeschool(event.target.value)}}
        />
        <TextField
          id="last_name"
          label="Sub-Categoria"
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipe_school}
          onChange={(event) => {setTipeschool(event.target.value)}}
        />


        </div>
        <div>
        <TextField
          id="last_name"
          label="Preço"
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipe_school}
          onChange={(event) => {setTipeschool(event.target.value)}}
        />
        <TextField
          id="last_name"
          label="Preço com desconto"
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipe_school}
          onChange={(event) => {setTipeschool(event.target.value)}}
        />

<TextField
          id="last_name"
          label="Descrição do produto"
          variant="outlined"
          margin="dense"
          fullWidth
          value={tipe_school}
          onChange={(event) => {setTipeschool(event.target.value)}}
        />
        </div>
        
        
        

        <Button className="btn-form" variant="contained" color="primary">
          Cadastrar Produto
        </Button>
        <Button className="btn-form" variant="contained" color="primary" href="/PageVendor">
          Cancelar Cadastro
        </Button>
      </form>

      
    </Container>
  );
}

export default Form;

//<p>{name} {last_name}</p>