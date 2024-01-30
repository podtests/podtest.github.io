import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, ButtonWrapper } from "./styles";

interface MiddleBlockProps {
  title: string;
  content: string;
  content2: string;
  content3: string;
  content4: string;
  button: string;
  id: string;
  t: any;
}
const onButtonClick = () => {
  const pdfUrl = "FullStackBootCamp_Syllabus.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "FullStackBootCamp_Syllabus.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const MiddleBlock = ({ title, content, content2, content3,content4, button, id, t }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection id={id}>
      <Slide direction="left">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              <Content>{t(content2)}</Content>
              <Content>{t(content3)}</Content>  
              <Content>{t(content4)}</Content>      
              <ButtonWrapper>
              {button && (
                <Button name="submit" onClick={() =>  window.open('https://forms.gle/3cbB2qUhLLFFSNdj9') }>
                  {t(button)}
                </Button>
              )}
              <Button name="submit" color="#42f563" onClick={onButtonClick}>
                  {t("Download Brouchure")}
                </Button>
              </ButtonWrapper>      
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
