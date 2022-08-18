import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import NavSearch from "./NavSearchclip";
import { useParams } from "react-router-dom";

function Clip() {
    const [state, setState] = useState([])
    const params = useParams();

    const search = params.tag;
    useEffect(() => {
        getData()
    }, [])
    
    const navigate = useNavigate();
    
    const toCompose = () => {
        navigate('/composeclipbit');
    }

    const getData = async () => {
        fetch("http://localhost:9000/clipbits/" + search)
        .then((res) => res.json())
        .then((json) => {
            setState(json)
    })
    }

    const toPost=(element)=>{
        navigate('/postclip',{state:{ClipTitle: element.ClipTitle, ClipLink: element.ClipLink, startTime: element.startTime, endTime: element.endTime, ClipDesc: element.ClipDesc, ClipTag: element.ClipTag}});
    }

    return(
        <div>
            {/* <Card className="bg-light blog-card">
                <Card.Img src="/images/snipabitBlog.png" alt="Card image" />
                <Card.ImgOverlay>
                    <NavSearch></NavSearch>
                    <Card.Title className="blog-card-title">
                        <h1>Snip long blogs & Articles</h1>
                    </Card.Title>
                    <Card.Text>
                        <button id="blogbit-button" onClick={() => toCompose()}>Compose blogBit</button>
                    </Card.Text>
                </Card.ImgOverlay>
            </Card> */}

            <h1>Clip Tag: {search}</h1>

            <Row xs={1} md={2} className="g-1">
            { state.map((element) =>(
                <Col>
                <div className="card text-white bg-dark mb-3 homepostouterdiv" key={element._id} >
                <iframe className="clipframe card-img-top" src={element.ClipLink + "?start="+ element.startTime +"&end=" + element.endTime} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullScreen></iframe>
                    <div className="card-body homepostcard">
                        <h1 className="card-title">{ element.ClipTitle }</h1>
                        <p className="card-text">{ element.ClipDesc }</p>
                        <p className="card-text">Tag: { element.ClipTag }</p>
                        <a onClick={() => toPost(element)} className="btn btn-outline-light">Read More</a>
                    </div>
                </div>
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default Clip;