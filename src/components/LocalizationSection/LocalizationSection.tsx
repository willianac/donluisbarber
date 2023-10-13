import { useLoadScript } from "@react-google-maps/api";
import GoogleMapContainer from "../GoogleMapContainer/GoogleMapContainer";
import styled from "@emotion/styled";

const Title = styled.h1`
  color: #000000;
  font-size: 2.85rem;
  font-weight: 700;

  @media (max-width: 480px) {
    font-size: 2rem;
    text-align: center;
  }
`

function LocalizationSection() {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY
	})


	if(!isLoaded) return <h1>Carregando...</h1>

	return (
		<>
			<Title>Localização</Title>
			<GoogleMapContainer />
		</>
	)
}

export default LocalizationSection;