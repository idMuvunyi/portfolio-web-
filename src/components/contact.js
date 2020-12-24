import React, { Component } from "react";
import { Col, Row, Button, Form, Label, Input, Container } from "reactstrap";

import { List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  
  
sendMessage(e){
  e.preventDefault();
  
}  
  
  
  render() {
    return (
      <div>
        <div className="project-header">
          <h2>Contact Me</h2>
        </div>
        <Container className="contact-frame ">
          <Row>
            <Col md={6}>
              <Form onSubmit={this.sendMessage}>
                <div className="form-group">
                  <Label htmlFor="exampleName">Name *</Label>
                  <Input
                    type="text"
                    name="textName"
                    id="exampleName"
                    placeholder="Full name"
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="exampleEmail">Email *</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Your email"
                  />
                </div>

                <div className="form-group">
                  <Label htmlFor="message">Message *</Label>
                  <Input
                    type="textarea"
                    rows="6"
                    name="messages"
                    id="message"
                    placeholder="Type here..."
                  />
                </div>

                <Button color="info" block>
                  Send Message
                </Button>
              </Form>
              <br />
            </Col>

            <Col md={6}>
              <hr />
              <List>
                <ListItem>
                  <ListItemContent icon="map"> Kigali, Rwanda</ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent icon="web"> www.muvunyi.net</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="email">
                    {" "}
                    idrissa@muvunyi.net
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent icon="phone">
                    {" "}
                    Call : +250787691016
                  </ListItemContent>
                </ListItem>
              </List>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
