import { withTranslation } from "react-i18next";
import { Container, TextWrapper, Content } from "./styles";

interface Props {
  title: string;
  content: string;
  content2: string;
  t: any;
}

const Block = ({ title, content, content2, t }: Props) => {
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content>{t(content)}</Content>
        <Content>{t(content2)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
