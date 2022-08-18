import React from "react";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import NavSearch from "./NavSearchblog";

function Blog() {
    const [state, setState] = useState([])
    useEffect(() => {
            getData()
    }, [])

    const navigate = useNavigate();
    
    const toCompose = () => {
        navigate('/composeblogbit');
    }

    const getData = async () => {
    fetch("http://localhost:9000/")
    .then((res) => res.json())
    .then((json) => {
        setState(json);
    })
    }

    const toPost=(element)=>{
        navigate('/postblog',{state:{title: element.title, content: element.content, category: element.category}});
    }

    return(
        <div>
            <Card className="bg-light blog-card">
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
            </Card>
            {console.log((state))}
            <Row xs={1} md={2} className="g-1">
            { state.map((element) =>(
                <Col>
                <div className="card text-white mb-3 homepostouterdiv" key={element._id}>
                    <img src="/images/Snipabit.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body homepostcard">
                    <h1 className="card-title">{ element.title }</h1>
                    <p className="card-text">{ element.content.substring(0, 200) + "..." }</p>
                    <p className="card-text"><b>Category: </b>{ element.category }</p>
                    <a onClick={() => toPost(element)} className="btn btn-outline-light">Read More</a>
                    </div>
                </div>
                </Col>
            ))}
            </Row>
        </div>
    )
}

export default Blog;