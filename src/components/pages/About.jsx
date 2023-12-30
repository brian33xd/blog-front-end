import React from "react";

export const About = () => {
  return (
    <main className="about">
      <div className="about__youtube-container">
        <section className="youtube__left">
          <div className="youtube__photo-mask">
            <img
              src="https://imgs.search.brave.com/VL9iNFy_6g8xKGAPe_cqQw1nF3rRIoTamsRu0nz_z6o/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzQ1NDQxNDcwL3Iv/aWwvNWQ3YjI3LzUx/NDY3Njk1MzAvaWxf/NjAweDYwMC41MTQ2/NzY5NTMwX2M3dDQu/anBn"
              alt="perfil"
              className="youtube__photo"
            />
          </div>
        </section>

        <section className="youtube__right">
          <h2 className="youtube__name">Br14n22</h2>
          <p className="youtube__acc">
            @Brian33xd - 12056 subscriptores - 152 videos
          </p>

          <button className="youtube__subscribe">Subscribirse</button>
        </section>
      </div>

      <div className="youtube__videos">
        <h2 className="youtube__title">Últimos videos</h2>
        <ul className="youtube__list">
          <li>
            <iframe
              className="youtube__video"
              src="https://www.youtube.com/embed/ueW_sp1ZnL0?si=QQaFNqT6qpFwMgkK"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </li>
          <li>
            <iframe
              className="youtube__video"
              src="https://www.youtube.com/embed/K8vUDvV5oFs?si=Hj2DRDuKzJjdUZmx"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </li>
          <li>
            <iframe
              className="youtube__video"
              src="https://www.youtube.com/embed/1KjtiG8Xr5w?si=DKKtpwEvbhlwkPaS"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </li>
          <li>
            <iframe
              className="youtube__video"
              src="https://www.youtube.com/embed/Zuz1O7acaBA?si=--aHTtNmCSRXMUjf"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </li>
          <li>
            <iframe
              className="youtube__video"
              src="https://www.youtube.com/embed/bt0dJ5PhAVI?si=RtkoNafq3R9nwNjw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </li>
          <li>
            <iframe
              className="youtube__video"
              src="https://www.youtube.com/embed/Yu7h3b9H4sE?si=Z7NBxuB3L47yQPur"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </li>
        </ul>
      </div>
    </main>
  );
};
