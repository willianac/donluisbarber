import styled from "@emotion/styled";
import ProductCard from "../ProductCard/ProductCard";

import pomada from "../../assets/pomada.jpg";
import pomada2 from "../../assets/pomada2.png";

const Title = styled.h1`
  color: white;
  font-size: 2.85rem;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
`

const Description = styled.p`
  color:white;
  margin-bottom: 3rem;

  @media (max-width: 480px) {
    text-align: center;
  }
`

const ProductGroup = styled.h3`
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-decoration: underline;
  text-underline-offset: 2px;
`

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.6rem;
  margin-bottom: 4rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`

function ProductsSection() {
  return (
    <>
      <Title>Produtos</Title>
      <Description>Alguns dos produtos que vendemos por aqui.</Description>
      <ProductGroup>Pomadas</ProductGroup>
      <GridContainer>
        <ProductCard 
          imgSrc={pomada}
          title="Pomada Coffee"
          size="80g / 150g"
          description="A Pomada New Coffee é feita a base de água para todos os tipos de cabelo. 
                      Estimula o crescimento dos fios, pois o seu princípio ativo mais fundamental, 
                      é a cafeína, que fortalece e combate o envelhecimento dos fios. Previne o 
                      ressecamento do cabelo e fortalece os fios, possuindo brilho natural e 
                      fixação média, excelente opção para um estilo de penteado mais casual"
        />

        <ProductCard 
          imgSrc="https://foxformen.com.br/wp-content/uploads/2023/05/CARAMELO-1.png"
          title="Pomada Caramelo"
          size="80g / 150g"
          description="A Pomada Caramelo c/ Queratina é feita a base de água para todos os tipos de cabelo. 
                      Com ela, você conseguirá modelar penteados e finalizar o visual de forma natural e sem 
                      deixar resíduos. Previne o ressecamento do cabelo e fortalece os fios, possuindo brilho 
                      natural e fixação extra forte, excelente opção para um estilo de penteado mais casual."
        />

        <ProductCard 
          imgSrc={pomada2}
          title="Pomada Efeito Teia"
          size="80g / 150g"
          description="Creme Modelador Efeito Teia da FOX FOR MEN é uma estilizadora profissional para finalizar 
                      o seu penteado, pois possui um sistema completo de tratamento e cuidados profissionais para 
                      todos os tipos de cabelos. Possui ativos hidratantes que permitem resultados perfeitos para 
                      seu penteado."
        />

        <ProductCard 
          imgSrc="https://foxformen.com.br/wp-content/uploads/2023/05/TOQUE-SECO-1.png"
          title="Pomada Toque Seco"
          size="80g / 150g"
          description="Wax Efeito Toque Seco da FOX FOR MEN, oferece fixação forte, com efeito natural ou seco. 
                      Sua textura elástica possibilita maior flexibilidade para o penteado do dia-a-dia. Define 
                      a estrutura dos fios, proporciona leveza ao penteado, controla dos fios rebeldes sem 
                      danificá-los. Pode ser utilizada diariamente para fixação do penteado e hidrata dos fios."
        />

      </GridContainer>
      <ProductGroup>Balm</ProductGroup>
      <GridContainer>
        <ProductCard 
            imgSrc="https://foxformen.com.br/wp-content/uploads/2023/06/balm.png"
            title="Balm Para Barba"
            size="120ml"
            description="O BALM PARA BARBA proporciona brilho, hidratação, controle e modela os fios da barba 
                        durante todo o dia. Ajuda a manter os fios rebeldes sob controle. É ideal para quem 
                        sente a barba ressecada e/ou áspera. Pode ser usado em conjunto com o Óleo para Barba 
                        da Fox For Men."
          />
      </GridContainer>
      <ProductGroup>Óleos</ProductGroup>
      <GridContainer>
        <ProductCard 
            imgSrc="https://foxformen.com.br/wp-content/uploads/2020/08/%C3%B3leo-para-barba-30ml-fox-for-men.gif"
            title="Óleo Para Barba"
            size="30ml"
            description="O ÓLEO PARA BARBA tem hidratantes e ativos naturais que fortalecem, condicionam
                        os fios e proporcionam, além do brilho e hidratação, resistência e disciplina 
                        dos pelos."
          />
      </GridContainer>
    </>
  )
}

export default ProductsSection;