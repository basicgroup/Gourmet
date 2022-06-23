import React from "react";
import "../css/Main-Content.css";
import TableSetting1 from "../images/tablesetting2.jpg"
import TableSetting2 from "../images/tablesetting.jpg"

function MainContent(){
    return (
        <div className="Main-Content-Wrap">
            <div className="Main-Content" id="about">
                <div className="Main-content-about-image-wrap-1">
                    <img src={TableSetting1} alt="tablesetting1"></img>
                </div>
                <div className="Main-content-about-text-1">
                    <h1 className="About-Text">About Catering</h1>
                    <br></br>
                    <h5>Tradition since 1889</h5>
                    <p>
                        The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use   
                        <span>  seasonal  </span> 
                        ingredients.
                    </p>
                    <p className="Grey">
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <hr className="hr"></hr>
            <div className="Main-Content" id="menu">
                <div className="Main-content-about-text-1">
                    <h1 className="About-Text">Our Menu</h1>
                    <br></br>
                    <h5>Bread Basket</h5>
                    <p className="Grey">
                       Assortment of fresh baked fruit breads and muffins 5.50
                    </p>
                    <br></br>
                    <h5>Honey Almond Granola with Fruits</h5>
                    <p className="Grey">
                        Natural cereal of honey toasted oats, raisins, almonds and dates 7.00                   
                    </p>
                    <br></br>
                    <h5>Belgian Waffle</h5>
                    <p className="Grey">
                        Vanilla flavored batter with malted flour 7.50                   
                    </p>
                    <br></br>
                    <h5>Scrambled eggs</h5>
                    <p className="Grey">
                        Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
                    </p>
                    <br></br>
                    <h5>Blueberry Pancakes</h5>
                    <p className="Grey">
                        With syrup, butter and lots of berries 8.50
                    </p>
                </div>
                <div className="Main-content-about-image-wrap-1">
                    <img src={TableSetting2} alt="tablesetting1"></img>
                </div>
            </div>
            <hr className="hr"></hr>
            <div className="Main-Content" id="contact">
                <h1>Contact</h1>
                <br/>
                <p>
                    We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.
                </p>
                <p className="Grey-Blue">
                    <b>Catering Service, 42nd Living St, 43043 New York, NY</b>
                </p>
                <p>
                    You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:
                </p>
                <div id="form">
                    <p>
                        <input placeholder="Name" name="Name" type="text" className="Form-Input" required></input>
                    </p>     
                    <p>
                        <input placeholder="How many people" name="People" type="number" className="Form-Input" required></input>
                    </p>
                    <p>
                        <input placeholder="Date and time" name="Date" type="datetime-local" className="Form-Input" required ></input>
                    </p>
                    <p>
                        <input placeholder="Message \ Special requirements" name="Message" type="text" className="Form-Input" required></input>
                    </p>
                    <p>
                        <button className="Form-Button" type="submit">SEND MESSAGE</button>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MainContent;