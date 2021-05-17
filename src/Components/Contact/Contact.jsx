import React from "react";
import { VscGithubInverted  } from "react-icons/all"

function Contact() {
    return (
        <>
        <h1>Contact</h1>
        <section class='contact-grid'>
            <form action="https://formspree.io/f/mleajwoj" id="tv2" method="POST" target="_blank" >
                <label>Email
                    <input type='email' name='replyto'/>
                </label>
                <label>Message</label>
                <textarea name="message"/>
                <div class="multi-button">
                <button type='submit' >Send</button>
                </div>
            </form>
            <a href="https://github.com/edithr2852" className="gitlink"><VscGithubInverted /> GITHUB</a>
        </section>
        
      </>
    )
}

export default Contact;