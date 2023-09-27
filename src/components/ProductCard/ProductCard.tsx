import styled from "@emotion/styled";

type ProductCardProps = {
  imgSrc: string
  title: string
  description: string
  size: string
}

const ProductContainer = styled.div`
  display: flex;
  border-top: 1px solid #202b30;
  border-bottom: 1px solid #202b30;
  border-right: 1px solid #202b30;
  overflow: hidden;
  border-radius: 8px;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const ProductImage = styled.div`
  width: 35%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

const ProductInfo = styled.div`
  width: 65%;
  padding: 1rem;
  
  div {
    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
    align-items: center;

    h2 {
      color: white;
      font-size: 22px;
    }

    small {
      color: #b58e9d;
    }
  }

  p {
    color: white;
    margin-top: 12px;
    font-size: 14px;
  }

  span {
    color: #526d75;
    font-size: 13px;
    font-weight: 500;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`


function ProductCard({imgSrc, title, description, size }: ProductCardProps) {
  return(
    <ProductContainer>
      <ProductImage>
        <img src={imgSrc} alt="um produto a venda" />
      </ProductImage>
      <ProductInfo>
        <div>
          <h2>{title}</h2>
          <small>{size}</small>
        </div>
        <span>Fox For Men</span>
        <p>{description}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductCard;