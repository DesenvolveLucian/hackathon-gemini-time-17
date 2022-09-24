import { Container, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { getDetalheRestaurante } from "../../services/restaurantes.service";
import "./style.css";

function DetalheRestaurante() {
  const [nome, setNome] = useState([]);
  const [descricao, setDescricao] = useState();
  const [distancia, setDistancia] = useState();
  const [imagem, setImagem] = useState([]);
  const [nota, setNota] = useState([]);
  const [tempoMedio, setTempoMedio] = useState([]);
  const [valorEntrega, setValorEntrega] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetalheRestaurante().then((response) => {
      setNome(response.nome)
      setDescricao(response.descricao);
      setDistancia(response.distancia);
      setImagem(response.imagem);
      setNota(response.nota);
      setTempoMedio(response.tempoMedio);
      setValorEntrega(response.valorEntrega);
      setCategoria(response.categoria);
      setLoading(false);
    })
  }, []);

  return (
    <Container class="restaurantes">
      
    </Container>
  )
}

export default DetalheRestaurante;