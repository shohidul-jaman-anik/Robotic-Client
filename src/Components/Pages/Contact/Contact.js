import React from 'react';
import './Contact.css'



const Contact = () => {
    return (
        <div class="container1 my-lg-5">
            <div class="content">
                <div class="left-side">
                    <div class="address details">
                        <i class="fas fa-map-marker-alt"></i>
                        <div class="topic">Address</div>
                        <div class="text-one">Postoghola, NP12</div>
                        <div class="text-two">Dhaka, Bangladesh</div>
                    </div>
                    <div class="phone details">
                        <i class="fas fa-phone-alt"></i>
                        <div class="topic">Phone</div>
                        <div class="text-one">+0098 9893 5##</div>
                        <div class="text-two">+0096 3434 5##</div>
                    </div>
                    <div class="email details">
                        <i class="fas fa-envelope"></i>
                        <div class="topic">Email</div>
                        <div class="text-one">anikh499@gmail.com</div>
                        <div class="text-two">info.robotic@gmail.com</div>
                    </div>
                </div>
                <div class="right-side">
                    <div class="topic-text">Send us a message</div>
                    <p>If you have any question you can message from here. It's our pleasure to help you.</p>
                    <form action="#">
                        <div class="input-box">
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div class="input-box">
                            <input type="text" placeholder="Enter your email" />
                        </div>
                        <div class="input-box message-box">
                            <textarea name="Enter your message" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div class="button">
                            <input type="button" value="Send Now" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;