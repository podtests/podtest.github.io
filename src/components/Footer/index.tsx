import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";
        
import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer  
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });   
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>  
              <Language>{t("Company")}</Language>                          
              <Large left="true" to="/" onClick={() => scrollTo("why")}>
                {t("About Us")}
              </Large>                                
              <Large to="/">{t("Tell us everything")}</Large>  
              <Large to="/">{t("Email Details")}</Large>
               

            </Col>
            <Col lg={8} md={8} sm={12} xs={12}>
              <Title>{t("Policies")}</Title>
              <Large to="/" left="true" >
                {t("Terms & Conditions")}
              </Large>              
              <Large left="true" to="/">
                {t("Cancellation Policy")}
              </Large>
              <Large left="true" to="/">
                {t("Refund Policy")}
              </Large>              
            </Col>   
            <Col lg={6} md={6} sm={12} xs={12}>
              <Title>{t("Address")}</Title>              
              <Large>B-51, KH NO. 15/7/1, Gali No.2, Khazani Nagar, Johripur, Delhi-94, India</Large>                           
              <SvgIcon
                    src="india.svg"
                    aria-label="homepage"
                    width="30px"
                    height="30px"
                  />
            </Col>         
          </Row>                    
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://youtube.com/@podtest"
                src="youtube.svg"
              />
              <SocialLink
                href="https://udemy.com/"
                src="udemy.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/akhil-jain-podtest/"
                src="linkedin.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
