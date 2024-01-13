import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  MainBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";

const MainBlock = ({
  title,
  content,
  content2,
  content3,
  content4,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  return (
    <MainBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>                            
              <Content>{t(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => window.open('https://forms.gle/3cbB2qUhLLFFSNdj9') }
                      >
                        {t(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
              <br></br>
              <Content>{t(content2)}</Content>
              <Content>{t(content3)}</Content>
              <Content>{t(content4)}</Content>              
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SvgIcon src={icon} width="100%" height="100%" />
          </Col>
        </Row>
      </Fade>
    </MainBlockContainer>
  );
};

export default withTranslation()(MainBlock);
