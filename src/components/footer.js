import React, { Component } from "react";
import { Footer } from "react-mdl";

class Footers extends Component {
  render() {
    return (
      <div className="footer-text">
        <Footer style={{ height: "90px", background:"#C9CDAB" }}>
          <div  style={{
                textAlign: "center",
                fontSize: "14px", color:"#343052"
              }}>
                <hr/>
            <p> Made With React JS | @Muvunyi 2020</p>
            
            
          </div>
        </Footer>
      </div>
    );
  }
}

export default Footers;
