import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'
import Row from 'react-bootstrap/esm/Row'
import "../assets/css/Sobre.css"
import GithubIcon from "../media/github.png"
import LinkedinIcon from "../media/linkedin.png"
import InstagramIcon from "../media/instagram.png";
import 'bootstrap/dist/css/bootstrap.min.css'

function Sobre() {
    const [sobre, setSobre] = useState([])

    useEffect (() => {
        async function getSobre() {
            const response = await CmsApi().getSobre()
            const sobre = await response.json()
            setSobre(sobre.data)
        }

        getSobre()
    }, [])

    return (
        <Container className="conteudo-margin pt-5">
            <Row>

            <h1>Sobre</h1>

            <div className="p-3 my-2 rounded">
                <div style={{ color: '' }}>
                    {sobre.text}
                </div>
            </div>
            
            </Row>

            <hr style={{ color: 'rgb(233 30 99)', fontStyle: 'bold' }}></hr>

            <h1 className="p-3" >Nossa <span>Equipe</span></h1>

            <div className="grupo">

            <div className="cd">
                    <img  className="img" src="https://media.licdn.com/dms/image/C4E03AQH6n375gDWWYg/profile-displayphoto-shrink_800_800/0/1647735420676?e=1683158400&v=beta&t=Kjm7Lber2DdcDtif83gwsk7kEzWHG7_yWAearKr8Ow0" alt="" />
                    <h5 >GEOVANI HENRIQUE</h5>
                    <br></br>
                    <div className="socialLinks">
                    <a href="https://github.com/Geovani-Henrique" target="_blank"><img alt="SocialMedia" src={GithubIcon} style={{ height: 25, width: 25,  }} /></a>
                    <a href="#"><img alt="SocialMedia" src={InstagramIcon} style={{ height: 25,width: 25, }} /></a>
                    <a href="https://www.linkedin.com/in/geovanihenrique/" target="_blank"><img alt="SocialMedia" src={LinkedinIcon} style={{ height: 25,width: 25, }} /></a>
                    </div>
                </div>

                <dir className="cd">
                <img className="img" src="https://avatars.githubusercontent.com/u/85020469?v=4" alt="" />
                <h5 >JUAN SALES</h5>
                <br></br>
                <div className="socialLinks">
                <a href="https://github.com/Juangsales" target="_blank"><img alt="SocialMedia"  src={GithubIcon}  style={{height: 25,width: 25,}}/></a> 
                <a href="#" target="_blank"><img alt="SocialMedia"  src={InstagramIcon} style={{height: 25,width: 25,}} /></a>
                <a href="https://www.linkedin.com/in/juan-sales-723524158/"  target="_blank"><img alt="SocialMedia" src={LinkedinIcon}  style={{height: 25,width: 25,}}/></a>
            </div>
                </dir>

                <div className="cd">
                <img  className="img" src="https://media.licdn.com/dms/image/C4D03AQGmHxCWckKtzA/profile-displayphoto-shrink_800_800/0/1663353703503?e=1683158400&v=beta&t=WKpVjP8hvCT0j23MlP6H5hJ4WX4hrkpbWYsfk1xtWYg" alt="" />
                    <h5>LEONARDO GABRIEL</h5>
                    <br></br>
                    <div className="socialLinks">
                    <a href="https://github.com/leomacena" target="_blank"><img alt="SocialMedia" src={GithubIcon} style={{ height: 25, width: 25,  }} /></a>
                    <a href="#"><img alt="SocialMedia" src={InstagramIcon} style={{ height: 25,width: 25, }} /></a>
                    <a href="https://www.linkedin.com/in/leonardomacena/" target="_blank"><img alt="SocialMedia" src={LinkedinIcon} style={{ height: 25,width: 25, }} /></a>
                    </div>
                </div>

                <div className="cd">
                <img className="img" src="https://media.licdn.com/dms/image/C4E03AQH4_PQQ_J7lXA/profile-displayphoto-shrink_800_800/0/1625260631370?e=2147483647&v=beta&t=LMYAOCOdt4ElBHbnM4lTYxfyruRxHt0SiM14x0KXt5U" alt="" />
                <h5 >LUAN MARTINS</h5>
                <br></br>
                <div className="socialLinks">
                <a href="https://github.com/luanmartins8" target="_blank"><img alt="SocialMedia" src={GithubIcon} style={{height: 25,width: 25,}} /></a>
                <a href="#"><img alt="SocialMedia" src={InstagramIcon} style={{ height: 25, width: 25,}} /></a>
                <a href="https://www.linkedin.com/in/luan-martins-55b33916b/" target="_blank"><img alt="SocialMedia" src={LinkedinIcon}style={{height: 25,width: 25, }} /></a>
            </div>
          </div>
                <div className="cd">
                <img  className="img" src="https://avatars.githubusercontent.com/u/109689914?v=4" alt="" />
                    <h5 >LUÍS HENRIQUE</h5>
                    <br></br>
                    <div className="socialLinks">
                    <a href="https://github.com/Luis-Henrique-Lima" target="_blank"><img alt="SocialMedia" src={GithubIcon} style={{ height: 25, width: 25,  }} /></a>
                    <a href="#"><img alt="SocialMedia" src={InstagramIcon} style={{ height: 25,width: 25, }} /></a>
                    <a href="https://www.linkedin.com/in/lu%C3%ADs-henrique-santos/" target="_blank"><img alt="SocialMedia" src={LinkedinIcon} style={{ height: 25,width: 25, }} /></a>
                    </div>
                </div>

            </div>

        </Container>
    )   
}

export default Sobre
