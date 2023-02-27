import Container from 'react-bootstrap/Container'
import Depoimentos from '../components/Depoimentos'
import { useEffect, useState } from 'react'
import CmsApi from '../api/CmsApi'
import Row from 'react-bootstrap/esm/Row'
import "../css/Sobre.css"
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus atque quisquam deserunt sit iure eaque asperiores numquam ab! Impedit optio qui molestias iusto autem ratione porro dolorem sit sequi beatae! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea assumenda voluptatibus beatae. Cumque voluptatum rerum provident fugit distinctio tempora voluptas quo porro eligendi dolor ab consequuntur dicta rem, repellat magni!
                </div>
            </div>
            
            </Row>

            <hr style={{ color: 'rgb(233 30 99)', fontStyle: 'bold' }}></hr>

            <h1 className="p-3" >Nossa <span>Equipe</span></h1>

            <div className="grupo">

            <div className="cd">
                    <img  className="img" src="https://pps.whatsapp.net/v/t61.24694-24/308127072_499829412202307_5095190849182454928_n.jpg?ccb=11-4&oh=01_AdTHBQxYGZmnncbO98vWtVCxtln866rOeB0nJN1BC9nhPw&oe=640A0531" alt="" />
                    <h5 >GEOVANI HENRIQUE</h5>
                    <br></br>
                    <div className="socialLinks">
                    <a href="https://github.com/Geovani-Henrique"><img alt="SocialMedia" src={GithubIcon} style={{ height: 25, width: 25,  }} /></a>
                    <a href="#"><img alt="SocialMedia" src={InstagramIcon} style={{ height: 25,width: 25, }} /></a>
                    <a href="#"><img alt="SocialMedia" src={LinkedinIcon} style={{ height: 25,width: 25, }} /></a>
                    </div>
                </div>

                <dir className="cd">
                <img className="img" src="https://avatars.githubusercontent.com/u/85020469?v=4" alt="" />
                <h5 >JUAN SALES</h5>
                <br></br>
                <div className="socialLinks">
                <a href="https://github.com/Juangsales"><img alt="SocialMedia"  src={GithubIcon}  style={{height: 25,width: 25,}}/></a> 
                <a href="#"><img alt="SocialMedia" src={InstagramIcon} style={{height: 25,width: 25,}} /></a>
                <a href="https://www.linkedin.com/in/juan-sales-723524158/"><img alt="SocialMedia" src={LinkedinIcon}  style={{height: 25,width: 25,}}/></a>
            </div>
                </dir>

                <div className="cd">
                <img  className="img" src="https://pps.whatsapp.net/v/t61.24694-24/299364158_158312316853639_2694731832107616508_n.jpg?ccb=11-4&oh=01_AdQWHortv-eIakIB-teFzobtv91W_XK9FR7YRNBNN8YTTQ&oe=6409F9AC" alt="" />
                    <h5>LEONARDO GABRIEL</h5>
                    <br></br>
                    <div className="socialLinks">
                    <a href="https://github.com/leomacena"><img alt="SocialMedia" src={GithubIcon} style={{ height: 25, width: 25,  }} /></a>
                    <a href="#"><img alt="SocialMedia" src={InstagramIcon} style={{ height: 25,width: 25, }} /></a>
                    <a href="#"><img alt="SocialMedia" src={LinkedinIcon} style={{ height: 25,width: 25, }} /></a>
                    </div>
                </div>

                <div className="cd">
                <img className="img" src="https://media.licdn.com/dms/image/C4E03AQH4_PQQ_J7lXA/profile-displayphoto-shrink_800_800/0/1625260631370?e=2147483647&v=beta&t=LMYAOCOdt4ElBHbnM4lTYxfyruRxHt0SiM14x0KXt5U" alt="" />
                <h5 >LUAN ALVES</h5>
                <br></br>
                <div className="socialLinks">
                <a href="https://github.com/luanmartins8"><img alt="SocialMedia" src={GithubIcon} style={{height: 25,width: 25,}} /></a>
                <a href="#"><img alt="SocialMedia" src={InstagramIcon} style={{ height: 25, width: 25,}} /></a>
                <a href="https://www.linkedin.com/in/luan-martins-55b33916b/"><img alt="SocialMedia" src={LinkedinIcon}style={{height: 25,width: 25, }} /></a>
            </div>
          </div>
                <div className="cd">
                <img  className="img" src="https://avatars.githubusercontent.com/u/109689914?v=4" alt="" />
                    <h5 >LUÍS HENRIQUE</h5>
                    <br></br>
                    <div className="socialLinks">
                    <a href="https://github.com/Luis-Henrique-Lima"><img alt="SocialMedia" src={GithubIcon} style={{ height: 25, width: 25,  }} /></a>
                    <a href="#"><img alt="SocialMedia" src={InstagramIcon} style={{ height: 25,width: 25, }} /></a>
                    <a href="https://www.linkedin.com/in/lu%C3%ADs-henrique-santos/"><img alt="SocialMedia" src={LinkedinIcon} style={{ height: 25,width: 25, }} /></a>
                    </div>
                </div>

            </div>

        </Container>
    )   
}

export default Sobre