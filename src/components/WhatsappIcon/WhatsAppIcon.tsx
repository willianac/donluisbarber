import styled from "@emotion/styled"
import whatsapp from "../../assets/whatsapp.png"

const IconContainer = styled.div`
	position: fixed;
	bottom: 1rem;
	right: 1rem;
	max-width: 3.5rem;
`

const Image = styled.img`
	display: block;
	width: 100%;
`

function WhatsAppIcon() {


	return (
		<IconContainer>
			<a href="https://wa.me/5521981144496" target="_blank" rel="noopener noreferrer" aria-label="Chat com a barbearia">
				<Image src={whatsapp} alt="a logo do WhatsApp" />
			</a>
		</IconContainer>
	)
}

export default WhatsAppIcon