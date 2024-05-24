import "../styles/Contact.css";
import { LuMapPin } from "react-icons/lu";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";

function Contact() {
  return (
    <div className="contact-wrapper">
      <div className="contact-content">
        <div className="contact-title">
          <h2>Bize Ulaşın</h2>
        </div>
        <div className="contact-container">
          <div className="contactInfo">
            <div className="contactInfo-box">
              <div className="contactInfo-icon">
                <MdOutlinePhoneInTalk />
              </div>
              <div className="contactInfo-text">
                <p>0 (372) 251 11 11</p>
              </div>
            </div>
            <div className="contactInfo-box">
              <div className="contactInfo-icon">
                <MdOutlinePhoneInTalk />
              </div>
              <div className="contactInfo-text">
                <p>0 (372) 257 74 98</p>
              </div>
            </div>
            <div className="contactInfo-box">
              <div className="contactInfo-icon">
                <MdOutlinePhoneInTalk />
              </div>
              <div className="contactInfo-text">
                <p>0 (372) 257 74 98</p>
              </div>
            </div>
            <div className="contactInfo-box">
              <div className="contactInfo-icon">
                <MdOutlineMail />
              </div>
              <div className="contactInfo-text">
                <p>bilgi@ztso.org.tr</p>
              </div>
            </div>
            <div className="contactInfo-box">
              <div className="contactInfo-icon">
                <LuMapPin />
              </div>
              <div className="contactInfo-text">
                <p>Yayla Mahallesi Bağlık Caddesi No:5, 67100</p>
                <p>Merkez Zonguldak</p>
              </div>
            </div>
            <div className="contactInfo-box">
              <div className="contactInfo-icon">
                <MdOutlineMail />
              </div>
              <div className="contactInfo-text">
                <p>zonguldaktso@tobb.org.tr</p>
              </div>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <div className="contactForm-inputBox">
                <input type="text" name="" required="required" />
                <span>Adınız/Soyadınız</span>
              </div>
              <div className="contactForm-inputBox">
                <input type="text" name="" required="required" />
                <span>Mail Adresiniz</span>
              </div>
              <div className="contactForm-inputBox">
                <input type="text" name="" required="required" />
                <span>Telefon Numaranız</span>
              </div>
              <div className="contactForm-inputBox">
                <input type="text" name="" required="required" />
                <span>Mesaj Konusu</span>
              </div>
              <div className="contactForm-inputBox">
                <textarea required="required"></textarea>
                <span>Mesajınız</span>
              </div>
              <div className="contactForm-inputBox">
                <input type="submit" name="" value="Gönder" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
