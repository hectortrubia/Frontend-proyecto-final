
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
import './privacidadstyle.scss';
import Carousel from 'react-bootstrap/Carousel'



function Privacidad() {

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

              <h5>Política de privacidad</h5>

              <br></br>
              1. Introducción
              <br></br><br></br>
              1.1. La presente política de privacidad está redactada conforme a lo dispuesto en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE. Gedesport SL (en adelante LegeaSport) informa al Usuario que los sitios web www.'. DOMINE_NAME .' y derivados (en adelante sitios web) son responsabilidad de LegeaSport.
              LegeaSport informa que los datos objeto de tratamiento tienen por finalidad realizar la gestión y el mantenimiento de la relación con el Usuario de los sitios web, así como las labores de información, estadística, y comercialización del servicio y de las actividades relacionadas con los mismos.
              <br></br><br></br>
              1.2 LegeaSport informa de que la base legítima que ampara los tratamientos indicados es la existencia de un interés legítimo, asimismo en cuanto a la instalación de cookies se encuentran legitimados en la existencia del consentimiento prestado por parte de los interesados o, en su caso, de los representantes legales de los mismos.
              <br></br><br></br>
              LegeaSport informa de que los datos serán conservados mientras perdure, el consentimiento prestado por usted, exceptuando aquellos casos en los que estemos obligados legalmente a su conservación.
              <br></br><br></br>
              De acuerdo con los derechos que le confiere la normativa vigente en protección de datos, el Usuario podrá dirigirse a la Autoridad de Control competente para presentar la reclamación que considere oportuna, así como también podrá ejercer los derechos de acceso, rectificación, limitación de tratamiento, supresión, portabilidad y oposición al tratamiento de sus datos de carácter personal así como a la retirada del consentimiento prestado para el tratamiento de los mismos.
              <br></br><br></br>
              1.3. El mero acceso a los sitios web, así como de todo o parte de sus contenidos y servicios, implica la aceptación sin reservas de la presente política de privacidad, también aplicable previamente a la posible contratación de los servicios que LegeaSport ponga a disposición de los clientes. Esta política de privacidad es de aceptación y cumplimiento obligatorio, previamente al acceso y a la posible contratación en los sitios web.
              <br></br><br></br>
              1.4. El Usuario acepta que la navegación por el sitio web es un acto de libre manifestación de voluntad para la recogida y tratamiento de datos en los ficheros de LegeaSport. LegeaSport podrá, libremente, realizar cambios en la política de privacidad de los sitios web, se indicarán dichos cambios en la presente declaración sobre privacidad, así como en cualquier otro lugar que consideremos apropiado para que el Usuario sea consciente de la información recopilada, cómo la tratamos y en qué circunstancias, en su caso, la comunicamos.
              <br></br><br></br>
              1.5. Los sitios web titularidad de LegeaSport no pueden ser utilizados por aquellas personas con incapacidad legal o menores de edad no emancipados; salvo previa autorización de los padres o tutores y representantes legales autorizando el registro y comunicación de datos personales.
              <br></br><br></br><br></br>
              2. Limitación de responsabilidad.
              <br></br><br></br>
              LegeaSport es responsable únicamente de la información que solicita y recaba de los Usuarios que deseen contratar, no teniendo responsabilidad en ningún momento de toda otra información personal que, de manera eventual, pudiera cederse, transmitirse o facilitarse por los propios Usuarios de los sitios web mediante cualquier otro mecanismo.
              <br></br><br></br><br></br>
              3. Información sobre Derechos de los interesados y seguridad de la información.
              <br></br><br></br>
              De acuerdo con lo establecido por el artículo 32 del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la protección de las personas físicas, en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos y por el que se deroga la Directiva 95/46/CE, LegeaSport se compromete a adoptar las medidas técnicas y organizativas necesarias, acorde al nivel de riesgos que acompañan los tratamientos realizados por ésta, de forma que se garanticen su integridad, confidencialidad y disponibilidad.
              <br></br><br></br>
              Asimismo, LegeaSport informa que en caso que el Usuario introduzca datos en los formularios de los sitios web de terceros, serán estos últimos los responsables de los datos de carácter personal, y quienes deberán adoptar las medidas técnicas descritas en el párrafo anterior de la presente política de privacidad.
              LegeaSport informa de la posibilidad de ejercer los derechos de acceso, rectificación, limitación de tratamiento, supresión, portabilidad y oposición al tratamiento, de los que usted dispone y que pueden ser ejercitados ante LegeaSport. De acuerdo con el Capítulo III del RGPD, debe tener en cuenta los siguientes matices:
              <br></br><br></br>
              3.1. Derecho de Acceso: Es el derecho del usuario a obtener información sobre sus datos concretos de carácter personal y del tratamiento que se haya realizado o realice, así como de la información disponible sobre el origen de dichos datos y las comunicaciones realizadas o previstas de los mismos.
              <br></br><br></br>
              3.2. Derecho de Rectificación: Es el derecho del afectado a que se modifiquen los datos que resulten ser inexactos o incompletos. Sólo podrá satisfacerse en relación a aquella información que se encuentre bajo el control de LegeaSport y Grupo HFL, por ejemplo, eliminar comentarios publicados en la propia página, imágenes o contenidos web donde consten datos de carácter personal del usuario.
              <br></br><br></br>
              3.3. Derecho a la Limitación de tratamiento: Es el derecho a que se limiten los fines del tratamiento previstos de forma original por el responsable del tratamiento.
              <br></br><br></br>
              3.4. Derecho de Supresión: Es el derecho a suprimir los datos de carácter personal del usuario, a excepción de lo previsto en el propio RGPD o en otras normativas aplicables que determinen la obligatoriedad de la conservación de los mismos, en tiempo y forma.
              <br></br><br></br>
              3.5. Derecho de portabilidad: El derecho a recibir los datos personales que el usuario, haya facilitado, en un formato estructurado, de uso común y lectura mecánica, y a transmitirlos a otro responsable.
              <br></br><br></br>
              3.6. Derecho de Oposición: Es el derecho del usuario a que no se lleve a cabo el tratamiento de sus datos de carácter personal o se cese el tratamiento de los mismos por parte de LegeaSport.
              <br></br><br></br>
              El Usuario garantiza que los datos proporcionados son verdaderos, exactos, completos y actualizados, siendo responsable de cualquier daño o perjuicio, directo o indirecto, que pudiera ocasionarse como consecuencia del incumplimiento de tal obligación tanto a LegeaSport como a terceros.
              <br></br><br></br><br></br>
              4. Consentimiento para el cumplimiento de la LSSI-CE.
              <br></br>
              <br></br>
              En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, LegeaSport solicitará y el Usuario podrá prestar su consentimiento expreso para que, si así lo desea, LegeaSport pueda hacer uso de sus datos con el fin de enviarle información y publicidad tanto sobre el sitio web como de las diferentes ofertas, promociones especiales y terceros prestadores del servicio.
              LegeaSport, dará la posibilidad en cada envío comercial de poder revocar en cualquier momento el consentimiento prestado a la recepción de comunicaciones comerciales, mediante el envío de un email a la dirección de correo electrónico habilitada a tal efecto, e informada en cada comunicación comercial.
              <br></br><br></br>
              LegeaSport, con el objetivo de garantizar la seguridad y confidencialidad de sus datos personales, ha adoptado los niveles de seguridad requeridos por la normativa en protección de datos personales y ha instalado los medios técnicos, a su alcance, para evitar la pérdida, mal uso, alteración, acceso no autorizado y robo de los datos personales facilitados a LegeaSport.
              <br></br><br></br>
              <div className="check">
              <input  type="checkbox"></input>
                <p className="checktext" >He leído y acepto la política de privacidad de legeasport.es</p>
                </div>
              </p>

            
              
     

            
              

          </div>


        </Col>

      </Row>


    </React.Fragment>
  )
}

export default Privacidad;