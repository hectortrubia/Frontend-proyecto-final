
import React from 'react';
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import { useContext } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import './cookiestyle.scss';
import Carousel from 'react-bootstrap/Carousel'



function Cookies() {

  const [t, i18n] = useTranslation("global");
  const [theme, updateTheme, changeTheme, logName, setLogName] = useContext(themeContext)

  return (
    <React.Fragment>

      <Row className='m-0 p-0' fluid>


        <Col className='m-0 p-0'
          sm={12}
          md={{ span: 12, offset: 0, }}
          lg={{ span: 12, offset: 0, }}
          xl={{ span: 12, offset: 0, }}
          xxl={{ span: 12, offset: 0, }} >


          <div className="containernosotros">
            <p className="parrafopriv">

              <h5>Política de Cookies</h5>

              <br></br><br></br>
              En cumplimiento del Real Decreto Ley 13/2012, del 30 de marzo por el que se modifica la Ley de Servicios de Sociedad de la Información, y relativo a la utilización de cookies en páginas Webs Gedesport SL le informa que este sitio Web www.legeasport.es/ utiliza cookies para poder medir y analizar el tráfico de la Web, para facilitarle su experiencia como usuario y ofrecerle un mejor servicio. Si lo desea puede configurar su navegador para ser avisado en pantalla de la recepción de cookies o bien para impedir la instalación de las mismas, teniendo en cuenta que de ésta forma dejaría de tener acceso a ciertas funciones en Internet.
              <br></br><br></br>
              ¿QUÉ SON LAS COOKIES?
              <br></br><br></br>
              Las cookies son pequeños archivos que algunas plataformas, como las páginas WEB, pueden instalar en tu ordenador, smartphone, tableta o televisión conectada, al acceder a las mismas. Una cookie se almacena en estos dispositivos para personalizar y facilitar al máximo la navegación del usuario/a. Las cookies se asocian únicamente a un/a usuario/a y su dispositivo, y no proporcionan referencias que permitan deducir datos personales del mismo/a. El/la usuario/a podrá configurar su navegador para que notifique o rechace la instalación de las cookies enviadas por el sitio WEB.
              <br></br><br></br>
              Las cookies permiten que las páginas WEB funcionen de forma más ágil y adaptada a las preferencias del usuario/a. Por ejemplo, almacenando su idioma o la moneda de su país. Además, ayudan a los/as responsables de los sitios WEB a mejorar los servicios que ofrecen, gracias a la información estadística que recogen a través de ellas. Finalmente, sirven para hacer más eficiente la publicidad que se muestra, gracias a la cual se pueden ofrecer servicios de forma gratuita.
              <br></br><br></br>

              ¿PARA QUÉ UTILIZA LAS COOKIES ESTA PÁGINA WEB Y CUÁLES SON?
              <br></br><br></br>
              Esta página Web utiliza las cookies para una serie de finalidades, incluidas:
              <br></br><br></br>
              Publicidad: se utilizan este tipo de cookies para hacer que la publicidad sea más atractiva para los usuarios y más valiosa para los editores y anunciantes. Las cookies suelen utilizarse para seleccionar anuncios basados en contenido que es relevante para un usuario, mejorar los informes de rendimiento de la campaña y evitar mostrar anuncios que el usuario ya haya visto.
              <br></br><br></br>
              Preferencias: Estas cookies permiten que nuestros sitios web recuerden información que cambia el aspecto o el comportamiento del sitio como, por ejemplo, tu idioma preferido o la región en la que te encuentras. Por ejemplo, al recordar tu región, un sitio web puede proporcionarte noticias sobre el tráfico o boletines meteorológicos locales. Estas cookies también te permiten cambiar el tamaño del texto, la fuente y otras partes de las páginas web que puedes personalizar.
              <br></br><br></br>
              Análisis: son aquellas cookies que bien, tratadas por nosotros o por terceros, nos permiten cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que hacen los usuarios del servicio. Para ellos se analiza su navegación en nuestra página web con el fin de mejorar la experiencia del usuario.
              <br></br><br></br>
              Técnicas: son aquellas cookies que permiten al usuario la navegación a través de la página web y la utilización de las diferentes opciones o servicios que en ella existan.
              <br></br><br></br>
              El detalle de las cookies utilizadas en esta página web es el siguiente:

              <br></br><br></br>

              COOKIE
              <br></br><br></br>
              TIPO
              <br></br><br></br>
              NOMBRE
              <br></br><br></br>
              PROPÓSITO
              <br></br><br></br>
              Google Analytics
              <br></br><br></br>
              De terceros
              <br></br><br></br>

              Recoger información sobre la navegación de los usuarios por el sitio con el fin de conocer el origen de las visitas y otros datos similares a nivel estadístico. No obtiene datos de los nombres o apellidos de los usuarios ni de la dirección postal concreta desde donde se conectan.
              <br></br><br></br>

              ¿CÓMO DESACTIVAR O ELIMINAR LAS COOKIES?
              <br></br><br></br>

              Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones propias del navegador instalado en su equipo informático:
              <br></br><br></br>

              - Chrome: https://support.google.com/accounts/answer/61416?hl=es
              <br></br><br></br>

              - Firefox: https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-que-los-sitios-we
              <br></br><br></br>

              - Internet Explorer: https://windows.microsoft.com/es-es/windows7/how-to-manage-cookies-in-internet-explorer-9
              <br></br><br></br>

              - Otros navegadores: consulte la documentación del navegador que tenga instalado
              <br></br><br></br>


              <br></br><br></br>
              <div className="check">
                <input type="checkbox"></input>
                <p className="checktext" >He leído y acepto la política de Cookies de legeasport.es</p>
              </div>
            </p>

          </div>


        </Col>

      </Row>


    </React.Fragment>
  )
}

export default Cookies;