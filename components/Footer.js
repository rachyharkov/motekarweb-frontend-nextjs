import React from "react";

export default function Footer() {
  return(
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-media-inner-items">
          <a href="https://www.facebook.com/" data-title="@facebook">
            <i className="bx bxl-facebook-circle"></i>
          </a>
          <a href="https://www.instagram.com/" data-title="@instagram">
            <i className="bx bxl-instagram-alt"></i>
          </a>
        </div>
      </div>
      <div className="footer-inner">
        <div className="footer-inner-content">
          <h5>PT. Motekar Digital Kreasi</h5>
          <p>Jl. Buah Batu No. 161, Kelurahan Turangga, Kecamatan Lengkong, Bandung, 40264 - West Java Indonesia</p>
          <p>ask@motekarstudio.com | 08xxxxxxxxxx</p>
          <p>Copyright &copy; {new Date().getFullYear()} Motekar Studio</p>
          <p><i className="bx bxs-palette"></i> by <a href="https://www.motekarstudio.com/" target="_blank" rel="noreferrer">Alfian K.</a> | <i className='bx bx-code-alt' ></i> by <a href="https://www.rnh-is.me/" target="_blank" rel="noreferrer">rachyharkov</a></p>
          <p>All rights reserved | <a href="https://www.motekarstudio.com/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  )
}